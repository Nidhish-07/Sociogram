require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/SdT_nz8xnDHBgzpA09zz-MFCZPUmWqN8",
      accounts: [
        "b0ddc193523ea9040a270761cd9fe16938e9369751a342f6e38758d30144801c",
      ],
    },
  },
};
