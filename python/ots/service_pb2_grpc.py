# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from ots_schema.ots import player_risk_score_pb2 as ots_dot_player__risk__score__pb2
from ots_schema.ots import resolve_foreign_events_in_ticket_pb2 as ots_dot_resolve__foreign__events__in__ticket__pb2
from ots_schema.ots import ticket_ack_pb2 as ots_dot_ticket__ack__pb2
from ots_schema.ots import ticket_cancel_pb2 as ots_dot_ticket__cancel__pb2
from ots_schema.ots import ticket_request_pb2 as ots_dot_ticket__request__pb2
from ots_schema.ots import ticket_response_pb2 as ots_dot_ticket__response__pb2


class otsStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Ticket = channel.unary_unary(
                '/ots.ots/Ticket',
                request_serializer=ots_dot_ticket__request__pb2.TicketRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__response__pb2.TicketResponse.FromString,
                )
        self.ResolveForeignMatchesInTicket = channel.unary_unary(
                '/ots.ots/ResolveForeignMatchesInTicket',
                request_serializer=ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketRequest.SerializeToString,
                response_deserializer=ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketResponse.FromString,
                )
        self.CancelTicket = channel.unary_unary(
                '/ots.ots/CancelTicket',
                request_serializer=ots_dot_ticket__cancel__pb2.TicketCancelRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__cancel__pb2.TicketCancelResponse.FromString,
                )
        self.PlayerRiskScore = channel.unary_unary(
                '/ots.ots/PlayerRiskScore',
                request_serializer=ots_dot_player__risk__score__pb2.PlayerRiskScoreRequest.SerializeToString,
                response_deserializer=ots_dot_player__risk__score__pb2.PlayerRiskScoreResponse.FromString,
                )
        self.TicketAck = channel.unary_unary(
                '/ots.ots/TicketAck',
                request_serializer=ots_dot_ticket__ack__pb2.TicketAckRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )


class otsServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Ticket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResolveForeignMatchesInTicket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CancelTicket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def PlayerRiskScore(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def TicketAck(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_otsServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Ticket': grpc.unary_unary_rpc_method_handler(
                    servicer.Ticket,
                    request_deserializer=ots_dot_ticket__request__pb2.TicketRequest.FromString,
                    response_serializer=ots_dot_ticket__response__pb2.TicketResponse.SerializeToString,
            ),
            'ResolveForeignMatchesInTicket': grpc.unary_unary_rpc_method_handler(
                    servicer.ResolveForeignMatchesInTicket,
                    request_deserializer=ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketRequest.FromString,
                    response_serializer=ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketResponse.SerializeToString,
            ),
            'CancelTicket': grpc.unary_unary_rpc_method_handler(
                    servicer.CancelTicket,
                    request_deserializer=ots_dot_ticket__cancel__pb2.TicketCancelRequest.FromString,
                    response_serializer=ots_dot_ticket__cancel__pb2.TicketCancelResponse.SerializeToString,
            ),
            'PlayerRiskScore': grpc.unary_unary_rpc_method_handler(
                    servicer.PlayerRiskScore,
                    request_deserializer=ots_dot_player__risk__score__pb2.PlayerRiskScoreRequest.FromString,
                    response_serializer=ots_dot_player__risk__score__pb2.PlayerRiskScoreResponse.SerializeToString,
            ),
            'TicketAck': grpc.unary_unary_rpc_method_handler(
                    servicer.TicketAck,
                    request_deserializer=ots_dot_ticket__ack__pb2.TicketAckRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ots.ots', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ots(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Ticket(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ots.ots/Ticket',
            ots_dot_ticket__request__pb2.TicketRequest.SerializeToString,
            ots_dot_ticket__response__pb2.TicketResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ResolveForeignMatchesInTicket(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ots.ots/ResolveForeignMatchesInTicket',
            ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketRequest.SerializeToString,
            ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CancelTicket(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ots.ots/CancelTicket',
            ots_dot_ticket__cancel__pb2.TicketCancelRequest.SerializeToString,
            ots_dot_ticket__cancel__pb2.TicketCancelResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def PlayerRiskScore(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ots.ots/PlayerRiskScore',
            ots_dot_player__risk__score__pb2.PlayerRiskScoreRequest.SerializeToString,
            ots_dot_player__risk__score__pb2.PlayerRiskScoreResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def TicketAck(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ots.ots/TicketAck',
            ots_dot_ticket__ack__pb2.TicketAckRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
