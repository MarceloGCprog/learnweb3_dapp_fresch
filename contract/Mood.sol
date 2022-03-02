// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract MoodDiary{
    string private mood ;

    constructor(string memory initialMood){
        mood =  initialMood;
    }

    function setMood(string memory newMood) public {
        mood = newMood;
        
    }

    function getMood() public view returns(string memory){
        return mood;
    }





}