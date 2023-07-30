# interchain

<p align="center">
  <a href="https://github.com/cosmology-tech/interchain">
    <img width="150" src="https://user-images.githubusercontent.com/545047/186588059-736cc25a-c849-4c30-a2d6-f779bcb6e305.svg">
  </a>
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/interchain/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/interchain"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/interchain?filename=package.json"></a>
</p>

[interchain](https://github.com/cosmology-tech/interchain) makes it easy to compose and broadcast Cosmos messages, with all of the proto and amino encoding handled for you.

## usage

```sh
npm install interchain
```

### Cosmos Messages

```js
import { cosmos } from 'interchain';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

### CosmWasm Messages

```js
import { cosmwasm } from "interchain";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### IBC Messages

```js
import { ibc } from 'interchain';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Initializing the Stargate Client

Use `getSigningCosmosClient` to get your `SigningStargateClient`, with the Cosmos proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningCosmosClient } from 'interchain';

const client = await getSigningCosmosClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

### Stargate Client Options

If you need the options in scenarios where you're using tools like [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit), you can get the options to pass into the provider:

```js
import { getSigningCosmosClientOptions } from 'interchain';
```

## Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Cosmos Kit

We recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for creating signers that work with Keplr and other wallets.

### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'cosmoshub');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `client`, you can broadcast messages:

```js
import { signAndBroadcast } from 'cosmjs-utils';

const res = await signAndBroadcast({
  client, // SigningStargateClient
  chainId: 'cosmoshub-4',
  address,
  msgs: [msg],
  fee,
  memo: ''
});
```

## Credits

Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
