//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract PolicyStorage {
    
    mapping(address => uint256[]) private policyNumbers;
    
    function addPolicyNumber(uint256 policyNumber) public {
        policyNumbers[msg.sender].push(policyNumber);
    }
    
    function getPolicyNumbers() public view returns (uint256[] memory) {
        return policyNumbers[msg.sender];
    }

    function inputUserPolicyNum(uint256 _getnum) public view returns (string memory) {
        bool isVerified = false;
        
        for (uint i = 0; i < policyNumbers[msg.sender].length; i++) {
            if (_getnum == policyNumbers[msg.sender][i]) {
                isVerified = true;
                break;
            }
        }

        if (isVerified) {
            return "Yes, the number is correct";
        } else {
            return "No, the number doesn't match";
        }
    }
}