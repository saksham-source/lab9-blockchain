# 🎮 AwesomeGame Frontend - Step-by-Step Usage Guide

This guide will walk you through using the interactive frontend to complete all assessment tasks.

## Quick Start

### 1. Open the Frontend
```bash
# Option A: Open directly in browser
open frontend.html

# Option B: Use a local web server
python3 -m http.server 8000
# Then navigate to http://localhost:8000/frontend.html
```

### 2. Connect MetaMask
- Click **"Connect MetaMask"** button
- Approve the connection in MetaMask popup
- Ensure you're on **Sepolia Test Network**
- Your wallet address should appear in the status area

---

## Task Completion Workflow

### ✅ TASK 1: Customize AwesomeGame.sol with Prize NFT

**Status**: ✅ Already Completed in Smart Contract

The contract already includes:
```solidity
uint256 public constant WINNER_PRIZE = 5; // Prize NFT for winner

constructor() {
    // ...
    _mint(msg.sender, WINNER_PRIZE, 1, ""); // Minted in constructor
}
```

**Evidence**: 
- View `contracts/AwesomeGame.sol` lines 17-18 for token definition
- View `contracts/AwesomeGame.sol` lines 34 for constructor mint

---

### ✅ TASK 2: Build Web3 RPG Backend

**Status**: ✅ Already Completed in Smart Contract

The single ERC-1155 contract manages all game assets:

| Asset | Type | Token ID |
|-------|------|----------|
| Gold | Fungible Currency | 0 |
| Silver | Fungible Currency | 1 |
| Sword | Fungible Weapon | 2 |
| Shield | Fungible Weapon | 3 |
| Crown | Non-Fungible NFT | 4 |
| Winner Prize | Non-Fungible NFT | 5 |

**Gas Efficiency**: All tokens managed in single contract (ERC-1155 advantage over ERC-20/ERC-721)

---

### ✅ TASK 3: Deploy Contract & Record Transaction Hash

#### Step 1: Deploy
1. Scroll to **"📋 Deploy Contract"** section
2. Click **"Deploy Contract"** button
3. Approve transaction in MetaMask
4. Wait for confirmation

#### Step 2: Record Transaction Hash
- Transaction hash appears in the output box
- Contract address displayed in status area
- **COPY AND SAVE**: Both addresses for verification

**Example Output**:
```
✓ Contract deployed successfully!

Contract Address: 0x45507BB785E7146115b7714624F80BBB5604eCAA

Transaction Hash: 0x5a3f...4e2b
```

#### Step 3: Verify on Sepolia Etherscan
- Visit: https://sepolia.etherscan.io/
- Paste transaction hash in search box
- Verify deployment details

---

### ✅ TASK 4: Execute mint() and mintBatch() Functions

#### 4.1 Execute mint() - Single Token Mint

**Scenario**: Mint 1000 GOLD tokens to a player

1. Scroll to **"🪙 Mint Single Token"** section
2. **Recipient Address**: Enter player address (or `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`)
3. **Token ID**: Select `0 - GOLD (Fungible)`
4. **Amount**: Enter `1000`
5. Click **"Mint Token"** button
6. Approve in MetaMask
7. **RECORD**: Transaction hash from output

**Output**:
```
✓ Mint successful!
Transaction Hash: 0x7d9e...3a1c
Block: 5234567
Token: GOLD (ID: 0)
Amount: 1000
```

#### 4.2 Execute mintBatch() - Multiple Tokens

**Scenario**: Mint multiple different tokens in one transaction

1. Scroll to **"📦 Mint Batch Tokens"** section
2. **Recipient Address**: Enter address
3. **Add Tokens to Batch**:
   - Select: `1 - SILVER (Fungible)`
   - Amount: `500`
   - Click **"Add"**
   
4. Add second token:
   - Select: `2 - SWORD (Weapon)`
   - Amount: `100`
   - Click **"Add"**

5. Add third token (optional):
   - Select: `3 - SHIELD (Weapon)`
   - Amount: `50`
   - Click **"Add"**

6. View batch items below
7. Click **"Mint Batch"** button
8. Approve in MetaMask
9. **RECORD**: Transaction hash

**Output**:
```
✓ Batch mint successful!
Transaction Hash: 0x9f2e...5b7d
Block: 5234568

Tokens:
SILVER (ID: 1) - Amount: 500
SWORD (ID: 2) - Amount: 100
SHIELD (ID: 3) - Amount: 50
```

**Key Advantage**: All tokens minted in single transaction = lower total gas cost

---

### ✅ TASK 5: Execute Transfer Functions to Specific Address

**Transfer Recipient**: `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`

#### 5.1 Execute safeTransferFrom() - Single Token Transfer

**Scenario**: Transfer 50 GOLD tokens to the recipient

1. Scroll to **"📤 Transfer Single Token"** section
2. **Recipient Address**: Enter `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`
3. **Token ID**: Select `0 - GOLD`
4. **Amount**: Enter `50`
5. Click **"Transfer Token"** button
6. Approve in MetaMask
7. **RECORD**: Transaction hash

**Output**:
```
✓ Transfer successful!
Transaction Hash: 0x4c8a...2e9f
Block: 5234569

Token: GOLD (ID: 0)
Amount: 50
From: 0xYourAddress...
To: 0xf16095EEFBA8B88fe92180c1aca76B17ea68B101
```

