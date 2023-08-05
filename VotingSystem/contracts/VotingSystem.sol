// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    address public owner;
    uint256 public candidateAVotes;
    uint256 public candidateBVotes;

    constructor() {
        owner = msg.sender;
        candidateAVotes = 0;
        candidateBVotes = 0;
    }

    // Function to vote for Candidate A
    function voteForCandidateA() public {
        require(msg.sender != address(0), "Invalid address.");
        candidateAVotes += 1;
    }

    // Function to vote for Candidate B
    function voteForCandidateB() public {
        require(msg.sender != address(0), "Invalid address.");
        candidateBVotes += 1;
    }

    // Function to get the total votes for Candidate A
    function getCandidateAVotes() public view returns (uint256) {
        return candidateAVotes;
    }

    // Function to get the total votes for Candidate B
    function getCandidateBVotes() public view returns (uint256) {
        return candidateBVotes;
    }
}