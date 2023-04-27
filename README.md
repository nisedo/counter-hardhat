# Sample Counter Hardhat Project

This project demonstrates a basic Hardhat use case which I made without any tutorial or help to validate the skills I acquired.
There is a sample Counter contract, the tests for that contract, and a script that deploys that contract to the Sepolia testnet network and verifies it.

The deployed contract address on Sepolia testnet:
- Contract address : 0xa11b1CB91e1f541F86bb25E3C0882864C2aED9eA
- URL : https://sepolia.etherscan.io/address/0xa11b1CB91e1f541F86bb25E3C0882864C2aED9eA

## Project Structure
- contracts/: Contains the Counter.sol Solidity contract file.
- scripts/: Contains the deploy script to deploy the Counter contract on the Sepolia Testnet.
- test/: Contains the test file Counter.test.js for testing the Counter contract.

## Getting Started
1. Clone this repository to your local machine.
git clone https://github.com/nisedo/counter-hardhat.git

2. Change into the project directory and install the required dependencies.
cd counter-contract
npm install

3. Create a .env file in the project root and add your Sepolia Testnet private key and API key.
PRIVATE_KEY=your_private_key_here
API_KEY=your_api_key_here
ETHERSCAN_API_KEY=your_api_key_here

4. To run the tests:
npx hardhat test

6. Compile and deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

7. Verify the contract on the Sepolia Testnet.
npx hardhat verify --network sepolia <contract address> "0"