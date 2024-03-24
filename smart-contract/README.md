# LoyaulT Smart Contract

The LoyaulT smart contract is an ERC721-based contract that allows for the minting of unique non-fungible tokens (NFTs). Each NFT has associated XP points, which can be updated by the owner of the contract or the owner of the specific NFT.

The LoyaulTFactory is a factory smart contract, used to deploy new instances of the LoyaulT contract. This could be used, for example, to create a new LoyaulT contract for each game that wants to use this system.

## Contract Address

The contract LoyaulT for a specefic restaurant 'Corean BBQ' is deployed on the EtherlinkTest network at the following address: `0x560232A33871202F2E3a79B7e39179fC1aDf2040`

The contract LoyaulTFactory is deployed on the EtherlinkTest network at the fllowing address : `0xc8D948697952dd0Ca2C3DB0d48B10B25b476cd3a`.

## Functions

### mintNFT

The `mintNFT` function allows the owner of the contract to mint new NFTs. The newly minted NFT is assigned to the recipient address provided as a parameter to the function. The function also initializes the XP points of the new NFT to 0.

### addXP

The addXP function allows the owner of the contract or the owner of a specific NFT to add XP points to that NFT. This function takes two parameters: the ID of the NFT and the number of XP points to add. The function updates the XP points of the specified NFT by adding the provided number of points to the current XP points of the NFT.
