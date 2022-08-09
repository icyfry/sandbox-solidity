<template>
  <div>
    <!-- connect-wallet button is visible if the wallet is not connected -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <!-- call-contract button is visible if the wallet is connected -->
    <button v-if="connected" @click="callContract">Call contract</button>
    {{ contractResult }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Web3 from "web3";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { provider } from "web3-core";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

@Options({
  props: {
    contractAddress: String,
    abi: String
  },
})
export default class Web3Interact extends Vue {

  contractAddress!: string;
  abi!: string;
  contractResult = "";
  connected = false;

  connect(): void {
    // this connects to the wallet

    if (window.ethereum) {
      // first we check if metamask is installed
      window.ethereum.request({ method: "eth_requestAccounts" }).then(() => {
        this.connected = true; // If users successfully connected their wallet
        console.log("connected");
      });
    }
  }

  callContract() {
/*
    // method for calling the contract method
    let web3 = new Web3(window.ethereum as provider);
    let abi = JSON.parse(this.abi);
    let contract = new web3.eth.Contract(abi, this.contractAddress);
    contract.methods.greet().call().then((result: string) => this.contractResult = result);
*/
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
