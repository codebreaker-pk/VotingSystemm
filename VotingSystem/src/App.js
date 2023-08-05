// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import VotingSystemABI from './contracts/VotingSystem.json';

const App = () => {
  const [candidateAVotes, setCandidateAVotes] = useState(0);
  const [candidateBVotes, setCandidateBVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your deployed contract address

  useEffect(() => {
    const initializeProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        setProvider(new ethers.providers.Web3Provider(provider));
      } else {
        console.error('Please install Metamask to interact with the wallet.');
      }
    };

    initializeProvider();
  }, []);

  useEffect(() => {
    if (provider) {
      const signer = provider.getSigner();
      setContract(new ethers.Contract(contractAddress, VotingSystemABI.abi, signer));
    }
  }, [provider]);

  const getVotes = async () => {
    if (contract) {
      try {
        const votesA = await contract.getCandidateAVotes();
        const votesB = await contract.getCandidateBVotes();
        setCandidateAVotes(parseInt(votesA));
        setCandidateBVotes(parseInt(votesB));
        const total = parseInt(votesA) + parseInt(votesB);
        setTotalVotes(total);
      } catch (error) {
        console.error('Error getting votes:', error);
      }
    }
  };

  useEffect(() => {
    if (contract) {
      getVotes();
    }
  }, [contract]);

  const voteForCandidateA = async () => {
    if (contract) {
      try {
        await contract.voteForCandidateA();
        getVotes();
      } catch (error) {
        console.error('Error voting for Candidate A:', error);
      }
    }
  };

  const voteForCandidateB = async () => {
    if (contract) {
      try {
        await contract.voteForCandidateB();
        getVotes();
      } catch (error) {
        console.error('Error voting for Candidate B:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (provider) {
      try {
        const accounts = await provider.send('eth_requestAccounts', []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting to the wallet:', error);
      }
    }
  };

  const getOwnerAddress = async () => {
    if (contract) {
      try {
        const ownerAddress = await contract.getOwner();
        console.log('Owner Address:', ownerAddress);
      } catch (error) {
        console.error('Error retrieving owner address:', error);
      }
    }
  };

  useEffect(() => {
    if (contract) {
      getOwnerAddress();
    }
  }, [contract]);

  return (
    <div className="App">
      <header className="header">
        <h1>Voting System</h1>
        <div className="wallet-info">
          {walletAddress ? (
            <p>Wallet Address: {walletAddress}</p>
          ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
      </header>
      <div className="container">
        <div className="vote-card">
          <div>
            <h2>Candidate A Votes:</h2>
            <p>Votes: {candidateAVotes}</p>
          </div>
          <div>
            <button onClick={voteForCandidateA}>Vote for A</button>
          </div>
        </div>
        <div className="vote-card">
          <div>
            <h2>Candidate B Votes:</h2>
            <p>Votes: {candidateBVotes}</p>
          </div>
          <div>
            <button onClick={voteForCandidateB}>Vote for B</button>
          </div>
        </div>
        <div className="vote-results">
          <p>Total Votes: {totalVotes}</p>
        </div>
      </div>
    </div>
  );
};

export default App;


