function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/integrations/lib/rocketchat.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  integrations: function () {
    return integrations;
  }
});
var integrations = {
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
//# sourceMappingURL=/dynamic/app/integrations/lib/06f7d0fd562d89c018a3992d956b4931bf23c8d6.map
