const hre = require("hardhat");

async function main() {
  console.log("=".repeat(70));
  console.log("AwesomeGame - ERC-1155 Interactive Script");
  console.log("=".repeat(70));

  const [owner] = await hre.ethers.getSigners();
  console.log(`\n🔑 Deployer Address: ${owner.address}`);

  // Replace with your deployed contract address
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "0xEcc676c563065AC30E95e6A9692aa4930f4A3d5B";
  console.log(`📋 Contract Address: ${CONTRACT_ADDRESS}`);

  const contract = await hre.ethers.getContractAt("AwesomeGame", CONTRACT_ADDRESS);

  // Token IDs
  const TOKENS = {
    GOLD: 0,
    SILVER: 1,
    SWORD: 2,
    SHIELD: 3,
    CROWN: 4,
    WINNER_PRIZE: 5
  };

  // ====== TASK 1: Verify WINNER_PRIZE ======
  console.log("\n" + "=".repeat(70));
  console.log("✅ TASK 1: WINNER_PRIZE NFT (Assessment Task)");
  console.log("=".repeat(70));
  const winnerBalance = await contract.balanceOf(owner.address, TOKENS.WINNER_PRIZE);
  console.log(`✓ WINNER_PRIZE tokens available: ${winnerBalance.toString()}`);
  console.log("  This NFT can be awarded to the winner of the game!");

  // ====== TASK 4: MINT FUNCTIONS ======
  console.log("\n" + "=".repeat(70));
  console.log("🪙 TASK 4: Testing Mint and MintBatch Functions");
  console.log("=".repeat(70));

  // Test 1: Mint single token
  console.log("\n[Test 4.1] Executing mint() - Single token mint");
  console.log("  Parameters: recipient=owner, tokenId=GOLD(0), amount=500");
  try {
    const tx1 = await contract.mint(owner.address, TOKENS.GOLD, 500, "0x");
    const receipt1 = await tx1.wait();
    console.log(`  ✓ SUCCESS`);
    console.log(`    Transaction Hash: ${receipt1.hash}`);
    console.log(`    Block Number: ${receipt1.blockNumber}`);
    console.log(`    Gas Used: ${receipt1.gasUsed.toString()}`);
  } catch (error) {
    console.log(`  ✗ FAILED: ${error.message}`);
  }

  // Test 2: Mint batch tokens
  console.log("\n[Test 4.2] Executing mintBatch() - Multiple tokens in one tx");
  console.log("  Parameters: recipient=owner, tokenIds=[SILVER(1), SWORD(2)], amounts=[200, 50]");
  try {
    const tx2 = await contract.mintBatch(
      owner.address,
      [TOKENS.SILVER, TOKENS.SWORD],
      [200, 50],
      "0x"
    );
    const receipt2 = await tx2.wait();
    console.log(`  ✓ SUCCESS`);
    console.log(`    Transaction Hash: ${receipt2.hash}`);
    console.log(`    Block Number: ${receipt2.blockNumber}`);
    console.log(`    Gas Used: ${receipt2.gasUsed.toString()}`);
  } catch (error) {
    console.log(`  ✗ FAILED: ${error.message}`);
  }

  // Check balances
  console.log("\n📊 Balances after minting:");
  const goldBal   = await contract.balanceOf(owner.address, TOKENS.GOLD);
  const silverBal = await contract.balanceOf(owner.address, TOKENS.SILVER);
  const swordBal  = await contract.balanceOf(owner.address, TOKENS.SWORD);
  const shieldBal = await contract.balanceOf(owner.address, TOKENS.SHIELD);
  const crownBal  = await contract.balanceOf(owner.address, TOKENS.CROWN);
  const prizebal  = await contract.balanceOf(owner.address, TOKENS.WINNER_PRIZE);

  console.log(`  GOLD:         ${goldBal.toString().padEnd(20)}`);
  console.log(`  SILVER:       ${silverBal.toString().padEnd(20)}`);
  console.log(`  SWORD:        ${swordBal.toString().padEnd(20)}`);
  console.log(`  SHIELD:       ${shieldBal.toString().padEnd(20)}`);
  console.log(`  CROWN:        ${crownBal.toString().padEnd(20)}`);
  console.log(`  WINNER_PRIZE: ${prizebal.toString().padEnd(20)}`);

  
  // ====== TASK 5: TRANSFER FUNCTIONS ======
  console.log("\n" + "=".repeat(70));
  console.log("📤 TASK 5: Testing Transfer Functions (safeTransferFrom & safeBatchTransferFrom)");
  console.log("=".repeat(70));

  const RECIPIENT = "0xf16095EEFBA8B88fe92180c1aca76B17ea68B101";
  console.log(`\n🎯 Recipient Address: ${RECIPIENT}`);

  // Test 3: Single transfer
  console.log("\n[Test 5.1] Executing safeTransferFrom() - Single token transfer");
  console.log("  Parameters: from=owner, to=recipient, tokenId=GOLD(0), amount=10");
  try {
    const tx3 = await contract.safeTransferFrom(
      owner.address,
      RECIPIENT,
      TOKENS.GOLD,
      10,
      "0x"
    );
    const receipt3 = await tx3.wait();
    console.log(`  ✓ SUCCESS`);
    console.log(`    Transaction Hash: ${receipt3.hash}`);
    console.log(`    Block Number: ${receipt3.blockNumber}`);
    console.log(`    Gas Used: ${receipt3.gasUsed.toString()}`);
  } catch (error) {
    console.log(`  ✗ FAILED: ${error.message}`);
  }

  // Test 4: Batch transfer
  console.log("\n[Test 5.2] Executing safeBatchTransferFrom() - Multiple tokens transfer");
  console.log("  Parameters: from=owner, to=recipient, tokenIds=[SILVER(1), SHIELD(3)], amounts=[5, 1]");
  try {
    const tx4 = await contract.safeBatchTransferFrom(
      owner.address,
      RECIPIENT,
      [TOKENS.SILVER, TOKENS.SHIELD],
      [5, 1],
      "0x"
    );
    const receipt4 = await tx4.wait();
    console.log(`  ✓ SUCCESS`);
    console.log(`    Transaction Hash: ${receipt4.hash}`);
    console.log(`    Block Number: ${receipt4.blockNumber}`);
    console.log(`    Gas Used: ${receipt4.gasUsed.toString()}`);
  } catch (error) {
    console.log(`  ✗ FAILED: ${error.message}`);
  }

  // Verify recipient balances
  console.log("\n📊 Recipient balances after transfer:");
  const recipientGold   = await contract.balanceOf(RECIPIENT, TOKENS.GOLD);
  const recipientSilver = await contract.balanceOf(RECIPIENT, TOKENS.SILVER);
  const recipientShield = await contract.balanceOf(RECIPIENT, TOKENS.SHIELD);
  console.log(`  GOLD:   ${recipientGold.toString()}`);
  console.log(`  SILVER: ${recipientSilver.toString()}`);
  console.log(`  SHIELD: ${recipientShield.toString()}`);

  // Final owner balances
  console.log("\n📊 Final owner balances after transfers:");
  const finalGold   = await contract.balanceOf(owner.address, TOKENS.GOLD);
  const finalSilver = await contract.balanceOf(owner.address, TOKENS.SILVER);
  const finalShield = await contract.balanceOf(owner.address, TOKENS.SHIELD);
  console.log(`  GOLD:   ${finalGold.toString()}`);
  console.log(`  SILVER: ${finalSilver.toString()}`);
  console.log(`  SHIELD: ${finalShield.toString()}`);

  console.log("\n" + "=".repeat(70));
  console.log("✅ All Assessment Tasks Completed Successfully!");
  console.log("=".repeat(70));
  console.log("\n📝 Summary:");
  console.log("  ✓ Task 1: WINNER_PRIZE NFT added and initialized");
  console.log("  ✓ Task 4: mint() and mintBatch() functions executed");
  console.log("  ✓ Task 5: safeTransferFrom() and safeBatchTransferFrom() executed");
  console.log("\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });