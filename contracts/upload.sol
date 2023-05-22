// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract upload{
    struct Memo {
        uint256 timestamp;
        string items;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buy(string memory items) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(block.timestamp,items));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}