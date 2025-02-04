import type { ICustomSound, RocketChatRecordDeleted } from '@rocket.chat/core-typings';
import type { ICustomSoundsModel } from '@rocket.chat/model-typings';
import type {
	Collection,
	Cursor,
	Db,
	FindOneOptions,
	IndexSpecification,
	InsertOneWriteOpResult,
	UpdateWriteOpResult,
	WithId,
	WithoutProjection,
} from 'mongodb';
import { getCollectionName } from '@rocket.chat/models';

import { BaseRaw } from './BaseRaw';

export class CustomSoundsRaw extends BaseRaw<ICustomSound> implements ICustomSoundsModel {
	constructor(db: Db, trash?: Collection<RocketChatRecordDeleted<ICustomSound>>) {
		super(db, getCollectionName('custom_sounds'), trash);
	}

	protected modelIndexes(): IndexSpecification[] {
		return [{ key: { name: 1 } }];
	}

	// find
	findByName(name: string, options: WithoutProjection<FindOneOptions<ICustomSound>>): Cursor<ICustomSound> {
		const query = {
			name,
		};

		return this.find(query, options);
	}

	findByNameExceptId(name: string, except: string, options: WithoutProjection<FindOneOptions<ICustomSound>>): Cursor<ICustomSound> {
		const query = {
			_id: { $nin: [except] },
			name,
		};

		return this.find(query, options);
	}

	// update
	setName(_id: string, name: string): Promise<UpdateWriteOpResult> {
		const update = {
			$set: {
				name,
			},
		};

		return this.updateOne({ _id }, update);
	}

	// INSERT
	create(data: ICustomSound): Promise<InsertOneWriteOpResult<WithId<ICustomSound>>> {
		return this.insertOne(data);
	}
}
