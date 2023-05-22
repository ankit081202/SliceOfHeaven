const hre = require("hardhat");
async function main() {
  const upload = await hre.ethers.getContractFactory("upload2");
  const contract = await upload.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});