#### 5.2 Execute safeBatchTransferFrom() - Multiple Tokens Transfer

**Scenario**: Transfer multiple different tokens in one transaction

1. Scroll to **"📬 Transfer Batch Tokens"** section
2. **Recipient Address**: Enter `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`
3. **Add Tokens to Transfer**:
   - Select: `1 - SILVER`
   - Amount: `30`
   - Click **"Add"**

4. Add second token:
   - Select: `2 - SWORD`
   - Amount: `5`
   - Click **"Add"**

5. Add third token (optional):
   - Select: `4 - CROWN (NFT)`
   - Amount: `1`
   - Click **"Add"**

6. View transfer items
7. Click **"Transfer Batch"** button
8. Approve in MetaMask
9. **RECORD**: Transaction hash

**Output**:
```
✓ Batch transfer successful!
Transaction Hash: 0x3d1f...7a2c
Block: 5234570

Tokens:
SILVER (ID: 1) - Amount: 30
SWORD (ID: 2) - Amount: 5
CROWN (ID: 4) - Amount: 1

From: 0xYourAddress...
To: 0xf16095EEFBA8B88fe92180c1aca76B17ea68B101
```

**Key Advantage**: Multiple tokens transferred in single transaction = significant gas savings

---

## Additional Features

### Check Balance Anytime

At any point, you can verify token balances:

1. Scroll to **"💰 Check Balance"** section
2. **Address to Check**: Enter any address
3. **Token ID**: Select which token
4. Click **"Check Balance"**

**Example**:
```
Address: 0xf16095EEFBA8B88fe92180c1aca76B17ea68B101
Token: SILVER (ID: 1)
Balance: 30
```

---

## Documentation & Screenshots

### Recommended Screenshots to Capture

1. **Deployment**:
   - Wallet connected status
   - Deploy contract button clicked
   - Output showing transaction hash

2. **Mint Operations**:
   - Single mint output with hash
   - Batch mint output with hash
   - Balance check showing updated amounts

3. **Transfer Operations**:
   - Single transfer output with hash
   - Batch transfer output with hash
   - Recipient balance verification

### Video Recording Alternative

Record your screen showing:
1. Connect wallet
2. Deploy contract
3. Execute mint function
4. Execute mintBatch function
5. Execute safeTransferFrom function
6. Execute safeBatchTransferFrom function
7. Check recipient balances

---

## Troubleshooting

### "Contract not deployed"
- Click "Deploy Contract" first
- Wait for confirmation message
- Refresh page and reconnect wallet

### "Please connect your wallet"
- Install MetaMask extension
- Click "Connect MetaMask"
- Ensure on Sepolia network

### Transaction fails / reverts
- Check MetaMask error message
- Ensure you have ETH for gas
- Verify recipient address format
- Check you're sending valid amount

### MetaMask won't approve
- Ensure Sepolia network selected
- Check wallet has ETH
- Restart MetaMask if needed

### Frontend not loading artifacts
- Ensure `npm install` completed
- Run `npx hardhat compile`
- Artifacts should be in `artifacts/contracts/`

---

## Verification Checklist

Before submission, verify you have:

- [ ] ✅ Connected MetaMask wallet
- [ ] ✅ Deployed contract to Sepolia
- [ ] ✅ Recorded deployment transaction hash
- [ ] ✅ Executed mint() function with hash
- [ ] ✅ Executed mintBatch() function with hash
- [ ] ✅ Executed safeTransferFrom() to recipient with hash
- [ ] ✅ Executed safeBatchTransferFrom() to recipient with hash
- [ ] ✅ Verified recipient received tokens
- [ ] ✅ Captured all screenshots / recorded video
- [ ] ✅ Compiled contract artifacts are available

---

## Submit Assignment

Package everything in a ZIP file:

```
Prog_CourseCode_RollNo_LabNo.zip
Example: BTech4thSem_CSET226_E21CSEU002_Lab9.zip
```

Include:
1. Screenshots of all transactions
2. Video recording (if applicable)
3. frontend.html (for reference)
4. contracts/AwesomeGame.sol (with WINNER_PRIZE)
5. scripts/deploy.js
6. scripts/interact.js
7. Transaction hashes (in document)

---

## Additional Commands Reference

### Compile Contract
```bash
npx hardhat compile
```

### Deploy to Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Test Interact Script
```bash
CONTRACT_ADDRESS=0x... npx hardhat run scripts/interact.js --network sepolia
```

### Verify Contract on Etherscan
```bash
npx hardhat verify --network sepolia CONTRACT_ADDRESS
```

---

## Support

If issues persist:
1. Check browser console (F12 → Console tab)
2. Verify MetaMask network setting
3. Ensure contract deployed successfully
4. Check Etherscan for transaction status
5. Review error messages in output box

---

## Next Steps

After completing this assignment:

1. **Explore ERC-1155 further**:
   - Implement batch balance queries
   - Add approval functions
   - Test URI metadata handling

2. **Enhance the frontend**:
   - Add wallet balance display
   - Real-time gas estimation
   - Transaction history log

3. **Advanced features**:
   - Implement game logic
   - Add player rankings
   - Create trading system

---

**Happy Gaming! 🎮**

Good luck with your assignment!
