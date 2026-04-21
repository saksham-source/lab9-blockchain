// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AwesomeGame is ERC1155, Ownable {

    // Fungible tokens (currencies)
    uint256 public constant GOLD   = 0;
    uint256 public constant SILVER = 1;

    // Fungible tokens (weapons)
    uint256 public constant SWORD  = 2;
    uint256 public constant SHIELD = 3;

    // Non-fungible tokens
    uint256 public constant CROWN       = 4; // existing NFT
    uint256 public constant WINNER_PRIZE = 5; // Assessment Task 1: prize NFT for winner

    constructor()
        ERC1155("https://harlequin-acceptable-rat-954.mypinata.cloud/ipfs/bafybeibsqc6vginftv3gi3nkvtw4ugjaact767uv6ztbwspbdk4r5heive/{id}.json")
        Ownable(msg.sender)
    {
        // Fungible currencies — unlimited supply
        _mint(msg.sender, GOLD,   10**18, "");
        _mint(msg.sender, SILVER, 10**18, "");

        // Fungible weapons — limited supply
        _mint(msg.sender, SWORD,  1000, "");
        _mint(msg.sender, SHIELD, 1000, "");

        // Non-fungible tokens — supply of 1
        _mint(msg.sender, CROWN,        1, "");
        _mint(msg.sender, WINNER_PRIZE, 1, ""); // Task 1
    }

    // -------------------------------------------------------
    // Task 4: mint and mintBatch functions
    // -------------------------------------------------------
    
    /// Mint any amount of a single token type (owner only)
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(to, id, amount, data);
    }

    /// Mint multiple token types in a single transaction (owner only)
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    
}