const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoyaltyNFTFactory and LoyaulT", function () {
  let LoyaulT, factory, owner, addr1, addr2, template;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the template contract
    const NFT = await ethers.getContractFactory("LoyaulT");
    template = await NFT.deploy();
    await template.deployed();

    // Deploy the factory
    const Factory = await ethers.getContractFactory("LoyaltyNFTFactory");
    factory = await Factory.deploy(template.address);
    await factory.deployed();

    // Initialize the template with dummy data to simulate its "initialized" state.
    await template.initialize("Dummy", "DMY", owner.address);
  });

  describe("LoyaltyNFTFactory Functionality", function () {
    it("Should allow restaurateur to create a new NFT collection", async function () {
      await factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN");

      // expecting the CollectionCreated event to be emitted with correct parameters
      await expect(factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN"))
        .to.emit(factory, "CollectionCreated")
        .withArgs(ethers.utils.getAddress(ethers.constants.AddressZero), addr1.address); // The actual emitted address needs to be captured dynamically
    });
  });

  describe("LoyaulT Functionality", function () {
    it("Should mint NFTs and update XP correctly", async function () {
      // Create a new collection
      await factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN");

      const eventFilter = factory.filters.CollectionCreated(addr1.address, null);
      const events = await factory.queryFilter(eventFilter);
      const collectionAddress = events[0].args.collectionAddress;

      const Collection = await ethers.getContractFactory("LoyaulT");
      const collection = Collection.attach(collectionAddress);

      // Mint a new NFT
      await collection.connect(addr1).mintNFT(addr1.address);
      expect(await collection.ownerOf(1)).to.equal(addr1.address);

      // Check initial XP is 0
      expect(await collection.getXP(1)).to.equal(0);

      // Add XP
      await collection.connect(owner).addXP(1, 5);
      expect(await collection.getXP(1)).to.equal(5);
    });
  });
});