var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "all require slight scan crouch ignore obtain climb govern cycle check diet";

module.exports = {
  networks: {
    /**
     *  development configuration is defined to work
     *  with truffle develop
     */
    localhost: {
      host: "localhost",    // localhost for tests
      port: 9545,           // truffle develop port
      network_id: "*",      // Match any network id
      gas: 4700000          // Standard gas limit
    },
    metamask: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/Z9CteL366EwXY25GYzX1");
        },
        port: 443,
        network_id: "3",
        gas: 47000          // Standard gas limit
    }
    /*mainnet: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/eMZlOOUqf46HCsUSmnYo");
        },
        port: 443,
        network_id: "1",
        gas: 4700000          // Standard gas limit
    }*/
  }
};
