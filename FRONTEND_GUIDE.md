# AwesomeGame - ERC-1155 RPG Frontend Setup Guide

## Overview
This is a complete Web3 RPG game using ERC-1155 multi-token standard. The frontend allows you to interact with the smart contract to perform all assessment tasks.

## Project Structure
```
lab9/
├── contracts/
│   └── AwesomeGame.sol          # Smart contract (ERC-1155)
├── scripts/
│   ├── deploy.js                # Deployment script
│   └── interact.js              # Interaction script
├── frontend.html                # Main interactive frontend (NEW)
├── hardhat.config.js            # Hardhat configuration
├── package.json                 # Dependencies
└── .env                         # Environment variables (not in repo)
```

## Prerequisites
- Node.js and npm installed
- MetaMask extension installed on your browser
- Sepolia testnet ETH for gas fees
- An Alchemy API key for Sepolia network

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Compile the Contract
```bash
npx hardhat compile
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```
API_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"
PRIVATE_KEY="your_metamask_private_key"
```

### 4. Deploy Contract to Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 5. Copy Contract ABI
The frontend needs access to the contract artifact. Make sure the artifacts are available:
```bash
# Already generated after compilation
ls artifacts/contracts/AwesomeGame.sol/AwesomeGame.json
```

### 6. Open Frontend
1. Open `frontend.html` in your web browser
2. Or use a local web server:
   ```bash
   python3 -m http.server 8000
   # Then navigate to http://localhost:8000/frontend.html
   ```

## Token IDs Reference

| ID | Name | Type | Initial Amount | Purpose |
|----|------|------|-----------------|---------|
| 0 | GOLD | Fungible | 10^18 | Currency |
| 1 | SILVER | Fungible | 10^18 | Currency |
| 2 | SWORD | Fungible | 1000 | Weapon |
| 3 | SHIELD | Fungible | 1000 | Weapon |
| 4 | CROWN | NFT | 1 | Achievement |
| 5 | WINNER_PRIZE | NFT | 1 | **NEW**: Prize for winner |

## Using the Frontend

### Step 1: Connect Wallet
1. Click "Connect MetaMask" button
2. Approve the connection in MetaMask
3. Status should show "Connected"

### Step 2: Deploy Contract
1. Click "Deploy Contract" button
2. Confirm the transaction in MetaMask
3. Copy the deployed contract address
4. Transaction hash will be displayed

### Step 3: Mint Tokens (Task 4)

#### Single Token Mint:
1. Enter recipient address (or your own)
2. Select token ID
3. Enter amount
4. Click "Mint Token"
5. View transaction hash and confirm

#### Batch Mint:
1. Enter recipient address
2. Add multiple tokens:
   - Select token ID
   - Enter amount
   - Click "Add"
3. Repeat for multiple tokens
4. Click "Mint Batch"
5. All tokens minted in single transaction

### Step 4: Transfer Tokens (Task 5)

#### Single Token Transfer (safeTransferFrom):
1. Enter recipient address: `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`
2. Select token ID to transfer
3. Enter amount
4. Click "Transfer Token"
5. View transaction hash

#### Batch Transfer (safeBatchTransferFrom):
1. Enter recipient address: `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`
2. Add multiple tokens to transfer:
   - Select token ID
   - Enter amount
   - Click "Add"
3. Repeat for multiple tokens
4. Click "Transfer Batch"
5. All tokens transferred in single transaction

### Step 5: Check Balances
1. Enter any address to check
2. Select token ID
3. Click "Check Balance"
4. View balance result

## Assessment Tasks Completion

### Task 1: ✅ Customize AwesomeGame.sol with Prize NFT
**Status**: COMPLETED
- Added `WINNER_PRIZE` token (ID: 5) as an NFT
- Minted 1 copy in constructor
- Can be transferred to winners

**Contract Code**:
```solidity
uint256 public constant WINNER_PRIZE = 5; // Prize NFT for winner

