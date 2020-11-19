// source: ots/player_risk_score.proto
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

goog.exportSymbol('proto.ots.PlayerRiskScore', null, global);
goog.exportSymbol('proto.ots.PlayerRiskScoreRequest', null, global);
goog.exportSymbol('proto.ots.PlayerRiskScoreResponse', null, global);
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
proto.ots.PlayerRiskScoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ots.PlayerRiskScoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.PlayerRiskScoreRequest.displayName = 'proto.ots.PlayerRiskScoreRequest';
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
proto.ots.PlayerRiskScoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ots.PlayerRiskScoreResponse.repeatedFields_, null);
};
goog.inherits(proto.ots.PlayerRiskScoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.PlayerRiskScoreResponse.displayName = 'proto.ots.PlayerRiskScoreResponse';
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
proto.ots.PlayerRiskScore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ots.PlayerRiskScore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ots.PlayerRiskScore.displayName = 'proto.ots.PlayerRiskScore';
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
proto.ots.PlayerRiskScoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.PlayerRiskScoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.PlayerRiskScoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.PlayerRiskScoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ots.PlayerRiskScoreRequest}
 */
proto.ots.PlayerRiskScoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.PlayerRiskScoreRequest;
  return proto.ots.PlayerRiskScoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.PlayerRiskScoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.PlayerRiskScoreRequest}
 */
proto.ots.PlayerRiskScoreRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ots.PlayerRiskScoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.PlayerRiskScoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.PlayerRiskScoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.PlayerRiskScoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ots.PlayerRiskScoreRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.PlayerRiskScoreRequest} returns this
 */
proto.ots.PlayerRiskScoreRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ots.PlayerRiskScoreResponse.repeatedFields_ = [1];



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
proto.ots.PlayerRiskScoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.PlayerRiskScoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.PlayerRiskScoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.PlayerRiskScoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    riskScoresList: jspb.Message.toObjectList(msg.getRiskScoresList(),
    proto.ots.PlayerRiskScore.toObject, includeInstance)
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
 * @return {!proto.ots.PlayerRiskScoreResponse}
 */
proto.ots.PlayerRiskScoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.PlayerRiskScoreResponse;
  return proto.ots.PlayerRiskScoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.PlayerRiskScoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.PlayerRiskScoreResponse}
 */
proto.ots.PlayerRiskScoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ots.PlayerRiskScore;
      reader.readMessage(value,proto.ots.PlayerRiskScore.deserializeBinaryFromReader);
      msg.addRiskScores(value);
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
proto.ots.PlayerRiskScoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.PlayerRiskScoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.PlayerRiskScoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.PlayerRiskScoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRiskScoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ots.PlayerRiskScore.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PlayerRiskScore risk_scores = 1;
 * @return {!Array<!proto.ots.PlayerRiskScore>}
 */
proto.ots.PlayerRiskScoreResponse.prototype.getRiskScoresList = function() {
  return /** @type{!Array<!proto.ots.PlayerRiskScore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ots.PlayerRiskScore, 1));
};


/**
 * @param {!Array<!proto.ots.PlayerRiskScore>} value
 * @return {!proto.ots.PlayerRiskScoreResponse} returns this
*/
proto.ots.PlayerRiskScoreResponse.prototype.setRiskScoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ots.PlayerRiskScore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ots.PlayerRiskScore}
 */
proto.ots.PlayerRiskScoreResponse.prototype.addRiskScores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ots.PlayerRiskScore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ots.PlayerRiskScoreResponse} returns this
 */
proto.ots.PlayerRiskScoreResponse.prototype.clearRiskScoresList = function() {
  return this.setRiskScoresList([]);
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
proto.ots.PlayerRiskScore.prototype.toObject = function(opt_includeInstance) {
  return proto.ots.PlayerRiskScore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ots.PlayerRiskScore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.PlayerRiskScore.toObject = function(includeInstance, msg) {
  var f, obj = {
    sportId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prematch: jspb.Message.getFieldWithDefault(msg, 2, 0),
    live: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ots.PlayerRiskScore}
 */
proto.ots.PlayerRiskScore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ots.PlayerRiskScore;
  return proto.ots.PlayerRiskScore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ots.PlayerRiskScore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ots.PlayerRiskScore}
 */
proto.ots.PlayerRiskScore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSportId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrematch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLive(value);
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
proto.ots.PlayerRiskScore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ots.PlayerRiskScore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ots.PlayerRiskScore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ots.PlayerRiskScore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSportId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrematch();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLive();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string sport_id = 1;
 * @return {string}
 */
proto.ots.PlayerRiskScore.prototype.getSportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ots.PlayerRiskScore} returns this
 */
proto.ots.PlayerRiskScore.prototype.setSportId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 prematch = 2;
 * @return {number}
 */
proto.ots.PlayerRiskScore.prototype.getPrematch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ots.PlayerRiskScore} returns this
 */
proto.ots.PlayerRiskScore.prototype.setPrematch = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 live = 3;
 * @return {number}
 */
proto.ots.PlayerRiskScore.prototype.getLive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ots.PlayerRiskScore} returns this
 */
proto.ots.PlayerRiskScore.prototype.setLive = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.ots);
