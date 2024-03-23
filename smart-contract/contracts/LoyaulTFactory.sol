// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./LoyaulT.sol"; 

contract LoyaltyNFTFactory {
    using Clones for address;

    address immutable template;

    event CollectionCreated(address collectionAddress, address owner);

    constructor(address _template) {
        require(_template != address(0), "Template is a zero address");
        template = _template;
    }

    function createCollection(string memory name, string memory symbol) external {
        address clone = template.clone();
        LoyaulT(clone).initialize(name, symbol, msg.sender);
        emit CollectionCreated(clone, msg.sender);
    }
}