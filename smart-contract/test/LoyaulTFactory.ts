import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { Signer, ContractFactory, Contract } from "ethers";

describe("LoyaltyNFTFactory and RestaurantLoyaltyNFT", function () {
  let RestaurantLoyaltyNFT: ContractFactory;
  let factory: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;
  let template: Contract;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the template contract
    RestaurantLoyaltyNFT = await ethers.getContractFactory("RestaurantLoyaltyNFT");
    template = await RestaurantLoyaltyNFT.deploy();
    await template.deployed();

    // Deploy the Factory
    const Factory = await ethers.getContractFactory("LoyaltyNFTFactory");
    factory = await Factory.deploy(template.address);
    await factory.deployed();

    // Initialize the template with dummy data to simulate its "initialized" state.
    await template.initialize("Dummy", "DMY", await owner.getAddress());
  });

  describe("LoyaltyNFTFactory Functionality", function () {
    it("Should allow restaurateur to create a new NFT collection", async function () {
      const addr1Address = await addr1.getAddress();

      // assuming factory.createCollection returns the collection address
      const transaction = await factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN");

      await expect(transaction)
        .to.emit(factory, "CollectionCreated")
        .withArgs(ethers.constants.AddressZero, addr1Address);
      // AddressZero used as a placeholder. Use actual values accordingly.
    });
  });

  describe("RestaurantLoyaltyNFT Functionality", function () {
    it("Should mint NFTs and update XP correctly", async function () {
      await factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN");
      const addr1Address = await addr1.getAddress();

      const eventFilter = factory.filters.CollectionCreated(addr1Address, null);
      const events = await factory.queryFilter(eventFilter);

      const collectionAddress: string = events[0].args.collectionAddress;
      const Collection: ContractFactory = await ethers.getContractFactory("RestaurantLoyaltyNFT");
      const collection: Contract = Collection.attach(collectionAddress);

      // Mint a new NFT
      await collection.connect(addr1).mintNFT(addr1Address);
      expect(await collection.ownerOf(1)).to.equal(addr1Address);

      // Check initial XP is 0
      expect(await collection.getXP(1)).to.equal(0);

      // Add XP
      await collection.connect(owner).addXP(1, 5);
      expect(await collection.getXP(1)).to.equal(5);
    });
  });
});import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { Signer, ContractFactory, Contract } from "ethers";

describe("LoyaltyNFTFactory and RestaurantLoyaltyNFT", function () {
  let RestaurantLoyaltyNFT: ContractFactory;
  let factory: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;
  let template: Contract;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the template contract
    RestaurantLoyaltyNFT = await ethers.getContractFactory("RestaurantLoyaltyNFT");
    template = await RestaurantLoyaltyNFT.deploy();
    await template.deployed();

    // Deploy the Factory
    const Factory = await ethers.getContractFactory("LoyaltyNFTFactory");
    factory = await Factory.deploy(template.address);
    await factory.deployed();

    // Initialize the template with dummy data to simulate its "initialized" state.
    await template.initialize("Dummy", "DMY", await owner.getAddress());
  });

  describe("LoyaltyNFTFactory Functionality", function () {
    it("Should allow restaurateur to create a new NFT collection", async function () {
      const addr1Address = await addr1.getAddress();

      // assuming factory.createCollection returns the collection address
      const transaction = await factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN");

      await expect(transaction)
        .to.emit(factory, "CollectionCreated")
        .withArgs(ethers.constants.AddressZero, addr1Address);
      // AddressZero used as a placeholder. Use actual values accordingly.
    });
  });

  describe("RestaurantLoyaltyNFT Functionality", function () {
    it("Should mint NFTs and update XP correctly", async function () {
      await factory.connect(addr1).createCollection("TestRestaurantNFT", "TRN");
      const addr1Address = await addr1.getAddress();

      const eventFilter = factory.filters.CollectionCreated(addr1Address, null);
      const events = await factory.queryFilter(eventFilter);

      const collectionAddress: string = events[0].args.collectionAddress;
      const Collection: ContractFactory = await ethers.getContractFactory("RestaurantLoyaltyNFT");
      const collection: Contract = Collection.attach(collectionAddress);

      // Mint a new NFT
      await collection.connect(addr1).mintNFT(addr1Address);
      expect(await collection.ownerOf(1)).to.equal(addr1Address);

      // Check initial XP is 0
      expect(await collection.getXP(1)).to.equal(0);

      // Add XP
      await collection.connect(owner).addXP(1, 5);
      expect(await collection.getXP(1)).to.equal(5);
    });
  });
});