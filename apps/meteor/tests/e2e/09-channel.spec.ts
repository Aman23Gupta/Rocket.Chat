import { test, expect } from '@playwright/test';

import { Global, FlexTab, MainContent, SideNav, LoginPage } from './pageobjects';
import { adminLogin } from './utils/mocks/userAndPasswordMock';
import { LOCALHOST } from './utils/mocks/urlMock';
import { publicChannelCreated, setPublicChannelCreated } from './utils/mocks/checks';
import { publicChannelName } from './utils/mocks/channel';
import { targetUser } from './utils/mocks/interations';

let hasUserAddedInChannel = false;

test.describe('[Channel]', () => {
	let flexTab: FlexTab;
	let loginPage: LoginPage;
	let mainContent: MainContent;
	let sideNav: SideNav;
	let global: Global;

	test.beforeAll(async ({ browser, baseURL }) => {
		const context = await browser.newContext();
		const page = await context.newPage();
		const URL = baseURL || LOCALHOST;
		loginPage = new LoginPage(page);
		await loginPage.goto(URL);

		await loginPage.doLogin(adminLogin);
		sideNav = new SideNav(page);
		mainContent = new MainContent(page);
		flexTab = new FlexTab(page);
		global = new Global(page);

		if (!publicChannelCreated) {
			await sideNav.createChannel(publicChannelName, false);
			setPublicChannelCreated(true);
		}
		await sideNav.doOpenChat('general');
	});
	test.describe('[Search]', () => {
		test.describe('[SpotlightSearch]', async () => {
			test.describe('general:', () => {
				test('expect go to general', async () => {
					await sideNav.doOpenChat('general');
					await expect(mainContent.channelTitle('general')).toContainText('general');
				});
			});

			test.describe('user created channel:', () => {
				test('expect go to the user created channel', async () => {
					await sideNav.doOpenChat(publicChannelName);
					await expect(mainContent.channelTitle(publicChannelName)).toContainText(publicChannelName);
				});
			});
		});

		test.describe('[SideNav Channel List]', () => {
			test.beforeAll(async () => {
				await mainContent.messageInput.click();
			});

			test.describe('general:', async () => {
				test('expect go to the general channel', async () => {
					await sideNav.doOpenChat('general');
				});
			});

			test.describe('user created channel:', async () => {
				test('expect go to the user created channel', async () => {
					await sideNav.doOpenChat(publicChannelName);
				});
			});
		});
	});

	test.describe('[Usage]', () => {
		test.beforeAll(async () => {
			await sideNav.doOpenChat(publicChannelName);
		});

		test.describe('Adding a user to the room:', async () => {
			test.beforeAll(async () => {
				if (await global.getToastBar.isVisible()) {
					await global.dismissToastBar();
				}
				await flexTab.btnTabMembers.click();
			});

			test.afterAll(async () => {
				if (await global.getToastBar.isVisible()) {
					await global.dismissToastBar();
				}
				await flexTab.btnTabMembers.click();
			});

			test('expect add people to the room', async () => {
				await flexTab.addPeopleToChannel(targetUser);
				hasUserAddedInChannel = true;
				await expect(global.getToastBarSuccess).toBeVisible();
			});
		});

		test.describe('[Channel settings]:', async () => {
			test.describe('[Channel topic edit]', async () => {
				test.beforeAll(async () => {
					await flexTab.btnTabInfo.click();
					await flexTab.editNameBtn.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					if (await flexTab.mainSideBar.isVisible()) {
						await flexTab.mainSideBarClose.click();
					}
				});

				test('expect edit the topic input', async () => {
					await flexTab.editTopicTextInput.fill('TOPIC EDITED');
				});

				test('expect save the topic', async () => {
					await flexTab.editNameSave.click();
				});

				test('expect show the new topic', async () => {
					await expect(flexTab.secondSetting('TOPIC EDITED')).toBeVisible();
				});
			});

			test.describe('[Channel announcement edit]', async () => {
				test.beforeAll(async () => {
					await flexTab.btnTabInfo.click();
					await flexTab.editNameBtn.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					if (await flexTab.mainSideBar.isVisible()) {
						await flexTab.mainSideBarClose.click();
					}
				});

				test('expect edit the announcement input', async () => {
					await flexTab.editAnnouncementTextInput.type('ANNOUNCEMENT EDITED');
				});

				test('expect save the announcement', async () => {
					await flexTab.editNameSave.click();
				});

				test('expect show the new announcement', async () => {
					await expect(flexTab.thirdSetting).toHaveText('ANNOUNCEMENT EDITED');
				});
			});

			test.describe('[Channel description edit]', async () => {
				test.beforeAll(async () => {
					await flexTab.btnTabInfo.click();
					await flexTab.editNameBtn.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					if (await flexTab.mainSideBar.isVisible()) {
						await flexTab.mainSideBarClose.click();
					}
				});

				test('expect edit the description input', async () => {
					await flexTab.editDescriptionTextInput.type('DESCRIPTION EDITED');
				});

				test('expect save the description', async () => {
					await flexTab.editNameSave.click();
				});

				test('expect show the new description', async () => {
					await flexTab.mainSideBarBack.click();
					await expect(flexTab.fourthSetting).toHaveText('DESCRIPTION EDITED');
				});
			});
		});

		test.describe('[Members tab usage]:', async () => {
			test.describe('User muted', async () => {
				test.beforeAll(async () => {
					if (!hasUserAddedInChannel) {
						await flexTab.btnTabMembers.click();
						await flexTab.addPeopleToChannel(targetUser);
						await flexTab.btnTabMembers.click();
					}
					await flexTab.btnTabMembers.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					await flexTab.btnTabMembers.click();
				});

				test('expect mute rocket cat', async () => {
					await flexTab.muteUser(targetUser);
				});
			});

			test.describe('[Owner added]', async () => {
				test.beforeAll(async () => {
					if (!hasUserAddedInChannel) {
						await flexTab.btnTabMembers.click();
						await flexTab.addPeopleToChannel(targetUser);
						await flexTab.btnTabMembers.click();
					}
					await flexTab.btnTabMembers.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					await flexTab.btnTabMembers.click();
				});

				test('expect set rocket cat as owner', async () => {
					await flexTab.setUserOwner(targetUser);
				});

				test('expect dismiss the toast', async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
				});

				test('expect the last message should be a subscription role added', async () => {
					await expect(mainContent.lastMessageRoleAdded).toBeVisible();
				});

				test('expect show the target username in owner add message', async () => {
					await expect(mainContent.lastMessageRoleAdded).toContainText(targetUser);
				});
			});

			test.describe('[Moderator added]', async () => {
				test.beforeAll(async () => {
					if (!hasUserAddedInChannel) {
						await flexTab.btnTabMembers.click();
						await flexTab.addPeopleToChannel(targetUser);
						await flexTab.btnTabMembers.click();
					}
					await flexTab.btnTabMembers.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					await flexTab.btnTabMembers.click();
				});

				test('expect set rocket cat as moderator', async () => {
					await flexTab.setUserModerator(targetUser);
				});

				test('expect be that the last message is a subscription role added', async () => {
					await expect(mainContent.lastMessageRoleAdded).toBeVisible();
				});
			});

			test.describe('Channel name edit', async () => {
				test.beforeAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}
					await flexTab.btnTabInfo.click();
				});

				test.afterAll(async () => {
					if (await global.getToastBar.isVisible()) {
						await global.dismissToastBar();
					}

					if (await flexTab.mainSideBar.isVisible()) {
						await flexTab.btnTabInfo.click();
					}
				});

				test('expect show the old name', async () => {
					await expect(flexTab.firstSetting).toHaveText(publicChannelName);
				});

				test('expect click the edit name', async () => {
					await flexTab.editNameBtn.click();
				});

				test('expect edit the name input', async () => {
					await flexTab.editNameTextInput.fill(`NAME-EDITED-${publicChannelName}`);
				});

				test('expect save the name', async () => {
					await flexTab.editNameSave.click();
				});

				test('expect to find and open with new name', async () => {
					await sideNav.doOpenChat(`NAME-EDITED-${publicChannelName}`);
				});
			});
		});
	});
});
