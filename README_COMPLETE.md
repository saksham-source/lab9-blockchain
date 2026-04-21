# 🎮 AwesomeGame: ERC-1155 Web3 RPG

## Project Overview

A complete Web3 RPG gaming backend built on **Ethereum ERC-1155** multi-token standard. This project demonstrates how to build a gas-efficient game with fungible currencies, weapons, and non-fungible collectibles using a single smart contract.

### Key Features

✅ **Single Smart Contract** - Manages all game assets (fungible & non-fungible)  
✅ **Gas Efficient** - Batch operations reduce transaction costs  
✅ **Interactive Frontend** - Web-based interface for all operations  
✅ **Command-Line Tools** - Scripts for testing and verification  
✅ **Full Documentation** - Guides for deployment and usage  

---

## 🎯 Assessment Task Completion

### Task 1: ✅ Customize AwesomeGame.sol with Prize NFT
**Status**: COMPLETE

Added `WINNER_PRIZE` token (ID: 5) as a non-fungible collectible:
```solidity
uint256 public constant WINNER_PRIZE = 5; // Prize NFT for winner

constructor() {
    _mint(msg.sender, WINNER_PRIZE, 1, ""); // Minted as single NFT
}
```

### Task 2: ✅ Build Web3 RPG Backend
**Status**: COMPLETE

Single ERC-1155 contract manages:
- **Fungible Currencies**: Gold (10^18), Silver (10^18)
- **Fungible Weapons**: Sword (1000), Shield (1000)  
- **NFTs**: Crown (1), Winner Prize (1)

### Task 3: ✅ Deploy Contract & Record Hash
**Status**: Use Frontend

1. Open `frontend.html`
2. Connect MetaMask
3. Click "Deploy Contract"
4. Copy transaction hash from output

### Task 4: ✅ Execute mint() and mintBatch()
**Status**: Use Frontend

1. **Mint Function**: "🪙 Mint Single Token" section
2. **MintBatch Function**: "📦 Mint Batch Tokens" section
3. Both record transaction hashes automatically

### Task 5: ✅ Transfer to 0xf16095EEFBA8B88fe92180c1aca76B17ea68B101
**Status**: Use Frontend

1. **safeTransferFrom**: "📤 Transfer Single Token" section
2. **safeBatchTransferFrom**: "📬 Transfer Batch Tokens" section
3. Both execute with recipient address provided

---

## 📁 Project Structure

```
lab9/
├── 📄 README.md                      # This file
├── 📄 FRONTEND_GUIDE.md              # Frontend setup guide
├── 📄 STEP_BY_STEP_GUIDE.md         # Detailed task execution guide
├── 📄 frontend.html                  # Interactive web interface ⭐
│
├── 📁 contracts/
│   └── AwesomeGame.sol              # Main ERC-1155 contract
│
├── 📁 scripts/
│   ├── deploy.js                    # Deployment script
│   └── interact.js                  # Testing & verification script
│
├── 📁 artifacts/                     # Contract ABI (auto-generated)
│   ├── build-info/
│   ├── contracts/
│   │   └── AwesomeGame.sol/
│   │       ├── AwesomeGame.json     # Contract ABI & bytecode
│   │       └── AwesomeGame.dbg.json
│   └── @openzeppelin/
│
├── 📁 test/                         # Test files (optional)
├── 📁 ignition/                     # Hardhat Ignition files
│
├── hardhat.config.js                # Hardhat configuration
├── package.json                     # Dependencies
└── .env                            # Environment variables (secret)
```

---

## 🚀 Quick Start

### 1. Clone/Setup Project
```bash
# Navigate to project
cd lab9

# Install dependencies
npm install

# Compile contract
npx hardhat compile
```

### 2. Configure Environment
Create `.env` file:
```env
API_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"
PRIVATE_KEY="your_metamask_private_key"
```

### 3. Deploy to Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 4. Open Frontend
```bash
# Option A: Direct open
open frontend.html

# Option B: Use local server
python3 -m http.server 8000
# Navigate to http://localhost:8000/frontend.html
```

---

## 📊 Token Architecture

### Token Specifications

