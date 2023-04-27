# Sample Counter Hardhat Project

This project demonstrates a basic Hardhat use case which I made without any tutorial or help to validate the skills I acquired.
There is a sample Counter contract, the tests for that contract, and a script that deploys that contract to the Sepolia testnet network.
And I verified it with the command: npx hardhat verify --network sepolia 0xa11b1CB91e1f541F86bb25E3C0882864C2aED9eA "0"

The deployed contract address on Sepolia testnet: 0xa11b1CB91e1f541F86bb25E3C0882864C2aED9eA

## Project Structure
- contracts/: Contains the Counter.sol Solidity contract file.
- scripts/: Contains the deploy script to deploy the Counter contract on the Sepolia Testnet.
- test/: Contains the test file Counter.test.js for testing the Counter contract.