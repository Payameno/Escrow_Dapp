require('@nomicfoundation/hardhat-toolbox');

//to deploy to a local blockchain
// module.exports = {
//   solidity: "0.8.17",
//   paths: {
//     artifacts: "./app/src/artifacts",
//   }
// };

//Deploy to the Goerli testnet
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  }
};