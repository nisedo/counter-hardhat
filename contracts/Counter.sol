// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

// Author: @nisedo
contract Counter {

    uint256 public count;

    constructor(uint _count){
        count = _count;
        console.log("The count is: %s", count);
    }

    function setCount(uint _count) public {
        count = _count;
        console.log("The count is set to: %s", count);
    }

    function inc() public {
        count++;
        console.log("The incremented count is: %s", count);

    }

    function dec() public returns(uint) {
        if(count >= 1) {
            count--;
            console.log("The decremented count is: %s", count);
        }
        else {
            console.log("Count is already 0");
        }
        return count;
    }
}