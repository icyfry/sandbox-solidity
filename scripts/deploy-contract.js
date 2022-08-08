const fs = require('fs');
const { exit } = require('process');
const Web3 = require('web3');
const web3 = new Web3('http://'+process.env.NAME+'.local:7545');

(async function () {

  const args = process.argv.slice(2);

  if(args.length != 1) {
    console.log('param needed [contract name]');
    exit(-1);
  }
  
  const bytecode = fs.readFileSync('./build/contracts/'+args[0]+'.bin');
  const abi = JSON.parse(fs.readFileSync('./build/contracts/'+args[0]+'.abi'));

  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];

  const myContract = new web3.eth.Contract(abi);

  myContract.deploy({
    data: bytecode.toString()
  }).send({
    from: myWalletAddress,
    gas: 5000000
  }).then((deployment) => {
    console.log('Contract was successfully deployed!');
    console.log('Contract can be interfaced with at this address:');
    console.log(deployment.options.address);
  }).catch((err) => {
    console.error(err);
  });
})();
