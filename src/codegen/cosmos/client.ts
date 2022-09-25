import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as cosmosBankV1beta1TxRegistry from "./bank/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "./distribution/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "./gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./gov/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "./staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "./upgrade/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxAmino from "./bank/v1beta1/tx.amino";
import * as cosmosDistributionV1beta1TxAmino from "./distribution/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "./gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./gov/v1beta1/tx.amino";
import * as cosmosStakingV1beta1TxAmino from "./staking/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "./upgrade/v1beta1/tx.amino";
export const getSigningCosmosClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...cosmosBankV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...cosmosBankV1beta1TxAmino.AminoConverter,
    ...cosmosDistributionV1beta1TxAmino.AminoConverter,
    ...cosmosGovV1TxAmino.AminoConverter,
    ...cosmosGovV1beta1TxAmino.AminoConverter,
    ...cosmosStakingV1beta1TxAmino.AminoConverter,
    ...cosmosUpgradeV1beta1TxAmino.AminoConverter
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};