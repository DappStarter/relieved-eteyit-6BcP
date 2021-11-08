require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain purse grace slender fringe gas'; 
let testAccounts = [
"0x1aa9f1ddb2d6a2ca5521f871813847795a294ed1cbe7104c55dbf051ad3619fd",
"0x98252fd7bf28436a016ce4ffc91897f213e62a7d61c4766e2a8aeebc4eb671a0",
"0x758789093970ba60a2466140099bdf3f1d450d24ccb51059c2739afe8451c4e9",
"0x296d5c662eb96f8f55c700adc8eaf7601300ffd9b02927286d6094ed62a3af4b",
"0x3d2d8e144018ecebfff26bbb1e694c65976db969273ab69350c098d95ee649a9",
"0x5e5c0ea705f8154ee2055f65311bdbdb2425d349aac31638c4097a03b15a586f",
"0xfd91903c6f654436c4138bdf53f571a39bea65e99bc1463f4a8d1a61f78e90d4",
"0xa1d98cfd1eacc46db25b579112b31687343a089dbcce57c36cbc4e2312bb9cee",
"0x41204fbb0af8c900f9416ba630f0a15d4ef2e0f0cfe8c1870de577969090a496",
"0xce19e5628a69818670ce5686a9f3eeee180e2f0479cba9ef0b2fe63e2f52d188"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

