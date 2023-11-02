/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  L2StandardBridgeContract_DepositFinalized_loader,
  L2StandardBridgeContract_DepositFinalized_handler,
  L2StandardBridgeContract_ERC20BridgeFinalized_loader,
  L2StandardBridgeContract_ERC20BridgeFinalized_handler,
  L2StandardBridgeContract_ERC20BridgeInitiated_loader,
  L2StandardBridgeContract_ERC20BridgeInitiated_handler,
  L2StandardBridgeContract_ETHBridgeFinalized_loader,
  L2StandardBridgeContract_ETHBridgeFinalized_handler,
  L2StandardBridgeContract_ETHBridgeInitiated_loader,
  L2StandardBridgeContract_ETHBridgeInitiated_handler,
  L2StandardBridgeContract_WithdrawalInitiated_loader,
  L2StandardBridgeContract_WithdrawalInitiated_handler,
} from "../generated/src/Handlers.gen";

import {
  DepositFinalizedEntity,
  ERC20BridgeFinalizedEntity,
  ERC20BridgeInitiatedEntity,
  ETHBridgeFinalizedEntity,
  ETHBridgeInitiatedEntity,
  WithdrawalInitiatedEntity,
  EventsSummaryEntity
} from "./src/Types.gen";

const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  depositFinalizedsCount: BigInt(0),
  eRC20BridgeFinalizedsCount: BigInt(0),
  eRC20BridgeInitiatedsCount: BigInt(0),
  eTHBridgeFinalizedsCount: BigInt(0),
  eTHBridgeInitiatedsCount: BigInt(0),
  withdrawalInitiatedsCount: BigInt(0),
};

L2StandardBridgeContract_DepositFinalized_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

L2StandardBridgeContract_DepositFinalized_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    depositFinalizedsCount: currentSummaryEntity.depositFinalizedsCount + BigInt(1),
  };

  let depositFinalizedEntity: DepositFinalizedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    l1Token: event.params.l1Token,
    l2Token: event.params.l2Token,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    extraData: event.params.extraData,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.DepositFinalized.set(depositFinalizedEntity);
});

L2StandardBridgeContract_ERC20BridgeFinalized_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

L2StandardBridgeContract_ERC20BridgeFinalized_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    eRC20BridgeFinalizedsCount: currentSummaryEntity.eRC20BridgeFinalizedsCount + BigInt(1),
  };

  let eRC20BridgeFinalizedEntity: ERC20BridgeFinalizedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    localToken: event.params.localToken,
    remoteToken: event.params.remoteToken,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    extraData: event.params.extraData,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ERC20BridgeFinalized.set(eRC20BridgeFinalizedEntity);
});

L2StandardBridgeContract_ERC20BridgeInitiated_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

L2StandardBridgeContract_ERC20BridgeInitiated_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    eRC20BridgeInitiatedsCount: currentSummaryEntity.eRC20BridgeInitiatedsCount + BigInt(1),
  };

  let eRC20BridgeInitiatedEntity: ERC20BridgeInitiatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    localToken: event.params.localToken,
    remoteToken: event.params.remoteToken,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    extraData: event.params.extraData,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ERC20BridgeInitiated.set(eRC20BridgeInitiatedEntity);
});

L2StandardBridgeContract_ETHBridgeFinalized_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

L2StandardBridgeContract_ETHBridgeFinalized_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    eTHBridgeFinalizedsCount: currentSummaryEntity.eTHBridgeFinalizedsCount + BigInt(1),
  };

  let eTHBridgeFinalizedEntity: ETHBridgeFinalizedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    extraData: event.params.extraData,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ETHBridgeFinalized.set(eTHBridgeFinalizedEntity);
});

L2StandardBridgeContract_ETHBridgeInitiated_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

L2StandardBridgeContract_ETHBridgeInitiated_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    eTHBridgeInitiatedsCount: currentSummaryEntity.eTHBridgeInitiatedsCount + BigInt(1),
  };

  let eTHBridgeInitiatedEntity: ETHBridgeInitiatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    extraData: event.params.extraData,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.ETHBridgeInitiated.set(eTHBridgeInitiatedEntity);
});

L2StandardBridgeContract_WithdrawalInitiated_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

L2StandardBridgeContract_WithdrawalInitiated_handler(({ event, context }) => {
  let summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    withdrawalInitiatedsCount: currentSummaryEntity.withdrawalInitiatedsCount + BigInt(1),
  };

  let withdrawalInitiatedEntity: WithdrawalInitiatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    l1Token: event.params.l1Token,
    l2Token: event.params.l2Token,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    extraData: event.params.extraData,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.WithdrawalInitiated.set(withdrawalInitiatedEntity);
});

