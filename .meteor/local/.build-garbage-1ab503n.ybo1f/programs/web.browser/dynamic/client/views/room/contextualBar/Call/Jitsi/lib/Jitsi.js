function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/lib/Jitsi.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  JitsiMeetExternalAPI: () => JitsiMeetExternalAPI
});
let postis;
module.link("postis", {
  default(v) {
    postis = v;
  }

}, 0);

/**
 * The minimum width for the Jitsi Meet frame
 * @type {number}
 */
const MIN_WIDTH = 200; // var MIN_WIDTH = 790;

/**
 * The minimum height for the Jitsi Meet frame
 * @type {number}
 */

const MIN_HEIGHT = 300;
/**
 * Last id of api object
 * @type {number}
 */

let id = 0;
/**
 * Maps the names of the commands expected by the API with the name of the
 * commands expected by jitsi-meet
 */

const commands = {
  displayName: 'display-name',
  toggleAudio: 'toggle-audio',
  toggleVideo: 'toggle-video',
  toggleFilmStrip: 'toggle-film-strip',
  toggleChat: 'toggle-chat',
  toggleContactList: 'toggle-contact-list',
  toggleShareScreen: 'toggle-share-screen'
};
/**
 * Maps the names of the events expected by the API with the name of the
 * events expected by jitsi-meet
 */

const events = {
  incomingMessage: 'incoming-message',
  outgoingMessage: 'outgoing-message',
  displayNameChange: 'display-name-change',
  participantJoined: 'participant-joined',
  participantLeft: 'participant-left',
  videoConferenceJoined: 'video-conference-joined',
  videoConferenceLeft: 'video-conference-left'
};
/**
 * Sends the passed object to Jitsi Meet
 * @param postis {Postis object} the postis instance that is going to be used
 * to send the message
 * @param object the object to be sent
 * - method {sting}
 * - params {object}
 */

function sendMessage(postis, object) {
  postis.send(object);
}
/**
 * Sends message for event enable/disable status change.
 * @param postis {Postis object} the postis instance that is going to be used.
 * @param event {string} the name of the event
 * @param status {boolean} true - enabled; false - disabled;
 */


function changeEventStatus(postis, event, status) {
  if (!(event in events)) {
    console.error('Not supported event name.');
    return;
  }

  sendMessage(postis, {
    method: 'jitsiSystemMessage',
    params: {
      type: 'eventStatus',
      name: events[event],
      value: status
    }
  });
}
/**
 * Constructs new API instance. Creates iframe element that loads
 * Jitsi Meet.
 * @param domain the domain name of the server that hosts the conference
 * @param room_name the name of the room to join
 * @param width width of the iframe
 * @param height height of the iframe
 * @param parent_node the node that will contain the iframe
 * @param filmStripOnly if the value is true only the small videos will be
 * visible.
 * @param noSsl if the value is true https won't be used
 * @param token if you need token authentication, then pass the token
 * @constructor
 */


