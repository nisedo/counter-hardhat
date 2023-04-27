const hre = require("hardhat");

async function main() {

  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(0);

  await counter.deployed();

  console.log(`Contract deployed to ${counter.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
