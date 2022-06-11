function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/QuickActions/defaultActions.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let addAction, QuickActionsEnum;
module.link(".", {
  addAction(v) {
    addAction = v;
  },

  QuickActionsEnum(v) {
    QuickActionsEnum = v;
  }

}, 0);
addAction(QuickActionsEnum.MoveQueue, {
  groups: ['live'],
  id: QuickActionsEnum.MoveQueue,
  title: 'Move_queue',
  icon: 'burger-arrow-left',
  order: 1
});
addAction(QuickActionsEnum.ChatForward, {
  groups: ['live'],
  id: QuickActionsEnum.ChatForward,
  title: 'Forward_chat',
  icon: 'balloon-arrow-top-right',
  order: 2
});
addAction(QuickActionsEnum.Transcript, {
  groups: ['live'],
  id: QuickActionsEnum.Transcript,
  title: 'Transcript',
  icon: 'mail-arrow-top-right',
  order: 3
});
addAction(QuickActionsEnum.CloseChat, {
  groups: ['live'],
  id: QuickActionsEnum.CloseChat,
  title: 'Close',
  icon: 'balloon-close-top-right',
  order: 5,
  color: 'danger'
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/QuickActions/0bd522a21e0f9811624f3d6cd41f0a535be29768.map
