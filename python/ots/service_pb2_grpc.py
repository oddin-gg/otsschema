# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from ots_schema.ots import bettor_pb2 as ots_dot_bettor__pb2
from ots_schema.ots import player_risk_score_pb2 as ots_dot_player__risk__score__pb2
from ots_schema.ots import resolve_foreign_events_in_ticket_pb2 as ots_dot_resolve__foreign__events__in__ticket__pb2
from ots_schema.ots import ticket_ack_pb2 as ots_dot_ticket__ack__pb2
from ots_schema.ots import ticket_cancel_pb2 as ots_dot_ticket__cancel__pb2
from ots_schema.ots import ticket_max_stake_pb2 as ots_dot_ticket__max__stake__pb2
from ots_schema.ots import ticket_pb2 as ots_dot_ticket__pb2
from ots_schema.ots import ticket_result_pb2 as ots_dot_ticket__result__pb2

GRPC_GENERATED_VERSION = '1.66.1'
GRPC_VERSION = grpc.__version__
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    raise RuntimeError(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in ots/service_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class otsStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Ticket = channel.stream_stream(
                '/ots.ots/Ticket',
                request_serializer=ots_dot_ticket__pb2.TicketRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__pb2.TicketResponse.FromString,
                _registered_method=True)
        self.ResolveForeignMatchesInTicket = channel.unary_unary(
                '/ots.ots/ResolveForeignMatchesInTicket',
                request_serializer=ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketRequest.SerializeToString,
                response_deserializer=ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketResponse.FromString,
                _registered_method=True)
        self.CancelTicket = channel.unary_unary(
                '/ots.ots/CancelTicket',
                request_serializer=ots_dot_ticket__cancel__pb2.TicketCancelRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__cancel__pb2.TicketCancelResponse.FromString,
                _registered_method=True)
        self.PlayerRiskScore = channel.unary_unary(
                '/ots.ots/PlayerRiskScore',
                request_serializer=ots_dot_player__risk__score__pb2.PlayerRiskScoreRequest.SerializeToString,
                response_deserializer=ots_dot_player__risk__score__pb2.PlayerRiskScoreResponse.FromString,
                _registered_method=True)
        self.TicketAck = channel.unary_unary(
                '/ots.ots/TicketAck',
                request_serializer=ots_dot_ticket__ack__pb2.TicketAckRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__ack__pb2.TicketAckResponse.FromString,
                _registered_method=True)
        self.TicketResult = channel.stream_stream(
                '/ots.ots/TicketResult',
                request_serializer=ots_dot_ticket__result__pb2.TicketResultRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__result__pb2.TicketResultResponse.FromString,
                _registered_method=True)
        self.TicketMaxStake = channel.unary_unary(
                '/ots.ots/TicketMaxStake',
                request_serializer=ots_dot_ticket__max__stake__pb2.TicketMaxStakeRequest.SerializeToString,
                response_deserializer=ots_dot_ticket__max__stake__pb2.TicketMaxStakeResponse.FromString,
                _registered_method=True)
        self.Bettors = channel.unary_stream(
                '/ots.ots/Bettors',
                request_serializer=ots_dot_bettor__pb2.BettorsRequest.SerializeToString,
                response_deserializer=ots_dot_bettor__pb2.BettorsResponse.FromString,
                _registered_method=True)


class otsServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Ticket(self, request_iterator, context):
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

    def TicketResult(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def TicketMaxStake(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Bettors(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_otsServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Ticket': grpc.stream_stream_rpc_method_handler(
                    servicer.Ticket,
                    request_deserializer=ots_dot_ticket__pb2.TicketRequest.FromString,
                    response_serializer=ots_dot_ticket__pb2.TicketResponse.SerializeToString,
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
                    response_serializer=ots_dot_ticket__ack__pb2.TicketAckResponse.SerializeToString,
            ),
            'TicketResult': grpc.stream_stream_rpc_method_handler(
                    servicer.TicketResult,
                    request_deserializer=ots_dot_ticket__result__pb2.TicketResultRequest.FromString,
                    response_serializer=ots_dot_ticket__result__pb2.TicketResultResponse.SerializeToString,
            ),
            'TicketMaxStake': grpc.unary_unary_rpc_method_handler(
                    servicer.TicketMaxStake,
                    request_deserializer=ots_dot_ticket__max__stake__pb2.TicketMaxStakeRequest.FromString,
                    response_serializer=ots_dot_ticket__max__stake__pb2.TicketMaxStakeResponse.SerializeToString,
            ),
            'Bettors': grpc.unary_stream_rpc_method_handler(
                    servicer.Bettors,
                    request_deserializer=ots_dot_bettor__pb2.BettorsRequest.FromString,
                    response_serializer=ots_dot_bettor__pb2.BettorsResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ots.ots', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('ots.ots', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class ots(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Ticket(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(
            request_iterator,
            target,
            '/ots.ots/Ticket',
            ots_dot_ticket__pb2.TicketRequest.SerializeToString,
            ots_dot_ticket__pb2.TicketResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/ots.ots/ResolveForeignMatchesInTicket',
            ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketRequest.SerializeToString,
            ots_dot_resolve__foreign__events__in__ticket__pb2.ResolveForeignEventsInTicketResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/ots.ots/CancelTicket',
            ots_dot_ticket__cancel__pb2.TicketCancelRequest.SerializeToString,
            ots_dot_ticket__cancel__pb2.TicketCancelResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/ots.ots/PlayerRiskScore',
            ots_dot_player__risk__score__pb2.PlayerRiskScoreRequest.SerializeToString,
            ots_dot_player__risk__score__pb2.PlayerRiskScoreResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/ots.ots/TicketAck',
            ots_dot_ticket__ack__pb2.TicketAckRequest.SerializeToString,
            ots_dot_ticket__ack__pb2.TicketAckResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def TicketResult(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(
            request_iterator,
            target,
            '/ots.ots/TicketResult',
            ots_dot_ticket__result__pb2.TicketResultRequest.SerializeToString,
            ots_dot_ticket__result__pb2.TicketResultResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def TicketMaxStake(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/ots.ots/TicketMaxStake',
            ots_dot_ticket__max__stake__pb2.TicketMaxStakeRequest.SerializeToString,
            ots_dot_ticket__max__stake__pb2.TicketMaxStakeResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def Bettors(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(
            request,
            target,
            '/ots.ots/Bettors',
            ots_dot_bettor__pb2.BettorsRequest.SerializeToString,
            ots_dot_bettor__pb2.BettorsResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