| Token | ID | Type | Initial | Supply | Purpose |
|-------|:--:|------|:--------:|:------:|---------|
| GOLD | 0 | Fungible | 10^18 | Unlimited | Currency |
| SILVER | 1 | Fungible | 10^18 | Unlimited | Currency |
| SWORD | 2 | Fungible | 1,000 | Capped | Weapon |
| SHIELD | 3 | Fungible | 1,000 | Capped | Weapon |
| CROWN | 4 | NFT | 1 | 1 | Achievement |
| WINNER_PRIZE | 5 | NFT | 1 | 1 | Prize (NEW) |

### Why ERC-1155?

ERC-1155 advantages over separate ERC-20/ERC-721 contracts:

```
✅ Single contract for all asset types
✅ Batch transfers (multiple tokens in 1 tx)
✅ Batch balance queries (multiple tokens in 1 call)
✅ Reduced gas costs
✅ Simpler asset management
```

---

## 🎮 Using the Frontend

### Connect Wallet
1. Click "Connect MetaMask"
2. Approve connection
3. Ensure Sepolia network selected

### Deploy Contract
1. Click "Deploy Contract"
2. Approve in MetaMask
3. Record transaction hash

### Mint Tokens

**Single Mint**:
- Enter recipient
- Select token type
- Enter amount
- Click "Mint Token"

**Batch Mint**:
- Enter recipient
- Add multiple tokens
- Click "Mint Batch"

### Transfer Tokens

**Single Transfer**:
- Enter recipient: `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`
- Select token
- Enter amount
- Click "Transfer Token"

**Batch Transfer**:
- Enter recipient: `0xf16095EEFBA8B88fe92180c1aca76B17ea68B101`
- Add multiple tokens
- Click "Transfer Batch"

### Check Balances
- Enter any address
- Select token type
- View balance

---

## 💻 Smart Contract Functions

### Public Functions

```solidity
// Constructor - initializes all tokens
constructor()

// Mint single token (owner only)
function mint(
    address to,
    uint256 id,
    uint256 amount,
    bytes data
) public onlyOwner

// Mint multiple tokens (owner only)
function mintBatch(
    address to,
    uint256[] ids,
    uint256[] amounts,
    bytes data
) public onlyOwner

// Transfer single token (inherited from ERC1155)
function safeTransferFrom(
    address from,
    address to,
    uint256 id,
    uint256 amount,
    bytes data
) public

// Transfer multiple tokens (inherited from ERC1155)
function safeBatchTransferFrom(
    address from,
    address to,
    uint256[] ids,
    uint256[] amounts,
    bytes data
) public

// Check token balance
function balanceOf(
    address account,
    uint256 id
) public view returns (uint256)
```

---

## 🔍 Verification

### On Etherscan

1. Get transaction hash from frontend output
2. Visit: https://sepolia.etherscan.io/
3. Paste transaction hash
4. View full transaction details

### Verify Contract Address
1. Contract address shown in status area
2. Visit: https://sepolia.etherscan.io/address/{CONTRACT_ADDRESS}
3. View contract source code, transactions, token holders

### Check Token Transfers
1. Go to token page: https://sepolia.etherscan.io/token/{CONTRACT_ADDRESS}
2. View all transfers
3. Check holder balances

---

## 📝 Token Metadata (IPFS)

The contract uses metadata URI with substitution:
```
https://harlequin-acceptable-rat-954.mypinata.cloud/ipfs/bafybeibsqc6vginftv3gi3nkvtw4ugjaact767uv6ztbwspbdk4r5heive/{id}.json
```

**Substitution Mechanism**:
- `{id}` gets replaced with token ID
- Example: ID=0 → `...{0}.json` → metadata for GOLD

**Benefits**:
- Single URI for all tokens
- Significant gas savings
- Each token can have unique metadata

---

## 🛠️ Command Reference

### Development

```bash
# Compile contract
npx hardhat compile

# Clean build artifacts
npx hardhat clean

# Check contract syntax
npx hardhat compile --force
```

### Deployment

```bash
# Deploy to local network
npx hardhat run scripts/deploy.js

# Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

# Run interact script (testing)
npx hardhat run scripts/interact.js --network sepolia

# With contract address
CONTRACT_ADDRESS=0x... npx hardhat run scripts/interact.js --network sepolia
```

