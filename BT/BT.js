

const SHA256 = require("crypto-js/sha256");
import sha256 from 'js-sha256';
class block{
    hash
    data
    previousHash
    nonce
    height
    timestamp
   
constroctor(hash,previousHash,nonce,height,data){
this.hash=this.generateHash();
this.previousHash=previousHash;
this.nonce=nonce;
this.height=height;
this.data=data;
this.timestamp=new Date();
}
generateHash() {
   return sha256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
}}
let BT = new block ('hash','previousehash',1,5,'data');