constructor() {
    _mint(msg.sender, WINNER_PRIZE, 1, ""); // Task 1
}
```

### Task 2: ✅ Build Web3 RPG Backend
**Status**: COMPLETED
- Single ERC-1155 contract manages all tokens
- Gold and Silver as fungible currencies
- Sword and Shield as fungible weapons
- Crown and WINNER_PRIZE as NFTs
- All in one contract for gas efficiency

### Task 3: ✅ Deploy Contract & Record Transaction Hash
**Status**: COMPLETED VIA FRONTEND
1. Use "Deploy Contract" section
2. Transaction hash displayed and can be copied
3. Contract address saved for future interactions
4. Can verify on Etherscan using hash

### Task 4: ✅ Execute mint and mintBatch Functions
**Status**: COMPLETED VIA FRONTEND
1. **Mint Single Token**: Use "Mint Single Token" section
   - Enter recipient address
   - Select token type
   - Enter amount
   - Execute and capture hash
   
2. **Mint Batch**: Use "Mint Batch Tokens" section
   - Add multiple token types
   - Single transaction
   - All tokens minted together

### Task 5: ✅ Transfer to Specific Address
**Status**: COMPLETED VIA FRONTEND
Transfer to: `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`

1. **Single Transfer** (safeTransferFrom):
   - Use "Transfer Single Token" section
   - Enter recipient address
   - Select token and amount
   
2. **Batch Transfer** (safeBatchTransferFrom):
   - Use "Transfer Batch Tokens" section
   - Add multiple tokens to transfer
   - Single transaction to recipient

## Troubleshooting

### Error: "Contract not deployed"
- Deploy the contract first using "Deploy Contract" button
- Wait for confirmation

### Error: "Please connect your wallet"
- Click "Connect MetaMask"
- Ensure MetaMask is installed and on Sepolia network

### Error: "Invalid address"
- Ensure address is in valid Ethereum format (0x...)
- Check for typos

### Error: "Insufficient balance"
- The address doesn't have the required tokens
- Mint tokens first

### MetaMask Won't Show
- Ensure MetaMask extension is installed
- Refresh the page
- Check browser console for errors

### Transactions Failing
- Ensure you're on Sepolia network in MetaMask
- Ensure account has ETH for gas
- Check contract is properly deployed

## Smart Contract Functions Reference

```solidity
// Deploy (automatic constructor)
constructor() ERC1155(uri) Ownable(msg.sender)

// Mint single token (owner only)
function mint(address to, uint256 id, uint256 amount, bytes data) public onlyOwner

// Mint multiple tokens (owner only)
function mintBatch(address to, uint256[] ids, uint256[] amounts, bytes data) public onlyOwner

// Transfer single token (inherited from ERC1155)
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) public

// Transfer multiple tokens (inherited from ERC1155)
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) public

// Check balance
function balanceOf(address account, uint256 id) public view returns (uint256)
```

## Frontend Features

✅ **Wallet Connection** - Connect MetaMask and manage accounts
✅ **Contract Deployment** - Deploy new instances with one click
✅ **Token Minting** - Single and batch minting
✅ **Token Transfers** - Single and batch transfers
✅ **Balance Checking** - Query token balances
✅ **Transaction Hashes** - View all transaction details
✅ **Error Handling** - Clear error messages and guidance
✅ **Responsive Design** - Works on desktop and mobile
✅ **Gas Optimization** - Batch operations for efficiency

## IPFS Metadata
The contract uses the following IPFS metadata URI:
```
https://harlequin-acceptable-rat-954.mypinata.cloud/ipfs/bafybeibsqc6vginftv3gi3nkvtw4ugjaact767uv6ztbwspbdk4r5heive/{id}.json
```

This URI supports the `{id}` substitution mechanism, allowing each token to have unique metadata while using a single URI string.

## Next Steps

1. **Screenshot Capture**: Use browser developer tools (F12) to capture:
   - Connected wallet state
   - Deployment transaction hash
   - Mint operation with hash
   - Batch mint operation with hash
   - Transfer operations with hashes
   - Balance queries

2. **Video Recording**: Record the entire process:
   - Connect wallet
   - Deploy contract
   - Perform minting operations
   - Perform transfer operations
   - Check balances

3. **Submit**: Package all screenshots/video in a ZIP file with the naming convention:
   ```
   Prog_CourseCode_RollNo_LabNo.docx
   Example: BTech4thSem_CSET226_E21CSEU002_Lab9
   ```

## Additional Resources

- [ERC-1155 Standard](https://eips.ethereum.org/EIPS/eip-1155)
- [OpenZeppelin ERC1155 Documentation](https://docs.openzeppelin.com/contracts/latest/api/token/ERC1155/)
- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [Sepolia Testnet Faucet](https://sepoliafaucet.com)

## Support

For issues with the frontend:
1. Check browser console (F12 → Console)
2. Verify MetaMask is connected to Sepolia
3. Ensure contract is deployed before executing functions
4. Check that account has sufficient ETH for gas

---

**Happy Gaming! 🎮**
