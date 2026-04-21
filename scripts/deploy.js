const hre = require("hardhat");

async function main() {
  console.log("Deploying AwesomeGame contract...\n");

  // Get the contract factory
  const AwesomeGame = await hre.ethers.getContractFactory("AwesomeGame");

  // Get the deployer's address
  const [owner] = await hre.ethers.getSigners();

  // Deploy — no arguments needed (constructor has defaults)
  const contract = await AwesomeGame.deploy();

  // ethers v6: use waitForDeployment() instead of deployed()
  await contract.waitForDeployment();

  // ethers v6: use getAddress() instead of .address
  const contractAddress = await contract.getAddress();

  console.log("Contract deployed to:  ", contractAddress);
  console.log("Contract deployed by:  ", owner.address);
  console.log("\nAll tokens minted successfully!");
  console.log("  GOLD        (id=0): 10^18 tokens");
  console.log("  SILVER      (id=1): 10^18 tokens");
  console.log("  SWORD       (id=2): 1000 tokens");
  console.log("  SHIELD      (id=3): 1000 tokens");
  console.log("  CROWN       (id=4): 1 NFT");
  console.log("  WINNER_PRIZE(id=5): 1 NFT");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });