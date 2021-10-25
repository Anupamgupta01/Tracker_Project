
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";



contract RandomNumberConsumer is VRFConsumerBase {
    
    event randomNumberGenrated(uint randomResult);
    bytes32 internal keyHash;
    uint256 internal fee;
    
    uint256 public randomResult;
    
  
    constructor() 
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        )
    {
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; 
    }
    
    
    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }

  
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
        emit randomNumberGenrated(randomResult);
    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}


//0xF996f72599BEA4267a22FF6cEfbC202039EeFd0D