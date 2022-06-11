function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/integrations/lib/rocketchat.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  integrations: () => integrations
});
const integrations = {
  outgoingEvents: {
    sendMessage: {
      label: 'Integrations_Outgoing_Type_SendMessage',
      value: 'sendMessage',
      use: {
        channel: true,
        triggerWords: true,
        targetRoom: false
      }
    },
    fileUploaded: {
      label: 'Integrations_Outgoing_Type_FileUploaded',
      value: 'fileUploaded',
      use: {
        channel: true,
        triggerWords: false,
        targetRoom: false
      }
    },
    roomArchived: {
      label: 'Integrations_Outgoing_Type_RoomArchived',
      value: 'roomArchived',
      use: {
        channel: false,
        triggerWords: false,
        targetRoom: false
      }
    },
    roomCreated: {
      label: 'Integrations_Outgoing_Type_RoomCreated',
      value: 'roomCreated',
      use: {
        channel: false,
        triggerWords: false,
        targetRoom: false
      }
    },
    roomJoined: {
      label: 'Integrations_Outgoing_Type_RoomJoined',
      value: 'roomJoined',
      use: {
        channel: true,
        triggerWords: false,
        targetRoom: false
      }
    },
    roomLeft: {
      label: 'Integrations_Outgoing_Type_RoomLeft',
      value: 'roomLeft',
      use: {
        channel: true,
        triggerWords: false,
        targetRoom: false
      }
    },
    userCreated: {
      label: 'Integrations_Outgoing_Type_UserCreated',
      value: 'userCreated',
      use: {
        channel: false,
        triggerWords: false,
        targetRoom: true
      }
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/integrations/lib/086731a6de6e1f16652769e00bec4966e54c31b4.map
