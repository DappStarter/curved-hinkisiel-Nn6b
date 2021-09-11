require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift reflect pizza sniff harvest opera flock supreme'; 
let testAccounts = [
"0xc144f5588ee6532e1cbdff4239aef1934b8c9b272b0218870779ca5e8c691390",
"0x09157d192e5e56057bcd59e23c944cd1418bd4aa1dc0e48ab57b76d72bfe00ae",
"0x2dd295f1f5ba52888459438f2e5493d213db0ac1ef807d89d4bb18f3d383cb21",
"0x439a644f976d6e1a21cb8f79e67d297e790cd9a43085e28a54f41461b98a9a6d",
"0xfc9b40e14715df13184d883c4c43cbbd16a37a0462b036e9b155b1b17fdf0d8f",
"0xb72ab7ca8e70a22645abbacb495420beab98d695127b4f049151771c309eec13",
"0x3015173a86fce4ee40152509a05e79b5bdd789923a57e864d6fe03862c725110",
"0x72a74b34070fb1a4a43a242a93ea2b877e9863692fcc7ff350ff0baed9fa0304",
"0x450c40286a33eb2cd4b8688c9bba8c7a818899ccdff2102b46046130666328a3",
"0x5a019bdfffeb7f7077b1cfc6763d72578387f5860c96951a11cb0c9dee4b9a7e"
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

