import web3 from "./web3";
import Random from "./build/RandomNumberConsumer.json";

console.log("Random.abi", Random.abi);
//console.log(JSON.parse(Random.abi));
const instance = new web3.eth.Contract(
  Random.abi,
  "0xaf04911b7e270c6b78430f8beE2f6e53559446B5"
);

export default instance;
