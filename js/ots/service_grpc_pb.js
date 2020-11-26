// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ots_ticket_request_pb = require('../ots/ticket_request_pb.js');
var ots_ticket_response_pb = require('../ots/ticket_response_pb.js');
var ots_ticket_cancel_pb = require('../ots/ticket_cancel_pb.js');
var ots_player_risk_score_pb = require('../ots/player_risk_score_pb.js');
var ots_resolve_foreign_events_in_ticket_pb = require('../ots/resolve_foreign_events_in_ticket_pb.js');
var ots_ticket_ack_pb = require('../ots/ticket_ack_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_PlayerRiskScoreRequest(arg) {
  if (!(arg instanceof ots_player_risk_score_pb.PlayerRiskScoreRequest)) {
    throw new Error('Expected argument of type ots.PlayerRiskScoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_PlayerRiskScoreRequest(buffer_arg) {
  return ots_player_risk_score_pb.PlayerRiskScoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_PlayerRiskScoreResponse(arg) {
  if (!(arg instanceof ots_player_risk_score_pb.PlayerRiskScoreResponse)) {
    throw new Error('Expected argument of type ots.PlayerRiskScoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_PlayerRiskScoreResponse(buffer_arg) {
  return ots_player_risk_score_pb.PlayerRiskScoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_ResolveForeignEventsInTicketRequest(arg) {
  if (!(arg instanceof ots_resolve_foreign_events_in_ticket_pb.ResolveForeignEventsInTicketRequest)) {
    throw new Error('Expected argument of type ots.ResolveForeignEventsInTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_ResolveForeignEventsInTicketRequest(buffer_arg) {
  return ots_resolve_foreign_events_in_ticket_pb.ResolveForeignEventsInTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_ResolveForeignEventsInTicketResponse(arg) {
  if (!(arg instanceof ots_resolve_foreign_events_in_ticket_pb.ResolveForeignEventsInTicketResponse)) {
    throw new Error('Expected argument of type ots.ResolveForeignEventsInTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_ResolveForeignEventsInTicketResponse(buffer_arg) {
  return ots_resolve_foreign_events_in_ticket_pb.ResolveForeignEventsInTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_TicketAckRequest(arg) {
  if (!(arg instanceof ots_ticket_ack_pb.TicketAckRequest)) {
    throw new Error('Expected argument of type ots.TicketAckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_TicketAckRequest(buffer_arg) {
  return ots_ticket_ack_pb.TicketAckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_TicketCancelRequest(arg) {
  if (!(arg instanceof ots_ticket_cancel_pb.TicketCancelRequest)) {
    throw new Error('Expected argument of type ots.TicketCancelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_TicketCancelRequest(buffer_arg) {
  return ots_ticket_cancel_pb.TicketCancelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_TicketCancelResponse(arg) {
  if (!(arg instanceof ots_ticket_cancel_pb.TicketCancelResponse)) {
    throw new Error('Expected argument of type ots.TicketCancelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_TicketCancelResponse(buffer_arg) {
  return ots_ticket_cancel_pb.TicketCancelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_TicketRequest(arg) {
  if (!(arg instanceof ots_ticket_request_pb.TicketRequest)) {
    throw new Error('Expected argument of type ots.TicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_TicketRequest(buffer_arg) {
  return ots_ticket_request_pb.TicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ots_TicketResponse(arg) {
  if (!(arg instanceof ots_ticket_response_pb.TicketResponse)) {
    throw new Error('Expected argument of type ots.TicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ots_TicketResponse(buffer_arg) {
  return ots_ticket_response_pb.TicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var otsService = exports.otsService = {
  ticket: {
    path: '/ots.ots/Ticket',
    requestStream: true,
    responseStream: true,
    requestType: ots_ticket_request_pb.TicketRequest,
    responseType: ots_ticket_response_pb.TicketResponse,
    requestSerialize: serialize_ots_TicketRequest,
    requestDeserialize: deserialize_ots_TicketRequest,
    responseSerialize: serialize_ots_TicketResponse,
    responseDeserialize: deserialize_ots_TicketResponse,
  },
  resolveForeignMatchesInTicket: {
    path: '/ots.ots/ResolveForeignMatchesInTicket',
    requestStream: false,
    responseStream: false,
    requestType: ots_resolve_foreign_events_in_ticket_pb.ResolveForeignEventsInTicketRequest,
    responseType: ots_resolve_foreign_events_in_ticket_pb.ResolveForeignEventsInTicketResponse,
    requestSerialize: serialize_ots_ResolveForeignEventsInTicketRequest,
    requestDeserialize: deserialize_ots_ResolveForeignEventsInTicketRequest,
    responseSerialize: serialize_ots_ResolveForeignEventsInTicketResponse,
    responseDeserialize: deserialize_ots_ResolveForeignEventsInTicketResponse,
  },
  cancelTicket: {
    path: '/ots.ots/CancelTicket',
    requestStream: false,
    responseStream: false,
    requestType: ots_ticket_cancel_pb.TicketCancelRequest,
    responseType: ots_ticket_cancel_pb.TicketCancelResponse,
    requestSerialize: serialize_ots_TicketCancelRequest,
    requestDeserialize: deserialize_ots_TicketCancelRequest,
    responseSerialize: serialize_ots_TicketCancelResponse,
    responseDeserialize: deserialize_ots_TicketCancelResponse,
  },
  playerRiskScore: {
    path: '/ots.ots/PlayerRiskScore',
    requestStream: false,
    responseStream: false,
    requestType: ots_player_risk_score_pb.PlayerRiskScoreRequest,
    responseType: ots_player_risk_score_pb.PlayerRiskScoreResponse,
    requestSerialize: serialize_ots_PlayerRiskScoreRequest,
    requestDeserialize: deserialize_ots_PlayerRiskScoreRequest,
    responseSerialize: serialize_ots_PlayerRiskScoreResponse,
    responseDeserialize: deserialize_ots_PlayerRiskScoreResponse,
  },
  ticketAck: {
    path: '/ots.ots/TicketAck',
    requestStream: false,
    responseStream: false,
    requestType: ots_ticket_ack_pb.TicketAckRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ots_TicketAckRequest,
    requestDeserialize: deserialize_ots_TicketAckRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.otsClient = grpc.makeGenericClientConstructor(otsService);