function JitsiMeetExternalAPI(domain, room_name, width, height, parentNode, configOverwrite, interfaceConfigOverwrite, noSsl, token) {
  if (!width || width < MIN_WIDTH) {
    width = MIN_WIDTH;
  }

  if (!height || height < MIN_HEIGHT) {
    height = MIN_HEIGHT;
  }

  this.parentNode = null;

  if (parentNode) {
    this.parentNode = parentNode;
  } else {
    const scriptTag = document.scripts[document.scripts.length - 1];
    this.parentNode = scriptTag.parentNode;
  }

  this.iframeHolder = this.parentNode.appendChild(document.createElement('div'));
  this.iframeHolder.id = "jitsiConference".concat(id);

  if (width) {
    this.iframeHolder.style.width = "".concat(width, "px");
  }

  if (height) {
    this.iframeHolder.style.height = "".concat(height, "px");
  }

  this.frameName = "jitsiConferenceFrame".concat(id);
  this.url = "".concat(noSsl ? 'http' : 'https', "://").concat(domain, "/");

  if (room_name) {
    this.url += room_name;
  }

  if (token) {
    this.url += "?jwt=".concat(token);
  }

  this.url += "#jitsi_meet_external_api_id=".concat(id);
  let key;

  if (configOverwrite) {
    for (key in configOverwrite) {
      if (!configOverwrite.hasOwnProperty(key) || typeof key !== 'string') {
        continue;
      }

      this.url += "&config.".concat(key, "=").concat(configOverwrite[key]);
    }
  }

  if (interfaceConfigOverwrite) {
    for (key in interfaceConfigOverwrite) {
      if (!interfaceConfigOverwrite.hasOwnProperty(key) || typeof key !== 'string') {
        continue;
      }

      this.url += "&interfaceConfig.".concat(key, "=").concat(interfaceConfigOverwrite[key]);
    }
  }

  this.frame = document.createElement('iframe');
  this.frame.src = this.url;
  this.frame.name = this.frameName;
  this.frame.id = this.frameName;
  this.frame.width = '100%';
  this.frame.height = '100%';
  this.frame.setAttribute('allowFullScreen', 'true');
  this.frame.setAttribute('allow', 'microphone; camera');
  this.frame = this.iframeHolder.appendChild(this.frame);
  this.postis = postis({
    window: this.frame.contentWindow,
    scope: "jitsi_meet_external_api_".concat(id)
  });
  this.eventHandlers = {};
  id++;
}

/**
 * Executes command. The available commands are:
 * displayName - sets the display name of the local participant to the value
 * passed in the arguments array.
 * toggleAudio - mutes / unmutes audio with no arguments
 * toggleVideo - mutes / unmutes video with no arguments
 * filmStrip - hides / shows the film strip with no arguments
 * If the command doesn't require any arguments the parameter should be set
 * to empty array or it may be omitted.
 * @param name the name of the command
 * @param arguments array of arguments
 */
JitsiMeetExternalAPI.prototype.executeCommand = function (name, argumentsList) {
  if (!(name in commands)) {
    console.error('Not supported command name.');
    return;
  }

  let argumentsArray = argumentsList;

  if (!argumentsArray) {
    argumentsArray = [];
  }

  sendMessage(this.postis, {
    method: commands[name],
    params: argumentsArray
  });
};
/**
 * Executes commands. The available commands are:
 * displayName - sets the display name of the local participant to the value
 * passed in the arguments array.
 * toggleAudio - mutes / unmutes audio. no arguments
 * toggleVideo - mutes / unmutes video. no arguments
 * filmStrip - hides / shows the film strip. no arguments
 * toggleChat - hides / shows chat. no arguments.
 * toggleContactList - hides / shows contact list. no arguments.
 * toggleShareScreen - starts / stops screen sharing. no arguments.
 * @param object the object with commands to be executed. The keys of the
 * object are the commands that will be executed and the values are the
 * arguments for the command.
 */


JitsiMeetExternalAPI.prototype.executeCommands = function (object) {
  Object.entries(object).forEach(_ref => {
    let [key, value] = _ref;
    return this.executeCommand(key, value);
  });
};
/**
 * Adds event listeners to Meet Jitsi. The object key should be the name of
 * the event and value - the listener.
 * Currently we support the following
 * events:
 * incomingMessage - receives event notifications about incoming
 * messages. The listener will receive object with the following structure:
 * {{
 *  "from": from,//JID of the user that sent the message
 *  "nick": nick,//the nickname of the user that sent the message
 *  "message": txt//the text of the message
 * }}
 * outgoingMessage - receives event notifications about outgoing
 * messages. The listener will receive object with the following structure:
 * {{
 *  "message": txt//the text of the message
 * }}
 * displayNameChanged - receives event notifications about display name
 * change. The listener will receive object with the following structure:
 * {{
 * jid: jid,//the JID of the participant that changed his display name
 * displayname: displayName //the new display name
 * }}
 * participantJoined - receives event notifications about new participant.
 * The listener will receive object with the following structure:
 * {{
 * jid: jid //the jid of the participant
 * }}
 * participantLeft - receives event notifications about the participant that
 * left the room.
 * The listener will receive object with the following structure:
 * {{
 * jid: jid //the jid of the participant
 * }}
 * video-conference-joined - receives event notifications about the local user
 * has successfully joined the video conference.
 * The listener will receive object with the following structure:
 * {{
 * roomName: room //the room name of the conference
 * }}
 * video-conference-left - receives event notifications about the local user
 * has left the video conference.
 * The listener will receive object with the following structure:
 * {{
 * roomName: room //the room name of the conference
 * }}
 * @param object
 */


