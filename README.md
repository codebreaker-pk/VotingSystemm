# voting-system-project-module-2
This contract is a simple voting system that allows anyone to vote for either Candidate A or Candidate B. The votes for each candidate are stored as state variables, and the contract provides functions to query the total number of votes for each candidate.

## Discription
This project is a decentralized application (DApp) that interacts with a simple smart contract deployed on the Ethereum blockchain. The smart contract, written in Solidity, allows users to store and manipulate an integer value. The frontend of the application, built using React, enables users to connect their Ethereum wallet (e.g., Metamask), view the contract's current value, increment or decrement the value, and set a new value.

The project demonstrates how to use Ethereum's smart contracts and web3.js library to interact with the blockchain and update the contract state through a user-friendly web interface. Developers can use this project as a starting point to build more complex DApps or experiment with Ethereum smart contracts.

To use the application, you need to have Metamask installed on your browser and an Ethereum local network running using Hardhat. The frontend connects to the local network through web3.js to interact with the deployed smart contract. Users can connect their wallet, view the contract's value, and perform actions voting on the blockchain.

Feel free to fork and modify this project for your specific needs or use it as a learning resource to understand Ethereum DApp development and smart contract integration with React. Happy coding!
## Functionality

The voting system includes the following functions:

getCandidateAVotes(): This function is a view function, meaning it does not modify the contract state, and it returns the total number of votes received by Candidate A.

getCandidateBVotes(): This function is also a view function, and it returns the total number of votes received by Candidate 

The React frontend provides a user-friendly interface to connect a wallet (using MetaMask), view the votes count, increment the vote.

## How to Use

Follow the steps below to deploy the voting system  on a local Ethereum development environment and interact with it using the React frontend.

### Prerequisites

1. Install Node.js and npm (Node Package Manager) on your system.
2. Install the MetaMask browser extension to connect to your local Ethereum network.

### Smart Contract Deployment

1. Clone the repository: ```https://github.com/saurya25122001/voting-system-project-module-2.git```
2.  Navigate to the project directory:   `voting-system-project-module-2
/VotingSystem`
3. Install project dependencies by running: `npm install`

4. Start the local Ethereum network (Hardhat's built-in node) by running: `npx hardhat node`

5. In a new terminal, deploy the contract to the local network by running: `npx hardhat run deploy.js --network localhost`

6. Note down the deployed contract address as it will be required in the frontend.

### Frontend Setup and Running

1. In the `App.js` file, replace `contractAddress` variable with the address of the deployed contract.

2. Start the React frontend by running: `npm start`

3. Open the application in your browser, and if you are using MetaMask, make sure you are connected to your local Ethereum network.

4. Click the "Connect Wallet" button to connect your wallet to the application.

5. The wallet address will be displayed, and you can see the current contract value.

6. Use the "vote for A" buttons to change the vote for candidate A.

7. use the "vote for B" buttons to change the vote for candidate B.

### Note

- Make sure you have Ether in your wallet to perform transactions on the local network.
- The frontend assumes you are using MetaMask; if using a different wallet, make sure to adjust the provider setup accordingly.
- ## Author

**SAURYA PRATAP**
- GitHub: https://github.com/saurya25122001
- Email: 22bcs80056@cuchd.in

## License
This project is licensed under the [MIT License](https://github.com/saurya25122001/voting-system-project-module-2/blob/61778ba1a5cf5999e8139cd55f47cb15e7a1bc37/LICENSE).
