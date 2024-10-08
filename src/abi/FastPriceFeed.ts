export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "FastPriceFeed",
  "sourceName": "contracts/oracle/FastPriceFeed.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_priceDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxPriceUpdateDelay",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minBlockInterval",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxDeviationBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_fastPriceEvents",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenManager",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "DisableFastPrice",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "EnableFastPrice",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "refPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fastPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "cumulativeRefDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "cumulativeFastDelta",
          "type": "uint256"
        }
      ],
      "name": "MaxCumulativeDeltaDiffExceeded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "refPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fastPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "cumulativeRefDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "cumulativeFastDelta",
          "type": "uint256"
        }
      ],
      "name": "PriceData",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BASIS_POINTS_DIVISOR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BITMASK_32",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "CUMULATIVE_DELTA_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_CUMULATIVE_FAST_DELTA",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_CUMULATIVE_REF_DELTA",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_PRICE_DURATION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_REF_PRICE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PRICE_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "disableFastPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "disableFastPriceVoteCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "disableFastPriceVotes",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enableFastPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fastPriceEvents",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "favorFastPrice",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_refPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_maximise",
          "type": "bool"
        }
      ],
      "name": "getPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "getPriceData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gov",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minAuthorizations",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "_signers",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "_updaters",
          "type": "address[]"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isInitialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isSigner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isSpreadEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isUpdater",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastUpdatedAt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastUpdatedBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "maxCumulativeDeltaDiffs",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxDeviationBasisPoints",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxPriceUpdateDelay",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxTimeDeviation",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minAuthorizations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minBlockInterval",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "priceData",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "refPrice",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "refTime",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "cumulativeRefDelta",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "cumulativeFastDelta",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "priceDataInterval",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "priceDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "prices",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_priceBitArray",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "setCompactedPrices",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_fastPriceEvents",
          "type": "address"
        }
      ],
      "name": "setFastPriceEvents",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_gov",
          "type": "address"
        }
      ],
      "name": "setGov",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isSpreadEnabled",
          "type": "bool"
        }
      ],
      "name": "setIsSpreadEnabled",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_lastUpdatedAt",
          "type": "uint256"
        }
      ],
      "name": "setLastUpdatedAt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_tokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_maxCumulativeDeltaDiffs",
          "type": "uint256[]"
        }
      ],
      "name": "setMaxCumulativeDeltaDiffs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxDeviationBasisPoints",
          "type": "uint256"
        }
      ],
      "name": "setMaxDeviationBasisPoints",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxPriceUpdateDelay",
          "type": "uint256"
        }
      ],
      "name": "setMaxPriceUpdateDelay",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxTimeDeviation",
          "type": "uint256"
        }
      ],
      "name": "setMaxTimeDeviation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minAuthorizations",
          "type": "uint256"
        }
      ],
      "name": "setMinAuthorizations",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minBlockInterval",
          "type": "uint256"
        }
      ],
      "name": "setMinBlockInterval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_priceDataInterval",
          "type": "uint256"
        }
      ],
      "name": "setPriceDataInterval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_priceDuration",
          "type": "uint256"
        }
      ],
      "name": "setPriceDuration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_tokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_prices",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "setPrices",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_priceBits",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "setPricesWithBits",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_positionRouter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_priceBits",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endIndexForIncreasePositions",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endIndexForDecreasePositions",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxIncreasePositions",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxDecreasePositions",
          "type": "uint256"
        }
      ],
      "name": "setPricesWithBitsAndExecute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isActive",
          "type": "bool"
        }
      ],
      "name": "setSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_spreadBasisPointsIfChainError",
          "type": "uint256"
        }
      ],
      "name": "setSpreadBasisPointsIfChainError",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_spreadBasisPointsIfInactive",
          "type": "uint256"
        }
      ],
      "name": "setSpreadBasisPointsIfInactive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenManager",
          "type": "address"
        }
      ],
      "name": "setTokenManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_tokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_tokenPrecisions",
          "type": "uint256[]"
        }
      ],
      "name": "setTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isActive",
          "type": "bool"
        }
      ],
      "name": "setUpdater",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_vaultPriceFeed",
          "type": "address"
        }
      ],
      "name": "setVaultPriceFeed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "spreadBasisPointsIfChainError",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "spreadBasisPointsIfInactive",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenManager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenPrecisions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vaultPriceFeed",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000805460ff60a81b19168155600f5534801561002057600080fd5b5060405162002f0538038062002f05833981810160405260c081101561004557600080fd5b508051602082015160408301516060840151608085015160a090950151600080546001600160a01b0319163317905593949293919290916107088611156100be5760405162461bcd60e51b815260040180806020018281038252602581526020018062002ee06025913960400191505060405180910390fd5b600695909555600793909355600a91909155600d55600280546001600160a01b039283166001600160a01b03199182161790915560038054929093169116179055612dd1806200010f6000396000f3fe608060405234801561001057600080fd5b50600436106102e55760003560e01c806372279ba11161018f57806372279ba11461077c57806374bfed89146107c8578063776d16c1146107d0578063782661bc146107ed5780637cb2b79c146109125780637df73e27146109385780637fbc79c61461095e5780637fece36814610a88578063807c9782146103e357806382553aad14610abc5780638b7677f414610ad957806395082d2514610af6578063a2b47c1614610afe578063a374242514610b06578063a6eca89614610b2c578063b0a2566614610b34578063b3606b5614610b3c578063b70c7b7014610b44578063c8390a4814610b61578063c84a912414610c84578063cab44b7614610c8c578063ce98dfa814610cea578063cfad57a214610d09578063cfed246b14610d2f578063d6a153f114610d55578063d925351a14610d72578063de0d1b9414610d8f578063dfb481c914610dac578063e64559ad14610db4578063e68a22c014610dbc578063eeaa783a14610dc4578063f90ce5ba14610dcc576102e5565b806303b04936146102ea57806303cd25711461032457806303f4d7dc1461033e5780630604ddea146103e35780630e9272ea146103eb578063126082cf1461040f57806312d43a511461041757806314dd2dce1461041f578063162ac4e01461043c57806317835d1c146104625780631a15339114610485578063238aafb7146104b3578063287800c9146104d95780632a709b14146104e15780632e9cd94b146104e957806331cb61051461050657806332e5f9fa14610534578063392e53cd1461057e5780633aa08f861461058657806344c231931461058e5780634bd66c1c146103e35780634c0e31c8146105ab5780634d11fb4a146106ce5780634f64b2be146106eb5780634fdfb0861461070857806354aea1271461072e578063668d3d6514610736578063695d41841461073e5780636c56fd05146107465780636ccd47c41461076c578063715c753614610774575b600080fd5b6103106004803603602081101561030057600080fd5b50356001600160a01b0316610dd4565b604080519115158252519081900360200190f35b61032c610de9565b60408051918252519081900360200190f35b6103e16004803603604081101561035457600080fd5b810190602081018135600160201b81111561036e57600080fd5b82018360208201111561038057600080fd5b803590602001918460208302840111600160201b831117156103a157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250610def915050565b005b61032c610f66565b6103f3610f6e565b604080516001600160a01b039092168252519081900360200190f35b61032c610f7d565b6103f3610f83565b6103e16004803603602081101561043557600080fd5b5035610f92565b6103e16004803603602081101561045257600080fd5b50356001600160a01b0316610fe4565b6103e16004803603604081101561047857600080fd5b5080359060200135611053565b6103e16004803603604081101561049b57600080fd5b506001600160a01b03813516906020013515156110af565b6103e1600480360360208110156104c957600080fd5b50356001600160a01b0316611127565b61032c611196565b6103f361119c565b6103e1600480360360208110156104ff57600080fd5b50356111ab565b6103e16004803603604081101561051c57600080fd5b506001600160a01b03813516906020013515156111fd565b6103e1600480360360e081101561054a57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a08101359060c00135611275565b610310611479565b61032c611489565b6103e1600480360360208110156105a457600080fd5b503561148f565b6103e1600480360360408110156105c157600080fd5b810190602081018135600160201b8111156105db57600080fd5b8201836020820111156105ed57600080fd5b803590602001918460208302840111600160201b8311171561060e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561065d57600080fd5b82018360208201111561066f57600080fd5b803590602001918460208302840111600160201b8311171561069057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611522945050505050565b61032c600480360360208110156106e457600080fd5b50356115cd565b6103f36004803603602081101561070157600080fd5b50356115eb565b6103106004803603602081101561071e57600080fd5b50356001600160a01b0316611612565b61032c611627565b61032c61162d565b610310611633565b6103106004803603602081101561075c57600080fd5b50356001600160a01b0316611643565b6103e16116ce565b61032c6117e1565b6107a26004803603602081101561079257600080fd5b50356001600160a01b03166117e7565b604080519485526020850193909352838301919091526060830152519081900360800190f35b61032c611865565b6103e1600480360360208110156107e657600080fd5b503561186b565b6103e16004803603606081101561080357600080fd5b810190602081018135600160201b81111561081d57600080fd5b82018360208201111561082f57600080fd5b803590602001918460208302840111600160201b8311171561085057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561089f57600080fd5b8201836020820111156108b157600080fd5b803590602001918460208302840111600160201b831117156108d257600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050913592506118bd915050565b6103e16004803603602081101561092857600080fd5b50356001600160a01b031661198b565b6103106004803603602081101561094e57600080fd5b50356001600160a01b03166119fa565b6103e16004803603606081101561097457600080fd5b81359190810190604081016020820135600160201b81111561099557600080fd5b8201836020820111156109a757600080fd5b803590602001918460208302840111600160201b831117156109c857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610a1757600080fd5b820183602082011115610a2957600080fd5b803590602001918460208302840111600160201b83111715610a4a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611a0f945050505050565b61032c60048036036060811015610a9e57600080fd5b506001600160a01b0381351690602081013590604001351515611b68565b6103e160048036036020811015610ad257600080fd5b5035611cee565b6103e160048036036020811015610aef57600080fd5b5035611d40565b61032c611d92565b61032c611da2565b61032c60048036036020811015610b1c57600080fd5b50356001600160a01b0316611da9565b61032c611dbb565b61032c611dc1565b61032c611dc7565b6103e160048036036020811015610b5a57600080fd5b5035611dcd565b6103e160048036036040811015610b7757600080fd5b810190602081018135600160201b811115610b9157600080fd5b820183602082011115610ba357600080fd5b803590602001918460208302840111600160201b83111715610bc457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610c1357600080fd5b820183602082011115610c2557600080fd5b803590602001918460208302840111600160201b83111715610c4657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611e1f945050505050565b6103e1611ee9565b610cb260048036036020811015610ca257600080fd5b50356001600160a01b0316612000565b604080516001600160a01b03909516855263ffffffff9384166020860152918316848301529091166060830152519081900360800190f35b6103e160048036036020811015610d0057600080fd5b5035151561203f565b6103e160048036036020811015610d1f57600080fd5b50356001600160a01b03166120aa565b61032c60048036036020811015610d4557600080fd5b50356001600160a01b0316612119565b6103e160048036036020811015610d6b57600080fd5b503561212b565b6103e160048036036020811015610d8857600080fd5b503561217d565b6103e160048036036020811015610da557600080fd5b50356121cf565b61032c612221565b61032c612227565b61032c61222d565b6103f3612238565b61032c612247565b60156020526000908152604090205460ff1681565b60065481565b3360009081526010602052604090205460ff16610e41576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b6000610e4c8261224d565b90508015610f60576002546001546001600160a01b03918216911660005b8551811015610f5c576000868281518110610e8157fe5b6020026020010151905060005b6008811015610f5257601654600884028201908110610eb35750505050505050610f62565b60168054602084029185831c63ffffffff169160009190600889028701908110610ed957fe5b6000918252602082200154601780546001600160a01b0390921693509060088a028801908110610f0557fe5b60009182526020822001549150610f3282610f2c8668327cb2734119d3b7a9601e1b612359565b906123bb565b9050610f4083828c8e6123fa565b505060019094019350610e8e92505050565b5050600101610e6a565b5050505b505b5050565b63ffffffff81565b6002546001600160a01b031681565b61271081565b6000546001600160a01b031681565b6000546001600160a01b03163314610fdf576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600455565b6000546001600160a01b03163314611031576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526010602052604090205460ff166110a5576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b610f62828261268f565b6000546001600160a01b031633146110fc576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601060205260409020805460ff1916911515919091179055565b6000546001600160a01b03163314611174576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600e5481565b6003546001600160a01b031681565b6003546001600160a01b031633146111f8576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600c55565b6000546001600160a01b0316331461124a576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601460205260409020805460ff1916911515919091179055565b3360009081526010602052604090205460ff166112c7576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b6112d1868661268f565b6000879050600061134784836001600160a01b0316639b5786206040518163ffffffff1660e01b815260040160206040518083038186803b15801561131557600080fd5b505afa158015611329573d6000803e3d6000fd5b505050506040513d602081101561133f57600080fd5b505190612765565b9050600061138884846001600160a01b0316631bca8cf06040518163ffffffff1660e01b815260040160206040518083038186803b15801561131557600080fd5b905081871115611396578196505b808611156113a2578095505b60408051629a208160e81b81526004810189905233602482015290516001600160a01b03851691639a20810091604480830192600092919082900301818387803b1580156113ef57600080fd5b505af1158015611403573d6000803e3d6000fd5b50506040805163f3883d8b60e01b8152600481018a905233602482015290516001600160a01b038716935063f3883d8b9250604480830192600092919082900301818387803b15801561145557600080fd5b505af1158015611469573d6000803e3d6000fd5b5050505050505050505050505050565b600054600160a01b900460ff1681565b600b5481565b6000546001600160a01b031633146114dc576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b61070881111561151d5760405162461bcd60e51b8152600401808060200182810382526025815260200180612c176025913960400191505060405180910390fd5b600655565b6003546001600160a01b0316331461156f576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b60005b8251811015610f6057600083828151811061158957fe5b6020026020010151905082828151811061159f57fe5b6020908102919091018101516001600160a01b03909216600090815260139091526040902055600101611572565b601781815481106115da57fe5b600091825260209091200154905081565b601681815481106115f857fe5b6000918252602090912001546001600160a01b0316905081565b60106020526000908152604090205460ff1681565b60045481565b61070881565b600054600160a81b900460ff1681565b60008054600160a81b900460ff161561165e575060006116c9565b600e54600f5410611671575060006116c9565b60008061167d846117e7565b93509350505081811180156116b257506001600160a01b0384166000908152601360205260409020546116b082846127bd565b115b156116c2576000925050506116c9565b6001925050505b919050565b3360009081526014602052604090205460ff16611720576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b3360009081526015602052604090205460ff16611784576040805162461bcd60e51b815260206004820152601e60248201527f466173745072696365466565643a20616c726561647920656e61626c65640000604482015290519081900360640190fd5b336000908152601560205260409020805460ff19169055600f546117a99060016127bd565b600f556040805133815290517f9fe0c305c33aa92757a537936872a60be0d91549a4303cc99fd8b7fce8a002759181900360200190a1565b600d5481565b6000806000806117f5612b0f565b505050506001600160a01b039182166000908152601260209081526040918290208251608081018452905494851680825263ffffffff600160a01b87048116938301849052600160c01b87048116948301859052600160e01b909604909516606090910181905293949093919250565b60085481565b6000546001600160a01b031633146118b8576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600b55565b3360009081526010602052604090205460ff1661190f576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600061191a8261224d565b90508015611985576002546001546001600160a01b03918216911660005b865181101561198157600087828151811061194f57fe5b602002602001015190506119788188848151811061196957fe5b602002602001015185876123fa565b50600101611938565b5050505b50505050565b6003546001600160a01b031633146119d8576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60146020526000908152604090205460ff1681565b6000546001600160a01b03163314611a5c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600054600160a01b900460ff1615611aa55760405162461bcd60e51b8152600401808060200182810382526022815260200180612d7a6022913960400191505060405180910390fd5b6000805460ff60a01b1916600160a01b178155600e8490555b8251811015611b11576000838281518110611ad557fe5b6020908102919091018101516001600160a01b03166000908152601490915260409020805460ff19166001908117909155919091019050611abe565b5060005b8151811015611985576000828281518110611b2c57fe5b6020908102919091018101516001600160a01b03166000908152601090915260409020805460ff19166001908117909155919091019050611b15565b6000611b8160075460045461276590919063ffffffff16565b421115611bdc578115611bbc57611bb5612710610f2c611bae60095461271061276590919063ffffffff16565b8690612359565b9050611ce7565b611bb5612710610f2c611bae6009546127106127bd90919063ffffffff16565b600654600454611beb91612765565b421115611c38578115611c1857611bb5612710610f2c611bae60085461271061276590919063ffffffff16565b611bb5612710610f2c611bae6008546127106127bd90919063ffffffff16565b6001600160a01b03841660009081526011602052604090205480611c5f5783915050611ce7565b6000818511611c7757611c7282866127bd565b611c81565b611c8185836127bd565b9050611c9385610f2c83612710612359565b90506000611ca087611643565b1580611cad5750600d5482115b90508015611ce1578415611cd457828611611cc85782611cca565b855b9350505050611ce7565b828610611cc85782611cca565b50909150505b9392505050565b6003546001600160a01b03163314611d3b576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600d55565b6000546001600160a01b03163314611d8d576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600755565b68327cb2734119d3b7a9601e1b81565b6298968081565b60136020526000908152604090205481565b60095481565b600f5481565b600a5481565b6000546001600160a01b03163314611e1a576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600855565b6000546001600160a01b03163314611e6c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b8051825114611ec2576040805162461bcd60e51b815260206004820152601e60248201527f466173745072696365466565643a20696e76616c6964206c656e677468730000604482015290519081900360640190fd5b8151611ed5906016906020850190612b36565b508051610f60906017906020840190612b9b565b3360009081526014602052604090205460ff16611f3b576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b3360009081526015602052604090205460ff1615611f9f576040805162461bcd60e51b815260206004820152601c60248201527b11985cdd141c9a58d9519959590e88185b1c9958591e481d9bdd195960221b604482015290519081900360640190fd5b336000908152601560205260409020805460ff19166001908117909155600f54611fc891612765565b600f556040805133815290517f4c0c5fabf50e808e3bc8d19577d305e3a7163eea7e8a74a50caa8896694cd44b9181900360200190a1565b6012602052600090815260409020546001600160a01b0381169063ffffffff600160a01b8204811691600160c01b8104821691600160e01b9091041684565b6000546001600160a01b0316331461208c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b60008054911515600160a81b0260ff60a81b19909216919091179055565b6000546001600160a01b031633146120f7576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60116020526000908152604090205481565b6000546001600160a01b03163314612178576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600a55565b6003546001600160a01b031633146121ca576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600e55565b6000546001600160a01b0316331461221c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600955565b600c5481565b60075481565b6001600160a01b0381565b6001546001600160a01b031681565b60055481565b600a54600090156122a657600a546005546122699043906127bd565b10156122a65760405162461bcd60e51b815260040180806020018281038252602e815260200180612d23602e913960400191505060405180910390fd5b600b546122b342826127bd565b83116122f05760405162461bcd60e51b815260040180806020018281038252602d815260200180612cf6602d913960400191505060405180910390fd5b6122fa4282612765565b83106123375760405162461bcd60e51b815260040180806020018281038252602f815260200180612ca6602f913960400191505060405180910390fd5b60045483101561234b5760009150506116c9565b505060045543600555600190565b600082612368575060006123b5565b8282028284828161237557fe5b04146123b25760405162461bcd60e51b8152600401808060200182810382526021815260200180612cd56021913960400191505060405180910390fd5b90505b92915050565b60006123b283836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b8152506127ff565b6001600160a01b03821615612669576000826001600160a01b03166356bf9de4866040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561245857600080fd5b505afa15801561246c573d6000803e3d6000fd5b505050506040513d602081101561248257600080fd5b50516001600160a01b0386166000908152601160205260408120549192508080806124ac8a6117e7565b935093509350935060008411156125735760008487116124d5576124d085886127bd565b6124df565b6124df87866127bd565b905060008a87116124f9576124f48b886127bd565b612503565b612503878c6127bd565b905061251a600c54426123bb90919063ffffffff16565b600c546125289087906123bb565b146125365760009350600092505b61255161254a87610f2c8562989680612359565b8590612765565b935061256e61256788610f2c8462989680612359565b8490612765565b925050505b81811180156125a257506001600160a01b038a166000908152601360205260409020546125a082846127bd565b115b156125ff57604080516001600160a01b038c16815260208101889052808201879052606081018490526080810183905290517fe582322b389ad06b2bbf619cd6da3f16a288ec873ea0fa6df4d72f3d9480b4479181900360a00190a15b61260b8a8784846128a1565b604080516001600160a01b038c16815260208101889052808201879052606081018490526080810183905290517f23b9387f81fca646aac1dc4487ede045c65f5f7445482906565f01e05afdb3a89181900360a00190a15050505050505b6001600160a01b0384166000908152601160205260409020839055611985818585612a37565b600061269a8261224d565b90508015610f60576002546001546001600160a01b03918216911660005b6008811015610f5c57601654819081106126d6575050505050610f62565b60168054602084029189831c63ffffffff169160009190869081106126f757fe5b6000918252602082200154601780546001600160a01b039092169350908790811061271e57fe5b6000918252602082200154915061274582610f2c8668327cb2734119d3b7a9601e1b612359565b905061275383828a8c6123fa565b5050600190940193506126b892505050565b6000828201838110156123b2576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b60006123b283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612ab5565b6000818361288b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612850578181015183820152602001612838565b50505050905090810190601f16801561287d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161289757fe5b0495945050505050565b6001600160a01b0383106128fc576040805162461bcd60e51b815260206004820152601f60248201527f466173745072696365466565643a20696e76616c696420726566507269636500604482015290519081900360640190fd5b63ffffffff821061293e5760405162461bcd60e51b8152600401808060200182810382526029815260200180612d516029913960400191505060405180910390fd5b63ffffffff81106129805760405162461bcd60e51b815260040180806020018281038252602a815260200180612c3c602a913960400191505060405180910390fd5b604080516080810182526001600160a01b03948516815263ffffffff4281166020808401918252958216838501908152948216606084019081529787166000908152601290965292909420905181549251935196518516600160e01b026001600160e01b03978616600160c01b0263ffffffff60c01b1995909616600160a01b0263ffffffff60a01b19929097166001600160a01b0319909416939093171694909417919091169190911792909216919091179055565b6001600160a01b038316612a4a57610f60565b826001600160a01b031663e0409c7183836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015612aa157600080fd5b505af1158015611981573d6000803e3d6000fd5b60008184841115612b075760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612850578181015183820152602001612838565b505050900390565b60408051608081018252600080825260208201819052918101829052606081019190915290565b828054828255906000526020600020908101928215612b8b579160200282015b82811115612b8b57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612b56565b50612b97929150612be2565b5090565b828054828255906000526020600020908101928215612bd6579160200282015b82811115612bd6578251825591602001919060010190612bbb565b50612b97929150612c01565b5b80821115612b975780546001600160a01b0319168155600101612be3565b5b80821115612b975760008155600101612c0256fe466173745072696365466565643a20696e76616c6964205f70726963654475726174696f6e466173745072696365466565643a20696e76616c69642063756d756c61746976654661737444656c7461476f7665726e61626c653a20666f7262696464656e0000000000000000000000466173745072696365466565643a20666f7262696464656e0000000000000000466173745072696365466565643a205f74696d657374616d70206578636565647320616c6c6f7765642072616e6765536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77466173745072696365466565643a205f74696d657374616d702062656c6f7720616c6c6f7765642072616e6765466173745072696365466565643a206d696e426c6f636b496e74657276616c206e6f742079657420706173736564466173745072696365466565643a20696e76616c69642063756d756c617469766552656644656c7461466173745072696365466565643a20616c726561647920696e697469616c697a6564a2646970667358221220287dd7bcec5ab66f33e1d312635dba7a059e450f2b6d09e84539730e09001bd564736f6c634300060c0033466173745072696365466565643a20696e76616c6964205f70726963654475726174696f6e",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102e55760003560e01c806372279ba11161018f57806372279ba11461077c57806374bfed89146107c8578063776d16c1146107d0578063782661bc146107ed5780637cb2b79c146109125780637df73e27146109385780637fbc79c61461095e5780637fece36814610a88578063807c9782146103e357806382553aad14610abc5780638b7677f414610ad957806395082d2514610af6578063a2b47c1614610afe578063a374242514610b06578063a6eca89614610b2c578063b0a2566614610b34578063b3606b5614610b3c578063b70c7b7014610b44578063c8390a4814610b61578063c84a912414610c84578063cab44b7614610c8c578063ce98dfa814610cea578063cfad57a214610d09578063cfed246b14610d2f578063d6a153f114610d55578063d925351a14610d72578063de0d1b9414610d8f578063dfb481c914610dac578063e64559ad14610db4578063e68a22c014610dbc578063eeaa783a14610dc4578063f90ce5ba14610dcc576102e5565b806303b04936146102ea57806303cd25711461032457806303f4d7dc1461033e5780630604ddea146103e35780630e9272ea146103eb578063126082cf1461040f57806312d43a511461041757806314dd2dce1461041f578063162ac4e01461043c57806317835d1c146104625780631a15339114610485578063238aafb7146104b3578063287800c9146104d95780632a709b14146104e15780632e9cd94b146104e957806331cb61051461050657806332e5f9fa14610534578063392e53cd1461057e5780633aa08f861461058657806344c231931461058e5780634bd66c1c146103e35780634c0e31c8146105ab5780634d11fb4a146106ce5780634f64b2be146106eb5780634fdfb0861461070857806354aea1271461072e578063668d3d6514610736578063695d41841461073e5780636c56fd05146107465780636ccd47c41461076c578063715c753614610774575b600080fd5b6103106004803603602081101561030057600080fd5b50356001600160a01b0316610dd4565b604080519115158252519081900360200190f35b61032c610de9565b60408051918252519081900360200190f35b6103e16004803603604081101561035457600080fd5b810190602081018135600160201b81111561036e57600080fd5b82018360208201111561038057600080fd5b803590602001918460208302840111600160201b831117156103a157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250610def915050565b005b61032c610f66565b6103f3610f6e565b604080516001600160a01b039092168252519081900360200190f35b61032c610f7d565b6103f3610f83565b6103e16004803603602081101561043557600080fd5b5035610f92565b6103e16004803603602081101561045257600080fd5b50356001600160a01b0316610fe4565b6103e16004803603604081101561047857600080fd5b5080359060200135611053565b6103e16004803603604081101561049b57600080fd5b506001600160a01b03813516906020013515156110af565b6103e1600480360360208110156104c957600080fd5b50356001600160a01b0316611127565b61032c611196565b6103f361119c565b6103e1600480360360208110156104ff57600080fd5b50356111ab565b6103e16004803603604081101561051c57600080fd5b506001600160a01b03813516906020013515156111fd565b6103e1600480360360e081101561054a57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a08101359060c00135611275565b610310611479565b61032c611489565b6103e1600480360360208110156105a457600080fd5b503561148f565b6103e1600480360360408110156105c157600080fd5b810190602081018135600160201b8111156105db57600080fd5b8201836020820111156105ed57600080fd5b803590602001918460208302840111600160201b8311171561060e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561065d57600080fd5b82018360208201111561066f57600080fd5b803590602001918460208302840111600160201b8311171561069057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611522945050505050565b61032c600480360360208110156106e457600080fd5b50356115cd565b6103f36004803603602081101561070157600080fd5b50356115eb565b6103106004803603602081101561071e57600080fd5b50356001600160a01b0316611612565b61032c611627565b61032c61162d565b610310611633565b6103106004803603602081101561075c57600080fd5b50356001600160a01b0316611643565b6103e16116ce565b61032c6117e1565b6107a26004803603602081101561079257600080fd5b50356001600160a01b03166117e7565b604080519485526020850193909352838301919091526060830152519081900360800190f35b61032c611865565b6103e1600480360360208110156107e657600080fd5b503561186b565b6103e16004803603606081101561080357600080fd5b810190602081018135600160201b81111561081d57600080fd5b82018360208201111561082f57600080fd5b803590602001918460208302840111600160201b8311171561085057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561089f57600080fd5b8201836020820111156108b157600080fd5b803590602001918460208302840111600160201b831117156108d257600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050913592506118bd915050565b6103e16004803603602081101561092857600080fd5b50356001600160a01b031661198b565b6103106004803603602081101561094e57600080fd5b50356001600160a01b03166119fa565b6103e16004803603606081101561097457600080fd5b81359190810190604081016020820135600160201b81111561099557600080fd5b8201836020820111156109a757600080fd5b803590602001918460208302840111600160201b831117156109c857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610a1757600080fd5b820183602082011115610a2957600080fd5b803590602001918460208302840111600160201b83111715610a4a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611a0f945050505050565b61032c60048036036060811015610a9e57600080fd5b506001600160a01b0381351690602081013590604001351515611b68565b6103e160048036036020811015610ad257600080fd5b5035611cee565b6103e160048036036020811015610aef57600080fd5b5035611d40565b61032c611d92565b61032c611da2565b61032c60048036036020811015610b1c57600080fd5b50356001600160a01b0316611da9565b61032c611dbb565b61032c611dc1565b61032c611dc7565b6103e160048036036020811015610b5a57600080fd5b5035611dcd565b6103e160048036036040811015610b7757600080fd5b810190602081018135600160201b811115610b9157600080fd5b820183602082011115610ba357600080fd5b803590602001918460208302840111600160201b83111715610bc457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610c1357600080fd5b820183602082011115610c2557600080fd5b803590602001918460208302840111600160201b83111715610c4657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611e1f945050505050565b6103e1611ee9565b610cb260048036036020811015610ca257600080fd5b50356001600160a01b0316612000565b604080516001600160a01b03909516855263ffffffff9384166020860152918316848301529091166060830152519081900360800190f35b6103e160048036036020811015610d0057600080fd5b5035151561203f565b6103e160048036036020811015610d1f57600080fd5b50356001600160a01b03166120aa565b61032c60048036036020811015610d4557600080fd5b50356001600160a01b0316612119565b6103e160048036036020811015610d6b57600080fd5b503561212b565b6103e160048036036020811015610d8857600080fd5b503561217d565b6103e160048036036020811015610da557600080fd5b50356121cf565b61032c612221565b61032c612227565b61032c61222d565b6103f3612238565b61032c612247565b60156020526000908152604090205460ff1681565b60065481565b3360009081526010602052604090205460ff16610e41576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b6000610e4c8261224d565b90508015610f60576002546001546001600160a01b03918216911660005b8551811015610f5c576000868281518110610e8157fe5b6020026020010151905060005b6008811015610f5257601654600884028201908110610eb35750505050505050610f62565b60168054602084029185831c63ffffffff169160009190600889028701908110610ed957fe5b6000918252602082200154601780546001600160a01b0390921693509060088a028801908110610f0557fe5b60009182526020822001549150610f3282610f2c8668327cb2734119d3b7a9601e1b612359565b906123bb565b9050610f4083828c8e6123fa565b505060019094019350610e8e92505050565b5050600101610e6a565b5050505b505b5050565b63ffffffff81565b6002546001600160a01b031681565b61271081565b6000546001600160a01b031681565b6000546001600160a01b03163314610fdf576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600455565b6000546001600160a01b03163314611031576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526010602052604090205460ff166110a5576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b610f62828261268f565b6000546001600160a01b031633146110fc576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601060205260409020805460ff1916911515919091179055565b6000546001600160a01b03163314611174576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600e5481565b6003546001600160a01b031681565b6003546001600160a01b031633146111f8576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600c55565b6000546001600160a01b0316331461124a576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152601460205260409020805460ff1916911515919091179055565b3360009081526010602052604090205460ff166112c7576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b6112d1868661268f565b6000879050600061134784836001600160a01b0316639b5786206040518163ffffffff1660e01b815260040160206040518083038186803b15801561131557600080fd5b505afa158015611329573d6000803e3d6000fd5b505050506040513d602081101561133f57600080fd5b505190612765565b9050600061138884846001600160a01b0316631bca8cf06040518163ffffffff1660e01b815260040160206040518083038186803b15801561131557600080fd5b905081871115611396578196505b808611156113a2578095505b60408051629a208160e81b81526004810189905233602482015290516001600160a01b03851691639a20810091604480830192600092919082900301818387803b1580156113ef57600080fd5b505af1158015611403573d6000803e3d6000fd5b50506040805163f3883d8b60e01b8152600481018a905233602482015290516001600160a01b038716935063f3883d8b9250604480830192600092919082900301818387803b15801561145557600080fd5b505af1158015611469573d6000803e3d6000fd5b5050505050505050505050505050565b600054600160a01b900460ff1681565b600b5481565b6000546001600160a01b031633146114dc576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b61070881111561151d5760405162461bcd60e51b8152600401808060200182810382526025815260200180612c176025913960400191505060405180910390fd5b600655565b6003546001600160a01b0316331461156f576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b60005b8251811015610f6057600083828151811061158957fe5b6020026020010151905082828151811061159f57fe5b6020908102919091018101516001600160a01b03909216600090815260139091526040902055600101611572565b601781815481106115da57fe5b600091825260209091200154905081565b601681815481106115f857fe5b6000918252602090912001546001600160a01b0316905081565b60106020526000908152604090205460ff1681565b60045481565b61070881565b600054600160a81b900460ff1681565b60008054600160a81b900460ff161561165e575060006116c9565b600e54600f5410611671575060006116c9565b60008061167d846117e7565b93509350505081811180156116b257506001600160a01b0384166000908152601360205260409020546116b082846127bd565b115b156116c2576000925050506116c9565b6001925050505b919050565b3360009081526014602052604090205460ff16611720576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b3360009081526015602052604090205460ff16611784576040805162461bcd60e51b815260206004820152601e60248201527f466173745072696365466565643a20616c726561647920656e61626c65640000604482015290519081900360640190fd5b336000908152601560205260409020805460ff19169055600f546117a99060016127bd565b600f556040805133815290517f9fe0c305c33aa92757a537936872a60be0d91549a4303cc99fd8b7fce8a002759181900360200190a1565b600d5481565b6000806000806117f5612b0f565b505050506001600160a01b039182166000908152601260209081526040918290208251608081018452905494851680825263ffffffff600160a01b87048116938301849052600160c01b87048116948301859052600160e01b909604909516606090910181905293949093919250565b60085481565b6000546001600160a01b031633146118b8576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600b55565b3360009081526010602052604090205460ff1661190f576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600061191a8261224d565b90508015611985576002546001546001600160a01b03918216911660005b865181101561198157600087828151811061194f57fe5b602002602001015190506119788188848151811061196957fe5b602002602001015185876123fa565b50600101611938565b5050505b50505050565b6003546001600160a01b031633146119d8576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60146020526000908152604090205460ff1681565b6000546001600160a01b03163314611a5c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600054600160a01b900460ff1615611aa55760405162461bcd60e51b8152600401808060200182810382526022815260200180612d7a6022913960400191505060405180910390fd5b6000805460ff60a01b1916600160a01b178155600e8490555b8251811015611b11576000838281518110611ad557fe5b6020908102919091018101516001600160a01b03166000908152601490915260409020805460ff19166001908117909155919091019050611abe565b5060005b8151811015611985576000828281518110611b2c57fe5b6020908102919091018101516001600160a01b03166000908152601090915260409020805460ff19166001908117909155919091019050611b15565b6000611b8160075460045461276590919063ffffffff16565b421115611bdc578115611bbc57611bb5612710610f2c611bae60095461271061276590919063ffffffff16565b8690612359565b9050611ce7565b611bb5612710610f2c611bae6009546127106127bd90919063ffffffff16565b600654600454611beb91612765565b421115611c38578115611c1857611bb5612710610f2c611bae60085461271061276590919063ffffffff16565b611bb5612710610f2c611bae6008546127106127bd90919063ffffffff16565b6001600160a01b03841660009081526011602052604090205480611c5f5783915050611ce7565b6000818511611c7757611c7282866127bd565b611c81565b611c8185836127bd565b9050611c9385610f2c83612710612359565b90506000611ca087611643565b1580611cad5750600d5482115b90508015611ce1578415611cd457828611611cc85782611cca565b855b9350505050611ce7565b828610611cc85782611cca565b50909150505b9392505050565b6003546001600160a01b03163314611d3b576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600d55565b6000546001600160a01b03163314611d8d576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600755565b68327cb2734119d3b7a9601e1b81565b6298968081565b60136020526000908152604090205481565b60095481565b600f5481565b600a5481565b6000546001600160a01b03163314611e1a576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600855565b6000546001600160a01b03163314611e6c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b8051825114611ec2576040805162461bcd60e51b815260206004820152601e60248201527f466173745072696365466565643a20696e76616c6964206c656e677468730000604482015290519081900360640190fd5b8151611ed5906016906020850190612b36565b508051610f60906017906020840190612b9b565b3360009081526014602052604090205460ff16611f3b576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b3360009081526015602052604090205460ff1615611f9f576040805162461bcd60e51b815260206004820152601c60248201527b11985cdd141c9a58d9519959590e88185b1c9958591e481d9bdd195960221b604482015290519081900360640190fd5b336000908152601560205260409020805460ff19166001908117909155600f54611fc891612765565b600f556040805133815290517f4c0c5fabf50e808e3bc8d19577d305e3a7163eea7e8a74a50caa8896694cd44b9181900360200190a1565b6012602052600090815260409020546001600160a01b0381169063ffffffff600160a01b8204811691600160c01b8104821691600160e01b9091041684565b6000546001600160a01b0316331461208c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b60008054911515600160a81b0260ff60a81b19909216919091179055565b6000546001600160a01b031633146120f7576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60116020526000908152604090205481565b6000546001600160a01b03163314612178576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600a55565b6003546001600160a01b031633146121ca576040805162461bcd60e51b81526020600482015260186024820152600080516020612c86833981519152604482015290519081900360640190fd5b600e55565b6000546001600160a01b0316331461221c576040805162461bcd60e51b81526020600482015260156024820152600080516020612c66833981519152604482015290519081900360640190fd5b600955565b600c5481565b60075481565b6001600160a01b0381565b6001546001600160a01b031681565b60055481565b600a54600090156122a657600a546005546122699043906127bd565b10156122a65760405162461bcd60e51b815260040180806020018281038252602e815260200180612d23602e913960400191505060405180910390fd5b600b546122b342826127bd565b83116122f05760405162461bcd60e51b815260040180806020018281038252602d815260200180612cf6602d913960400191505060405180910390fd5b6122fa4282612765565b83106123375760405162461bcd60e51b815260040180806020018281038252602f815260200180612ca6602f913960400191505060405180910390fd5b60045483101561234b5760009150506116c9565b505060045543600555600190565b600082612368575060006123b5565b8282028284828161237557fe5b04146123b25760405162461bcd60e51b8152600401808060200182810382526021815260200180612cd56021913960400191505060405180910390fd5b90505b92915050565b60006123b283836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b8152506127ff565b6001600160a01b03821615612669576000826001600160a01b03166356bf9de4866040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561245857600080fd5b505afa15801561246c573d6000803e3d6000fd5b505050506040513d602081101561248257600080fd5b50516001600160a01b0386166000908152601160205260408120549192508080806124ac8a6117e7565b935093509350935060008411156125735760008487116124d5576124d085886127bd565b6124df565b6124df87866127bd565b905060008a87116124f9576124f48b886127bd565b612503565b612503878c6127bd565b905061251a600c54426123bb90919063ffffffff16565b600c546125289087906123bb565b146125365760009350600092505b61255161254a87610f2c8562989680612359565b8590612765565b935061256e61256788610f2c8462989680612359565b8490612765565b925050505b81811180156125a257506001600160a01b038a166000908152601360205260409020546125a082846127bd565b115b156125ff57604080516001600160a01b038c16815260208101889052808201879052606081018490526080810183905290517fe582322b389ad06b2bbf619cd6da3f16a288ec873ea0fa6df4d72f3d9480b4479181900360a00190a15b61260b8a8784846128a1565b604080516001600160a01b038c16815260208101889052808201879052606081018490526080810183905290517f23b9387f81fca646aac1dc4487ede045c65f5f7445482906565f01e05afdb3a89181900360a00190a15050505050505b6001600160a01b0384166000908152601160205260409020839055611985818585612a37565b600061269a8261224d565b90508015610f60576002546001546001600160a01b03918216911660005b6008811015610f5c57601654819081106126d6575050505050610f62565b60168054602084029189831c63ffffffff169160009190869081106126f757fe5b6000918252602082200154601780546001600160a01b039092169350908790811061271e57fe5b6000918252602082200154915061274582610f2c8668327cb2734119d3b7a9601e1b612359565b905061275383828a8c6123fa565b5050600190940193506126b892505050565b6000828201838110156123b2576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b60006123b283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612ab5565b6000818361288b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612850578181015183820152602001612838565b50505050905090810190601f16801561287d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161289757fe5b0495945050505050565b6001600160a01b0383106128fc576040805162461bcd60e51b815260206004820152601f60248201527f466173745072696365466565643a20696e76616c696420726566507269636500604482015290519081900360640190fd5b63ffffffff821061293e5760405162461bcd60e51b8152600401808060200182810382526029815260200180612d516029913960400191505060405180910390fd5b63ffffffff81106129805760405162461bcd60e51b815260040180806020018281038252602a815260200180612c3c602a913960400191505060405180910390fd5b604080516080810182526001600160a01b03948516815263ffffffff4281166020808401918252958216838501908152948216606084019081529787166000908152601290965292909420905181549251935196518516600160e01b026001600160e01b03978616600160c01b0263ffffffff60c01b1995909616600160a01b0263ffffffff60a01b19929097166001600160a01b0319909416939093171694909417919091169190911792909216919091179055565b6001600160a01b038316612a4a57610f60565b826001600160a01b031663e0409c7183836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015612aa157600080fd5b505af1158015611981573d6000803e3d6000fd5b60008184841115612b075760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315612850578181015183820152602001612838565b505050900390565b60408051608081018252600080825260208201819052918101829052606081019190915290565b828054828255906000526020600020908101928215612b8b579160200282015b82811115612b8b57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612b56565b50612b97929150612be2565b5090565b828054828255906000526020600020908101928215612bd6579160200282015b82811115612bd6578251825591602001919060010190612bbb565b50612b97929150612c01565b5b80821115612b975780546001600160a01b0319168155600101612be3565b5b80821115612b975760008155600101612c0256fe466173745072696365466565643a20696e76616c6964205f70726963654475726174696f6e466173745072696365466565643a20696e76616c69642063756d756c61746976654661737444656c7461476f7665726e61626c653a20666f7262696464656e0000000000000000000000466173745072696365466565643a20666f7262696464656e0000000000000000466173745072696365466565643a205f74696d657374616d70206578636565647320616c6c6f7765642072616e6765536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77466173745072696365466565643a205f74696d657374616d702062656c6f7720616c6c6f7765642072616e6765466173745072696365466565643a206d696e426c6f636b496e74657276616c206e6f742079657420706173736564466173745072696365466565643a20696e76616c69642063756d756c617469766552656644656c7461466173745072696365466565643a20616c726561647920696e697469616c697a6564a2646970667358221220287dd7bcec5ab66f33e1d312635dba7a059e450f2b6d09e84539730e09001bd564736f6c634300060c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
