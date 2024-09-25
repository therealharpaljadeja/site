// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    int8 public number;

    function increment() public {
        --number;
    }

    function decrement() public {
        ++number;
    }
}
