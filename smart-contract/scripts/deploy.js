const hre = require("hardhat");

async function main() {
    // const deployedContract = await ethers.deployContract("LoyaulT", ["Corean BBQ","CBBQ", '0x2E9F6209f3dC979e088E733a7E7421f0DfeeE806']);    
    // await deployedContract.waitForDeployment();
    //handle error
    // if (!deployedContract.address) {
    //     console.error("LoyaulT deployment failed");
    //     return;
    // }


    const deployedFactoryContract = await ethers.deployContract("LoyaltyNFTFactory",['0x2E9F6209f3dC979e088E733a7E7421f0DfeeE806'] );
    await deployedFactoryContract.waitForDeployment();


    console.log("LoyaltyNFTFactory deployed to:", deployedFactoryContract);
    // console.log("LoyaulT deployed to:", deployedContract);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
