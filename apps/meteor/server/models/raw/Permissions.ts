import type { IPermission, IRole, RocketChatRecordDeleted } from '@rocket.chat/core-typings';
import type { IPermissionsModel } from '@rocket.chat/model-typings';
import type { Collection, Db } from 'mongodb';
import { getCollectionName } from '@rocket.chat/models';

import { BaseRaw } from './BaseRaw';

export class PermissionsRaw extends BaseRaw<IPermission> implements IPermissionsModel {
	constructor(db: Db, trash?: Collection<RocketChatRecordDeleted<IPermission>>) {
		super(db, getCollectionName('permissions'), trash);
	}

	async createOrUpdate(name: string, roles: IRole['_id'][]): Promise<IPermission['_id']> {
		const exists = await this.findOne<Pick<IPermission, '_id'>>(
			{
				_id: name,
				roles,
			},
			{ fields: { _id: 1 } },
		);

		if (exists) {
			return exists._id;
		}

		return this.update({ _id: name }, { $set: { roles } }, { upsert: true }).then((result) => result.result._id);
	}

	async create(id: string, roles: IRole['_id'][]): Promise<IPermission['_id']> {
		const exists = await this.findOneById<Pick<IPermission, '_id'>>(id, { fields: { _id: 1 } });

		if (exists) {
			return exists._id;
		}

		return this.update({ _id: id }, { $set: { roles } }, { upsert: true }).then((result) => result.result._id);
	}

	async addRole(permission: string, role: IRole['_id']): Promise<void> {
		await this.update({ _id: permission, roles: { $ne: role } }, { $addToSet: { roles: role } });
	}

	async setRoles(permission: string, roles: IRole['_id'][]): Promise<void> {
		await this.update({ _id: permission }, { $set: { roles } });
	}

	async removeRole(permission: string, role: IRole['_id']): Promise<void> {
		await this.update({ _id: permission, roles: role }, { $pull: { roles: role } });
	}
}
