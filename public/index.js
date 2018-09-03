var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Z9CteL366EwXY25GYzX1'));
}
var abi = web3.eth.contract([

{
  "constant": true,
  "inputs": [],
  "name": "FROST_FOUNDERS_FACTOR",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "foundersReservedDefrosted",
  "outputs": [
  {
    "name": "",
    "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "FROST_COMPANY_FACTOR",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "companyAddress",
  "outputs": [
  {
    "name": "",
    "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "SALE_START_DATE",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "FROST_BOUNTY_FACTOR",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "assignedTokens",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "companyReserved",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "FROSTED_FOUNDERS_LOCKUP",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "companyReservedDefrosted",
  "outputs": [
  {
    "name": "",
    "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [
  {
    "name": "",
    "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "foundersReserved",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "FROSTED_COMPANY_LOCKUP",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "bountyAddress",
  "outputs": [
  {
    "name": "",
    "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "bountyReserved",
  "outputs": [
  {
    "name": "",
    "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "bountyReservedDefrosted",
  "outputs": [
  {
    "name": "",
    "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "foundersAddress",
  "outputs": [
  {
    "name": "",
    "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "btuTokenAddress",
  "outputs": [
  {
    "name": "",
    "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
  {
    "name": "newOwner",
    "type": "address"
  }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
  {
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
  },
  {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
  }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
},
{
  "constant": false,
  "inputs": [
  {
    "name": "_batchAddr",
    "type": "address"
  },
  {
    "name": "_batchAmount",
    "type": "uint256"
  }
  ],
  "name": "assignToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
  {
    "name": "_companyAddress",
    "type": "address"
  },
  {
    "name": "_foundersAddress",
    "type": "address"
  },
  {
    "name": "_bountyAddress",
    "type": "address"
  }
  ],
  "name": "setupFrostedAccounts",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "defrostCompanyTokens",
  "outputs": [
  {
    "name": "",
    "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "defrostFoundersTokens",
  "outputs": [
  {
    "name": "",
    "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "defrostBountyTokens",
  "outputs": [
  {
    "name": "",
    "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "destructContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}
]

)


BTUTokenContract = abi.at('0xb515f858156aDd0c96d552909Afd7606e6D29cd9');

$( document ).ready(function() {
  $("#btnwithdraw").click(function() {
    BTUTokenContract.assignToken('0x333431ed35741F86cDc321A8275DbA08802de847', 100, function (err, res) {
      //do stuff
      console.log(res);

    })
  })

  BTUTokenContract.owner.call(function (err, res) {
      //do stuff
      $('#candidate-3').html(''+res)
      console.log('BTSEE'+res);
      
    })  
  
  BTUTokenContract.SALE_START_DATE.call(function (err, res) {
      //do stuff
      $('#candidate-2').html(''+res)
      console.log('BTSEE'+res);
      
    })  

  BTUTokenContract.assignedTokens.call(function (err, res) {
      //do stuff
      $('#candidate-1').prepend(''+res)
      console.log('BTSEE'+res);
      
    })  

})

