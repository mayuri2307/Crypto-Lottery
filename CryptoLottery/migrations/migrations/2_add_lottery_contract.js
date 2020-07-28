//import { default as Web3} from 'C://Users//ARJIT MITTAL//Desktop//Lottery-DApp//node_modules//web3';
//import {final_ticket} from 'C://Users//ARJIT MITTAL//Desktop//Lottery-DApp//app//javascripts//app.js'
//import { default as Web3} from 'web3';
var Lottery = artifacts.require("C://Users//ARJIT MITTAL//Desktop//Lottery-DApp//migrations//contracts//Lottery.sol");
// the winning guess, to be put by the owner

//if (typeof localStorage === "undefined" || localStorage === null) {
  //var LocalStorage = require('node-localstorage').LocalStorage;
  //localStorage = new LocalStorage('./scratch');
//}
//var dummy= require("C://Users//ARJIT MITTAL//Desktop//Lottery-DApp//app//javascripts//app.js");
//var temp = JSON.stringify(dummy);
//dummy =localStorage.getItem("vOneLocalStorage");
//var winningGuess = dummy;
//var winningGuess = dummy[Math.floor((Math.random() * dummy.length()) + 1) -1];
//var winningGuess = Math.floor((Math.random() * 4) + 1);

//var assert = require('assert')
//    , localStorage = require('localStorage')
//   ;

//var winningGuess = assert.strictEqual(localStorage.getItem("WinningTicket"));
//var winningGuess = localStorage.getItem("WinningTicket");
//var winningGuess = 0;

module.exports = function(deployer) {
  //import {final_ticket} from 'C://Users//ARJIT MITTAL//Desktop//Lottery-DApp//app//javascripts//app.js'	
  deployer.deploy(Lottery);
}