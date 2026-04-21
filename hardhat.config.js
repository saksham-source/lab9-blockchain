require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "cancun",
    },
  },           // Must match pragma in contract
  defaultNetwork: "hardhat",    // Local by default; override with --network sepolia
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};