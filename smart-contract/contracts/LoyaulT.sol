// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LoyaulT is ERC721, Ownable, ERC721URIStorage {

    using Strings for uint256;
    uint256 private _nextTokenId = 1;
    mapping(uint256 => uint256) public xpPoints;  // Mapping of Token ID to XP Points

    constructor(string memory name, string memory symbol, address initialOwner) ERC721(name, symbol) Ownable(initialOwner) {}

    function initialize(string memory _name, string memory _symbol, address _owner) external {
        _transferOwnership(_owner);
        _name = _name;
        _symbol = _symbol;
    }

    function mintNFT(address recipient) public {
        require(owner() == _msgSender() || ownerOf(_nextTokenId) == _msgSender(), "Caller is not the owner or the client");
        uint256 tokenId = _nextTokenId;
        _mint(recipient, tokenId);
        xpPoints[tokenId] = 0; 
        _nextTokenId++;
    }

    function addXP(uint256 tokenId, uint256 xpToAdd) public onlyOwner {
        require(ownerOf(tokenId) != address(0), "RLNFT: XP add for nonexistent token");
        xpPoints[tokenId] += xpToAdd;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }


    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        require(ownerOf(tokenId) != address(0), "RLNFT: URI query for nonexistent token");

        // Here, integrate dynamic URI generation based on XP Points. This example uses a placeholder
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), "/", xpPoints[tokenId].toString())) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmUv7dtKz647N4zqT4wtudYk7UkmgEgYbbKf9gKL98kh6F";
    }
}