import { HardhatUserConfig } from "hardhat/config";
import 'dotenv/config';
import "@nomicfoundation/hardhat-toolbox";

const privateKey = process.env.MY_PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    etherlinkTest: {
      url: "https://node.ghostnet.etherlink.com",
      accounts: [privateKey],
    }
  }
};

export default config;