JitsiMeetExternalAPI.prototype.addEventListeners = function (object) {
  Object.entries(object).forEach(_ref2 => {
    let [key, value] = _ref2;
    return this.addEventListener(key, value);
  });
};
/**
 * Adds event listeners to Meet Jitsi. Currently we support the following
 * events:
 * incomingMessage - receives event notifications about incoming
 * messages. The listener will receive object with the following structure:
 * {{
 *  "from": from,//JID of the user that sent the message
 *  "nick": nick,//the nickname of the user that sent the message
 *  "message": txt//the text of the message
 * }}
 * outgoingMessage - receives event notifications about outgoing
 * messages. The listener will receive object with the following structure:
 * {{
 *  "message": txt//the text of the message
 * }}
 * displayNameChanged - receives event notifications about display name
 * change. The listener will receive object with the following structure:
 * {{
 * jid: jid,//the JID of the participant that changed his display name
 * displayname: displayName //the new display name
 * }}
 * participantJoined - receives event notifications about new participant.
 * The listener will receive object with the following structure:
 * {{
 * jid: jid //the jid of the participant
 * }}
 * participantLeft - receives event notifications about participant the that
 * left the room.
 * The listener will receive object with the following structure:
 * {{
 * jid: jid //the jid of the participant
 * }}
 * video-conference-joined - receives event notifications fired when the local
 * user has joined the video conference.
 * The listener will receive object with the following structure:
 * {{
 * roomName: room //the room name of the conference
 * }}
 * video-conference-left - receives event notifications fired when the local
 * user has joined the video conference.
 * The listener will receive object with the following structure:
 * {{
 * roomName: room //the room name of the conference
 * }}
 * @param event the name of the event
 * @param listener the listener
 */


JitsiMeetExternalAPI.prototype.addEventListener = function (event, listener) {
  if (!(event in events)) {
    console.error('Not supported event name.');
    return;
  } // We cannot remove listeners from postis that's why we are handling the
  // callback that way.


  if (!(event in this.eventHandlers)) {
    this.postis.listen(events[event], data => {
      if (event in this.eventHandlers && typeof this.eventHandlers[event] === 'function') {
        this.eventHandlers[event].call(null, data);
      }
    });
  }

  this.eventHandlers[event] = listener;
  changeEventStatus(this.postis, event, true);
};
/**
 * Removes event listener.
 * @param event the name of the event.
 */


JitsiMeetExternalAPI.prototype.removeEventListener = function (event) {
  if (!(event in this.eventHandlers)) {
    console.error("The event ".concat(event, " is not registered."));
    return;
  }

  delete this.eventHandlers[event];
  changeEventStatus(this.postis, event, false);
};
/**
 * Removes event listeners.
 * @param events array with the names of the events.
 */


JitsiMeetExternalAPI.prototype.removeEventListeners = function (events) {
  for (let i = 0; i < events.length; i++) {
    this.removeEventListener(events[i]);
  }
};
/**
 * Removes the listeners and removes the Jitsi Meet frame.
 */


JitsiMeetExternalAPI.prototype.dispose = function () {
  this.postis.destroy();
  const frame = document.getElementById(this.frameName);

  if (frame) {
    frame.src = 'about:blank';
  }

  const self = this;
  window.setTimeout(() => {
    self.iframeHolder.removeChild(self.frame);
    self.iframeHolder.parentNode.removeChild(self.iframeHolder);
  }, 10);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/lib/54e7174f0dfb6f8a8aedcd9a0ddedb7e3f8620ba.map