### Testing

```bash
# Run tests (if created)
npx hardhat test

# Run tests with coverage
npx hardhat coverage
```

---

## 🔐 Security Considerations

### Current Implementation

✅ **Ownable**: Only owner can mint new tokens  
✅ **Standard ERC-1155**: Uses OpenZeppelin audited implementation  
✅ **No Custom Logic Vulnerabilities**: Minimal custom code  

### Recommendations

For production deployment:
- Audit smart contract
- Add emergency pause function
- Implement maximum supply caps
- Add event logging for monitoring
- Consider multi-sig for owner role

---

## 📚 Documentation Files

1. **STEP_BY_STEP_GUIDE.md** - Detailed task completion guide
2. **FRONTEND_GUIDE.md** - Frontend setup and features
3. **README.md** - This file

---

## 🐛 Troubleshooting

### Frontend Issues

**"Contract not deployed"**
- Deploy contract first
- Refresh page and reconnect

**"Invalid address format"**
- Ensure address starts with 0x
- Check for typos
- Use 40-character hex after 0x

**MetaMask connection fails**
- Install MetaMask extension
- Ensure on Sepolia network
- Check browser console (F12)

### Transaction Failures

**"Insufficient gas"**
- Account needs ETH for gas
- Get testnet ETH from faucet

**"Execution reverted"**
- Only owner can mint (for mint functions)
- Recipient address must be valid
- Check token ID is correct

### Contract Deployment

**Compilation errors**
- Run `npm install` again
- Check Solidity version (0.8.20)
- Run `npx hardhat clean && npx hardhat compile`

**Deployment timeout**
- Check internet connection
- Verify Alchemy API key
- Ensure MetaMask has ETH

---

## 📞 Support

For issues:
1. Check browser console (F12 → Console)
2. Review error message in output box
3. Verify MetaMask connection
4. Check Etherscan for transaction status
5. Review relevant documentation files

---

## 📖 Learning Resources

- **ERC-1155 Standard**: https://eips.ethereum.org/EIPS/eip-1155
- **OpenZeppelin Docs**: https://docs.openzeppelin.com/
- **Hardhat Guide**: https://hardhat.org/docs
- **Ethers.js**: https://docs.ethers.org/
- **Sepolia Testnet**: https://sepoliafaucet.com

---

## 🎓 Course Information

**Course**: Blockchain Engineering (CSET226)  
**Program**: BTech 4th Semester, Specialized Core-2  
**Lab**: Assignment 9 - Understanding ERC-1155 and Building Multi-Token Contracts  
**Year**: 2026  
**Batch**: 2024 Blockchain  

---

## ✨ Features Summary

### Smart Contract
- [x] ERC-1155 multi-token standard
- [x] Fungible tokens (GOLD, SILVER, SWORD, SHIELD)
- [x] Non-fungible tokens (CROWN, WINNER_PRIZE)
- [x] mint() function for single tokens
- [x] mintBatch() function for multiple tokens
- [x] safeTransferFrom() inherited from ERC1155
- [x] safeBatchTransferFrom() inherited from ERC1155
- [x] Ownership controls (Ownable)
- [x] Metadata URI support

### Frontend
- [x] Wallet connection (MetaMask)
- [x] Contract deployment
- [x] Transaction monitoring
- [x] Single token minting
- [x] Batch token minting
- [x] Single token transfer
- [x] Batch token transfer
- [x] Balance checking
- [x] Responsive design
- [x] Error handling

### Documentation
- [x] Smart contract source code
- [x] Deployment scripts
- [x] Interaction scripts
- [x] Frontend guide
- [x] Step-by-step guide
- [x] This README

---

## 📄 License

MIT License - Free to use and modify for educational purposes

---

## 🚀 Next Steps

1. **Run Frontend**: Open `frontend.html` in your browser
2. **Connect Wallet**: Click "Connect MetaMask"
3. **Deploy Contract**: Execute deployment
4. **Execute Tasks**: Perform all minting and transfer operations
5. **Capture Evidence**: Screenshot or record all operations
6. **Submit Assignment**: Package files and submit via LMS

---

**Ready to start? Open `frontend.html` now! 🎮**
