"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CometChatVideoBubble = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../../");

var _2 = require("../");

var _hooks = require("./hooks");

var _style = require("./style");

var CometChatVideoBubble = function CometChatVideoBubble(props) {
  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var _React$useState3 = _react.default.useState(null),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      avatar = _React$useState4[0],
      setAvatar = _React$useState4[1];

  var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      videoURL = _React$useState6[0],
      setVideoURL = _React$useState6[1];

  var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      isHovering = _React$useState8[0],
      setIsHovering = _React$useState8[1];

  var senderAvatar,
      senderName,
      leftView,
      rightView,
      usernameStyle,
      receiptStyle,
      messageTime,
      videoMessage = null;
  var messageReplies = null; //<CometChatThreadedMessageReplyCount messageObject={props.messageObject} />;

  var messageReactions = /*#__PURE__*/_react.default.createElement(_2.CometChatMessageReactions, {
    messageObject: props.messageObject,
    loggedInUser: props.loggedInUser
  });

  var showMessageOptions = function showMessageOptions() {
    if (!isHovering) {
      setIsHovering(true);
    }
  };

  var hideMessageOptions = function hideMessageOptions() {
    if (isHovering) {
      setIsHovering(false);
    }
  };

  var getAvatar = function getAvatar() {
    if (!avatar) {
      return null;
    }

    var getAvatarTemplate = function getAvatarTemplate() {
      if (props.avatar && props.avatar.length) {
        return /*#__PURE__*/_react.default.createElement(_.CometChatAvatar, {
          image: avatar
        });
      } else if (props.messageObject && props.messageObject.sender) {
        return /*#__PURE__*/_react.default.createElement(_.CometChatAvatar, {
          user: avatar
        });
      }
    };

    return /*#__PURE__*/_react.default.createElement("div", {
      style: (0, _style.messageAvatarStyle)(),
      className: "message_kit__avatar"
    }, getAvatarTemplate());
  };

  var getSenderName = function getSenderName() {
    if (!name) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      style: (0, _style.messageSenderStyle)(props),
      className: "message_kit__sender"
    }, name);
  };

  senderAvatar = getAvatar();
  senderName = getSenderName();
  messageTime = props.messageObject._composedAt || props.messageObject.sentAt;
  videoMessage = /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _style.messageKitBlockStyle)(props),
    className: "message_kit__blocks"
  }, /*#__PURE__*/_react.default.createElement("video", {
    className: "message__message-blocks",
    style: (0, _style.messageBlockStyle)(props),
    controls: true,
    src: videoURL
  }));

  if (props.messageAlignment === _2.messageAlignment.leftAligned) {
    if (props.messageTimeAlignment.toLowerCase() === _2.messageTimeAlignment.top) {
      var _props$loggedInUser;

      usernameStyle = /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageTimestampStyle)(props),
        className: "message_kit__username_bar"
      }, senderName, "\xA0", /*#__PURE__*/_react.default.createElement(_.CometChatDate, {
        time: messageTime
      }));
      receiptStyle = ((_props$loggedInUser = props.loggedInUser) === null || _props$loggedInUser === void 0 ? void 0 : _props$loggedInUser.uid) === props.messageObject.getSender().getUid() ? /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageKitReceiptStyle)(props),
        className: "message_kit__receipt_bar"
      }, /*#__PURE__*/_react.default.createElement(_.CometChatMessageReceipt, {
        messageObject: props.messageObject,
        loggedInUser: props.loggedInUser
      })) : null;
    } else {
      var _props$loggedInUser2;

      usernameStyle = /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageTimestampStyle)(props),
        className: "message_kit__username_bar"
      }, senderName);
      var messageReceipt = ((_props$loggedInUser2 = props.loggedInUser) === null || _props$loggedInUser2 === void 0 ? void 0 : _props$loggedInUser2.uid) === props.messageObject.getSender().getUid() ? /*#__PURE__*/_react.default.createElement(_.CometChatMessageReceipt, {
        messageObject: props.messageObject,
        loggedInUser: props.loggedInUser
      }) : null;
      receiptStyle = /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageKitReceiptStyle)(props),
        className: "message_kit__receipt_bar"
      }, messageReceipt, /*#__PURE__*/_react.default.createElement(_.CometChatDate, {
        time: messageTime
      }));
    }

    leftView = senderAvatar ? /*#__PURE__*/_react.default.createElement("div", {
      style: (0, _style.messageLeftGutterStyle)(props),
      className: "message_kit__gutter__left"
    }, senderAvatar) : null;
    rightView = /*#__PURE__*/_react.default.createElement("div", {
      style: (0, _style.messageRightGutterStyle)(),
      className: "message_kit__gutter__right"
    }, usernameStyle, videoMessage, messageReactions, messageReplies, receiptStyle);
  } else {
    var _props$loggedInUser3;

    //if the message sender is not same as logged in user i.e. message receiver
    if (((_props$loggedInUser3 = props.loggedInUser) === null || _props$loggedInUser3 === void 0 ? void 0 : _props$loggedInUser3.uid) !== props.messageObject.getSender().getUid()) {
      leftView = props.messageObject.receiverType === _2.CometChatMessageReceiverType.group && senderAvatar ? /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageLeftGutterStyle)(props),
        className: "message_kit__gutter__left"
      }, senderAvatar) : null;

      if (props.messageTimeAlignment.toLowerCase() === _2.messageTimeAlignment.top) {
        var _props$messageObject;

        /**
         * Not showing the message sender name in 1-1 conversation
         */
        if (((_props$messageObject = props.messageObject) === null || _props$messageObject === void 0 ? void 0 : _props$messageObject.receiverType) !== _2.CometChatMessageReceiverType.group) {
          senderName = null;
        }

        usernameStyle = /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _style.messageTimestampStyle)(props),
          className: "message_kit__username_bar"
        }, senderName, "\xA0", /*#__PURE__*/_react.default.createElement(_.CometChatDate, {
          time: messageTime
        }));
        receiptStyle = null;
      } else {
        usernameStyle = props.messageObject.receiverType === _2.CometChatMessageReceiverType.group ? /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _style.messageTimestampStyle)(props),
          className: "message_kit__username_bar"
        }, senderName) : null;
        receiptStyle = /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _style.messageKitReceiptStyle)(props),
          className: "message_kit__receipt_bar"
        }, /*#__PURE__*/_react.default.createElement(_.CometChatDate, {
          time: messageTime
        }));
      }

      rightView = /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageRightGutterStyle)(),
        className: "message_kit__gutter__right"
      }, usernameStyle, videoMessage, messageReactions, messageReplies, receiptStyle);
    } else {
      if (props.messageTimeAlignment.toLowerCase() === "top") {
        usernameStyle = /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _style.messageTimestampStyle)(props),
          className: "message_kit__username_bar"
        }, /*#__PURE__*/_react.default.createElement(_.CometChatDate, {
          time: messageTime
        }));
        receiptStyle = /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _style.messageKitReceiptStyle)(props),
          className: "message_kit__receipt_bar"
        }, /*#__PURE__*/_react.default.createElement(_.CometChatMessageReceipt, {
          messageObject: props.messageObject,
          loggedInUser: props.loggedInUser
        }));
      } else {
        usernameStyle = null;
        receiptStyle = /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _style.messageKitReceiptStyle)(props),
          className: "message_kit__receipt_bar"
        }, /*#__PURE__*/_react.default.createElement(_.CometChatDate, {
          time: messageTime
        }), /*#__PURE__*/_react.default.createElement(_.CometChatMessageReceipt, {
          messageObject: props.messageObject,
          loggedInUser: props.loggedInUser
        }));
      }

      leftView = /*#__PURE__*/_react.default.createElement("div", {
        style: (0, _style.messageLeftGutterStyle)(props),
        className: "message_kit__gutter__left"
      }, usernameStyle, videoMessage, messageReactions, messageReplies, receiptStyle);
      rightView = null;
    }
  }

  (0, _hooks.Hooks)(props, setName, setAvatar, setVideoURL);
  var messageOptions = isHovering ? /*#__PURE__*/_react.default.createElement(_2.CometChatMessageHover, {
    options: props.messageOptions,
    style: (0, _2.messageHoverStyling)(props)
  }) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _style.messageHoverStyle)(props),
    className: "message_kit__hover",
    onMouseEnter: showMessageOptions,
    onMouseLeave: hideMessageOptions
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _style.messageActionsStyle)(),
    className: "message_kit__actions"
  }, messageOptions, /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _style.messageGutterStyle)(props),
    className: "c-message_kit__gutter"
  }, leftView, rightView)));
};

exports.CometChatVideoBubble = CometChatVideoBubble;
CometChatVideoBubble.defaultProps = {
  width: "300px",
  height: "200px",
  cornerRadius: "12px",
  backgroundColor: "linear-gradient(to right, red , yellow)",
  border: "0 none",
  avatar: null,
  userName: null,
  usernameFont: "600 13px Inter",
  usernameColor: "#39f",
  messageAlignment: "standard",
  messageTimeAlignment: "bottom",
  videoURL: null,
  messageObject: null,
  loggedInUser: null
};
CometChatVideoBubble.propTypes = {
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  cornerRadius: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  border: _propTypes.default.string,
  avatar: _propTypes.default.string,
  userName: _propTypes.default.string,
  usernameFont: _propTypes.default.string,
  usernameColor: _propTypes.default.string,
  messageAlignment: _propTypes.default.oneOf(["standard", "leftAligned"]),
  messageTimeAlignment: _propTypes.default.oneOf(["top", "bottom"]),
  videoURL: _propTypes.default.string,
  messageObject: _propTypes.default.object,
  loggedInUser: _propTypes.default.object
};