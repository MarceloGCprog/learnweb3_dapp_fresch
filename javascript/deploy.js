
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {abi,evm} = require('../compile.js');

const key = 'parrot still reunion peasant ill phone kid gaze snack amazing oak fresh';
const infura_node = 'https://rinkeby.infura.io/v3/bf6c18ce74df44a6b8177466c35d8c04';
const provider = new HDWalletProvider(key,infura_node);

const web3 = new Web3(provider);

let address;


const deploy = async ()=>{

    const contas = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', contas[0])
    
    const resultado = await new web3.Constracts(abi)
                        .deploy({data: evm.bytecode.object, arguments:['joy']})
                        .send({from: contas[0],gas: "1000000"});
    
    address = await result.options.address;
    provider.engine.stop();

};

deploy();

console.log(address);

module.exports = address;



