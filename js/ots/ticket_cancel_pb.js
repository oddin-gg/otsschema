// source: ots/ticket_cancel.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ots_enum_enums_pb = require('../ots/enum/enums_pb.js');
goog.object.extend(proto, ots_enum_enums_pb);
goog.exportSymbol('proto.ots.CancelBetInfo', null, global);
goog.exportSymbol('proto.ots.TicketCancelRequest', null, global);
goog.exportSymbol('proto.ots.TicketCancelResponse', null, global);
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
proto.ots.TicketCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ots.TicketCancelRequest.repeatedFields_, null);
};
goog.inherits(proto.ots.TicketCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.TicketCancelRequest.displayName = 'proto.ots.TicketCancelRequest';
}
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
proto.ots.CancelBetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ots.CancelBetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.CancelBetInfo.displayName = 'proto.ots.CancelBetInfo';
}
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
proto.ots.TicketCancelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ots.TicketCancelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.TicketCancelResponse.displayName = 'proto.ots.TicketCancelResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ots.TicketCancelRequest.repeatedFields_ = [6];



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
proto.ots.TicketCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.TicketCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.TicketCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.TicketCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cancelReason: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cancelReasonDetail: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    cancelPercent: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cancelBetInfoList: jspb.Message.toObjectList(msg.getCancelBetInfoList(),
    proto.ots.CancelBetInfo.toObject, includeInstance)
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
 * @return {!proto.ots.TicketCancelRequest}
 */
proto.ots.TicketCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.TicketCancelRequest;
  return proto.ots.TicketCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.TicketCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.TicketCancelRequest}
 */
proto.ots.TicketCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.ots.enums.CancelReason} */ (reader.readEnum());
      msg.setCancelReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCancelReasonDetail(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelPercent(value);
      break;
    case 6:
      var value = new proto.ots.CancelBetInfo;
      reader.readMessage(value,proto.ots.CancelBetInfo.deserializeBinaryFromReader);
      msg.addCancelBetInfo(value);
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
proto.ots.TicketCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.TicketCancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.TicketCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.TicketCancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCancelReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCancelReasonDetail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCancelPercent();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getCancelBetInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.ots.CancelBetInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ots.TicketCancelRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.TicketCancelRequest} returns this
 */
proto.ots.TicketCancelRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional enums.CancelReason cancel_reason = 2;
 * @return {!proto.ots.enums.CancelReason}
 */
proto.ots.TicketCancelRequest.prototype.getCancelReason = function() {
  return /** @type {!proto.ots.enums.CancelReason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ots.enums.CancelReason} value
 * @return {!proto.ots.TicketCancelRequest} returns this
 */
proto.ots.TicketCancelRequest.prototype.setCancelReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string cancel_reason_detail = 3;
 * @return {string}
 */
proto.ots.TicketCancelRequest.prototype.getCancelReasonDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.TicketCancelRequest} returns this
 */
proto.ots.TicketCancelRequest.prototype.setCancelReasonDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ots.TicketCancelRequest.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ots.TicketCancelRequest} returns this
*/
proto.ots.TicketCancelRequest.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ots.TicketCancelRequest} returns this
 */
proto.ots.TicketCancelRequest.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ots.TicketCancelRequest.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 cancel_percent = 5;
 * @return {number}
 */
proto.ots.TicketCancelRequest.prototype.getCancelPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ots.TicketCancelRequest} returns this
 */
proto.ots.TicketCancelRequest.prototype.setCancelPercent = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated CancelBetInfo cancel_bet_info = 6;
 * @return {!Array<!proto.ots.CancelBetInfo>}
 */
proto.ots.TicketCancelRequest.prototype.getCancelBetInfoList = function() {
  return /** @type{!Array<!proto.ots.CancelBetInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ots.CancelBetInfo, 6));
};


/**
 * @param {!Array<!proto.ots.CancelBetInfo>} value
 * @return {!proto.ots.TicketCancelRequest} returns this
*/
proto.ots.TicketCancelRequest.prototype.setCancelBetInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ots.CancelBetInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ots.CancelBetInfo}
 */
proto.ots.TicketCancelRequest.prototype.addCancelBetInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ots.CancelBetInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ots.TicketCancelRequest} returns this
 */
proto.ots.TicketCancelRequest.prototype.clearCancelBetInfoList = function() {
  return this.setCancelBetInfoList([]);
};





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
proto.ots.CancelBetInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.CancelBetInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.CancelBetInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.CancelBetInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cancelPercent: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ots.CancelBetInfo}
 */
proto.ots.CancelBetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.CancelBetInfo;
  return proto.ots.CancelBetInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.CancelBetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.CancelBetInfo}
 */
proto.ots.CancelBetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCancelPercent(value);
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
proto.ots.CancelBetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.CancelBetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.CancelBetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.CancelBetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCancelPercent();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ots.CancelBetInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.CancelBetInfo} returns this
 */
proto.ots.CancelBetInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 cancel_percent = 2;
 * @return {number}
 */
proto.ots.CancelBetInfo.prototype.getCancelPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ots.CancelBetInfo} returns this
 */
proto.ots.CancelBetInfo.prototype.setCancelPercent = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.ots.TicketCancelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.TicketCancelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.TicketCancelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.TicketCancelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cancelRejectionReason: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cancelRejectionMessage: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ots.TicketCancelResponse}
 */
proto.ots.TicketCancelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.TicketCancelResponse;
  return proto.ots.TicketCancelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.TicketCancelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.TicketCancelResponse}
 */
proto.ots.TicketCancelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ots.enums.AcceptanceStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.ots.enums.CancelRejectionReason} */ (reader.readEnum());
      msg.setCancelRejectionReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCancelRejectionMessage(value);
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
proto.ots.TicketCancelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.TicketCancelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.TicketCancelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.TicketCancelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCancelRejectionReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCancelRejectionMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional enums.AcceptanceStatus status = 1;
 * @return {!proto.ots.enums.AcceptanceStatus}
 */
proto.ots.TicketCancelResponse.prototype.getStatus = function() {
  return /** @type {!proto.ots.enums.AcceptanceStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ots.enums.AcceptanceStatus} value
 * @return {!proto.ots.TicketCancelResponse} returns this
 */
proto.ots.TicketCancelResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional enums.CancelRejectionReason cancel_rejection_reason = 2;
 * @return {!proto.ots.enums.CancelRejectionReason}
 */
proto.ots.TicketCancelResponse.prototype.getCancelRejectionReason = function() {
  return /** @type {!proto.ots.enums.CancelRejectionReason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ots.enums.CancelRejectionReason} value
 * @return {!proto.ots.TicketCancelResponse} returns this
 */
proto.ots.TicketCancelResponse.prototype.setCancelRejectionReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string cancel_rejection_message = 3;
 * @return {string}
 */
proto.ots.TicketCancelResponse.prototype.getCancelRejectionMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.TicketCancelResponse} returns this
 */
proto.ots.TicketCancelResponse.prototype.setCancelRejectionMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.ots);
