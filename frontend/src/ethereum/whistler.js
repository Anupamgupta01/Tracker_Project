import web3 from "./web3";
import Manager from "./build/whistler.json";

console.log("Manager.interface", Manager.interface);

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x6957EC212D8B92a643369CcAa31138E88C3558b5"
);

export default instance;
