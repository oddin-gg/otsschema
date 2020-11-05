// source: ots/ticket_ack.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ots_enum_enums_pb = require('../ots/enum/enums_pb.js');
goog.object.extend(proto, ots_enum_enums_pb);
goog.exportSymbol('proto.ots.TicketAckRequest', null, global);
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
proto.ots.TicketAckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ots.TicketAckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.TicketAckRequest.displayName = 'proto.ots.TicketAckRequest';
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
proto.ots.TicketAckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.TicketAckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.TicketAckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.TicketAckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    acceptanceStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rejectionReason: (f = msg.getRejectionReason()) && ots_enum_enums_pb.RejectionReason.toObject(includeInstance, f)
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
 * @return {!proto.ots.TicketAckRequest}
 */
proto.ots.TicketAckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.TicketAckRequest;
  return proto.ots.TicketAckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.TicketAckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.TicketAckRequest}
 */
proto.ots.TicketAckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.ots.enums.AcceptanceStatus} */ (reader.readEnum());
      msg.setAcceptanceStatus(value);
      break;
    case 4:
      var value = new ots_enum_enums_pb.RejectionReason;
      reader.readMessage(value,ots_enum_enums_pb.RejectionReason.deserializeBinaryFromReader);
      msg.setRejectionReason(value);
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
proto.ots.TicketAckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.TicketAckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.TicketAckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.TicketAckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAcceptanceStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRejectionReason();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ots_enum_enums_pb.RejectionReason.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ticketId = 1;
 * @return {string}
 */
proto.ots.TicketAckRequest.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.TicketAckRequest} returns this
 */
proto.ots.TicketAckRequest.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ots.TicketAckRequest.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ots.TicketAckRequest} returns this
*/
proto.ots.TicketAckRequest.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ots.TicketAckRequest} returns this
 */
proto.ots.TicketAckRequest.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ots.TicketAckRequest.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional enums.AcceptanceStatus acceptance_status = 3;
 * @return {!proto.ots.enums.AcceptanceStatus}
 */
proto.ots.TicketAckRequest.prototype.getAcceptanceStatus = function() {
  return /** @type {!proto.ots.enums.AcceptanceStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ots.enums.AcceptanceStatus} value
 * @return {!proto.ots.TicketAckRequest} returns this
 */
proto.ots.TicketAckRequest.prototype.setAcceptanceStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional enums.RejectionReason rejection_reason = 4;
 * @return {?proto.ots.enums.RejectionReason}
 */
proto.ots.TicketAckRequest.prototype.getRejectionReason = function() {
  return /** @type{?proto.ots.enums.RejectionReason} */ (
    jspb.Message.getWrapperField(this, ots_enum_enums_pb.RejectionReason, 4));
};


/**
 * @param {?proto.ots.enums.RejectionReason|undefined} value
 * @return {!proto.ots.TicketAckRequest} returns this
*/
proto.ots.TicketAckRequest.prototype.setRejectionReason = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ots.TicketAckRequest} returns this
 */
proto.ots.TicketAckRequest.prototype.clearRejectionReason = function() {
  return this.setRejectionReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ots.TicketAckRequest.prototype.hasRejectionReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.ots);
