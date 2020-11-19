// source: ots/enum/enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ots.enums.AcceptOddsChange', null, global);
goog.exportSymbol('proto.ots.enums.AcceptanceStatus', null, global);
goog.exportSymbol('proto.ots.enums.BetBonusMode', null, global);
goog.exportSymbol('proto.ots.enums.BetBonusType', null, global);
goog.exportSymbol('proto.ots.enums.BetChannel', null, global);
goog.exportSymbol('proto.ots.enums.BetStakeType', null, global);
goog.exportSymbol('proto.ots.enums.CancelReason', null, global);
goog.exportSymbol('proto.ots.enums.CancelStatus', null, global);
goog.exportSymbol('proto.ots.enums.Reason', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ots.enums.Reason = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ots.enums.Reason, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.enums.Reason.displayName = 'proto.ots.enums.Reason';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ots.enums.Reason.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.enums.Reason.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.enums.Reason} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.enums.Reason.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ots.enums.Reason}
 */
proto.ots.enums.Reason.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.enums.Reason;
  return proto.ots.enums.Reason.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.enums.Reason} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.enums.Reason}
 */
proto.ots.enums.Reason.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ots.enums.Reason.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.enums.Reason.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.enums.Reason} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.enums.Reason.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.ots.enums.Reason.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ots.enums.Reason} returns this
 */
proto.ots.enums.Reason.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.ots.enums.Reason.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.enums.Reason} returns this
 */
proto.ots.enums.Reason.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.ots.enums.AcceptanceStatus = {
  REJECTED: 0,
  ACCEPTED: 1
};

/**
 * @enum {number}
 */
proto.ots.enums.CancelStatus = {
  NOT_CANCELED: 0,
  CANCELED: 1
};

/**
 * @enum {number}
 */
proto.ots.enums.CancelReason = {
  UNKNOWN: 0,
  TICKET_TIMEOUT: 1,
  WRONG_TICKET: 2,
  TECHNICAL_ISSUE: 3,
  UNEXPECTED_ISSUE: 4,
  REGULATOR: 5
};

/**
 * @enum {number}
 */
proto.ots.enums.BetStakeType = {
  SUM: 0,
  UNIT: 1
};

/**
 * @enum {number}
 */
proto.ots.enums.AcceptOddsChange = {
  NONE: 0,
  ANY: 1,
  HIGHER: 2
};

/**
 * @enum {number}
 */
proto.ots.enums.BetChannel = {
  NOT_SPECIFIED: 0,
  INTERNET: 1,
  RETAIL: 2,
  TERMINAL: 3,
  MOBILE: 4,
  PHONE: 5,
  SMS: 6,
  CALL_CENTRE: 7,
  TV_APP: 8,
  AGENT: 9
};

/**
 * @enum {number}
 */
proto.ots.enums.BetBonusType = {
  TOTAL: 0
};

/**
 * @enum {number}
 */
proto.ots.enums.BetBonusMode = {
  ALL: 0
};

goog.object.extend(exports, proto.ots.enums);
