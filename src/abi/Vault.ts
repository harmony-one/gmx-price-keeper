export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "Vault",
  "sourceName": "contracts/core/Vault.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "usdgAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeBasisPoints",
          "type": "uint256"
        }
      ],
      "name": "BuyUSDG",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "averagePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "entryFundingRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reserveAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "realisedPnl",
          "type": "int256"
        }
      ],
      "name": "ClosePosition",
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
          "name": "feeUsd",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeTokens",
          "type": "uint256"
        }
      ],
      "name": "CollectMarginFees",
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
          "name": "feeUsd",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeTokens",
          "type": "uint256"
        }
      ],
      "name": "CollectSwapFees",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DecreaseGuaranteedUsd",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DecreasePoolAmount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "indexToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateralDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sizeDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "DecreasePosition",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DecreaseReservedAmount",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DecreaseUsdgAmount",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DirectPoolDeposit",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreaseGuaranteedUsd",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreasePoolAmount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "indexToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateralDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sizeDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "IncreasePosition",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreaseReservedAmount",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IncreaseUsdgAmount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "indexToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isLong",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reserveAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "realisedPnl",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "markPrice",
          "type": "uint256"
        }
      ],
      "name": "LiquidatePosition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "usdgAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeBasisPoints",
          "type": "uint256"
        }
      ],
      "name": "SellUSDG",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenIn",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenOut",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountOutAfterFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeBasisPoints",
          "type": "uint256"
        }
      ],
      "name": "Swap",
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
          "name": "fundingRate",
          "type": "uint256"
        }
      ],
      "name": "UpdateFundingRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "hasProfit",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "delta",
          "type": "uint256"
        }
      ],
      "name": "UpdatePnl",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "averagePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "entryFundingRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reserveAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "realisedPnl",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "markPrice",
          "type": "uint256"
        }
      ],
      "name": "UpdatePosition",
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
      "name": "FUNDING_RATE_PRECISION",
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
      "name": "MAX_FEE_BASIS_POINTS",
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
      "name": "MAX_FUNDING_RATE_FACTOR",
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
      "name": "MAX_LIQUIDATION_FEE_USD",
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
      "name": "MIN_FUNDING_RATE_INTERVAL",
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
      "name": "MIN_LEVERAGE",
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
      "name": "USDG_DECIMALS",
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
          "name": "_router",
          "type": "address"
        }
      ],
      "name": "addRouter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenDiv",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenMul",
          "type": "address"
        }
      ],
      "name": "adjustForDecimals",
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
      "name": "allWhitelistedTokens",
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
      "name": "allWhitelistedTokensLength",
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
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "approvedRouters",
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
      "name": "bufferAmounts",
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
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "buyUSDG",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
      "name": "clearTokenConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "cumulativeFundingRates",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_collateralDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sizeDelta",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "decreasePosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
      "name": "directPoolDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "errorController",
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
      "name": "errors",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
      "name": "feeReserves",
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
      "name": "fundingInterval",
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
      "name": "fundingRateFactor",
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
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_averagePrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_lastIncreasedTime",
          "type": "uint256"
        }
      ],
      "name": "getDelta",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "getEntryFundingRate",
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
        },
        {
          "internalType": "uint256",
          "name": "_usdgDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_feeBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_taxBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_increment",
          "type": "bool"
        }
      ],
      "name": "getFeeBasisPoints",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_entryFundingRate",
          "type": "uint256"
        }
      ],
      "name": "getFundingFee",
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
      "name": "getGlobalShortDelta",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "getMaxPrice",
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
      "name": "getMinPrice",
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
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_size",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_averagePrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_nextPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sizeDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_lastIncreasedTime",
          "type": "uint256"
        }
      ],
      "name": "getNextAveragePrice",
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
      "name": "getNextFundingRate",
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
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_nextPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sizeDelta",
          "type": "uint256"
        }
      ],
      "name": "getNextGlobalShortAveragePrice",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "getPosition",
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
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "getPositionDelta",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_sizeDelta",
          "type": "uint256"
        }
      ],
      "name": "getPositionFee",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "getPositionKey",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
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
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "getPositionLeverage",
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
        },
        {
          "internalType": "uint256",
          "name": "_usdgAmount",
          "type": "uint256"
        }
      ],
      "name": "getRedemptionAmount",
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
      "name": "getRedemptionCollateral",
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
      "name": "getRedemptionCollateralUsd",
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
      "name": "getTargetUsdgAmount",
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
      "name": "getUtilisation",
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
      "name": "globalShortAveragePrices",
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
      "name": "globalShortSizes",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "guaranteedUsd",
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
      "name": "hasDynamicFees",
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
      "name": "inManagerMode",
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
      "name": "inPrivateLiquidationMode",
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
      "name": "includeAmmPrice",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_sizeDelta",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        }
      ],
      "name": "increasePosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_router",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_usdg",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_priceFeed",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_liquidationFeeUsd",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_fundingRateFactor",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_stableFundingRateFactor",
          "type": "uint256"
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
      "inputs": [],
      "name": "isLeverageEnabled",
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
      "name": "isLiquidator",
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
      "name": "isManager",
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
      "name": "isSwapEnabled",
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
      "name": "lastFundingTimes",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "_feeReceiver",
          "type": "address"
        }
      ],
      "name": "liquidatePosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "liquidationFeeUsd",
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
      "name": "marginFeeBasisPoints",
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
      "name": "maxGasPrice",
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
      "name": "maxGlobalShortSizes",
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
      "name": "maxLeverage",
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
      "name": "maxUsdgAmounts",
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
      "name": "minProfitBasisPoints",
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
      "name": "minProfitTime",
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
      "name": "mintBurnFeeBasisPoints",
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
      "name": "poolAmounts",
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
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "positions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "size",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "averagePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryFundingRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveAmount",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "realisedPnl",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "lastIncreasedTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "priceFeed",
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
          "name": "_router",
          "type": "address"
        }
      ],
      "name": "removeRouter",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "reservedAmounts",
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
      "name": "router",
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
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "sellUSDG",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "setBufferAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_errorCode",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_error",
          "type": "string"
        }
      ],
      "name": "setError",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_errorController",
          "type": "address"
        }
      ],
      "name": "setErrorController",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_taxBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_stableTaxBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_mintBurnFeeBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_swapFeeBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_stableSwapFeeBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_marginFeeBasisPoints",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_liquidationFeeUsd",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minProfitTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_hasDynamicFees",
          "type": "bool"
        }
      ],
      "name": "setFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_fundingInterval",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_fundingRateFactor",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_stableFundingRateFactor",
          "type": "uint256"
        }
      ],
      "name": "setFundingRate",
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
          "name": "_inManagerMode",
          "type": "bool"
        }
      ],
      "name": "setInManagerMode",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_inPrivateLiquidationMode",
          "type": "bool"
        }
      ],
      "name": "setInPrivateLiquidationMode",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isLeverageEnabled",
          "type": "bool"
        }
      ],
      "name": "setIsLeverageEnabled",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_isSwapEnabled",
          "type": "bool"
        }
      ],
      "name": "setIsSwapEnabled",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_liquidator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isActive",
          "type": "bool"
        }
      ],
      "name": "setLiquidator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_manager",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isManager",
          "type": "bool"
        }
      ],
      "name": "setManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxGasPrice",
          "type": "uint256"
        }
      ],
      "name": "setMaxGasPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "setMaxGlobalShortSize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxLeverage",
          "type": "uint256"
        }
      ],
      "name": "setMaxLeverage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_priceFeed",
          "type": "address"
        }
      ],
      "name": "setPriceFeed",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_tokenDecimals",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenWeight",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minProfitBps",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxUsdgAmount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isStable",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_isShortable",
          "type": "bool"
        }
      ],
      "name": "setTokenConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "setUsdgAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IVaultUtils",
          "name": "_vaultUtils",
          "type": "address"
        }
      ],
      "name": "setVaultUtils",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "shortableTokens",
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
      "name": "stableFundingRateFactor",
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
      "name": "stableSwapFeeBasisPoints",
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
      "name": "stableTaxBasisPoints",
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
      "name": "stableTokens",
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
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "swap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "swapFeeBasisPoints",
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
      "name": "taxBasisPoints",
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
      "name": "tokenBalances",
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
      "name": "tokenDecimals",
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
        },
        {
          "internalType": "uint256",
          "name": "_tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "tokenToUsdMin",
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
      "name": "tokenWeights",
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
      "name": "totalTokenWeights",
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
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        }
      ],
      "name": "updateCumulativeFundingRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newVault",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "upgradeVault",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_usdAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "usdToToken",
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
        },
        {
          "internalType": "uint256",
          "name": "_usdAmount",
          "type": "uint256"
        }
      ],
      "name": "usdToTokenMax",
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
        },
        {
          "internalType": "uint256",
          "name": "_usdAmount",
          "type": "uint256"
        }
      ],
      "name": "usdToTokenMin",
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
      "name": "usdg",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "usdgAmounts",
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
      "name": "useSwapPricing",
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
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_collateralToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_indexToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isLong",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_raise",
          "type": "bool"
        }
      ],
      "name": "validateLiquidation",
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vaultUtils",
      "outputs": [
        {
          "internalType": "contract IVaultUtils",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whitelistedTokenCount",
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
      "name": "whitelistedTokens",
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
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "withdrawFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526001805462ff00001961ff00199091166101001716620100001781556207a1206008556032600a9081556014600b55601e600c819055600d556004600e55600f556011805460ff199081169091556170806012556016805463ffffff0019921690921716905534801561007657600080fd5b506001600055600680546001600160a01b03191633179055615edd806200009e6000396000f3fe608060405234801561001057600080fd5b50600436106105695760003560e01c806304fef1db1461056e57806307c58752146105a65780630842b076146105ae5780630a48d5a9146105b657806310eb56c2146105e2578063126082cf146105ea57806312d43a51146105f2578063134ca63b14610616578063174d26941461061e578063181e210e146106265780631aa4ace5146106425780631ce9cb8f1461066857806324b0c04d1461068e57806324ca984e146106af57806328e67be5146106d557806329ff96151461074a5780632c668ec1146107705780632d4b05761461079c57806330455ede146107da578063318bc689146107f957806334c1557d146105ea578063351a964d14610801578063392e53cd146108095780633a05dcc1146108115780633c5a6e35146108375780633de39c11146108855780633e72a2621461088d57806340eb38021461089557806342152873146108e657806342b60b031461091a5780634453a3741461094057806345a6f3701461096e57806348d91abf146109c757806348f35cbb14610a0b5780634a3f088d14610a135780634a993ee914610a945780634befe2ca14610aba5780634d47b30414610ac2578063514ea4bf14610aca57806351723e8214610b1f578063523fba7f14610b5d578063529a356f14610b8357806352f55eed14610ba95780635c07eaab14610bcf5780635f7bc11914610c0f5780636092219914610c3557806362287a3214610c635780636274980314610c6b5780636abbe0c814610c915780636ae0b15414610c995780636be6026b14610cbf57806371089f4d14610cc7578063711e619014610ced578063724e78da14610d1b578063728cdbca14610d41578063741bef1a14610d895780637a210a2b14610d915780637c2eb9f714610d99578063817bb85714610db857806381a612d614610de657806382a0849014610e0c5780638585f4d214610e60578063870d917c14610e8c57806388b1fbdf14610e945780638a27d46814610eba5780638a39735a146105ea5780638a78daa814610ee35780638ee573ac14610f095780638f7b840414610f2f5780639060b1ca14610f555780639331621214610f5d57806395082d2514610f955780639698d25a14610f9d5780639849e41214610fc35780639899cd0214610fcb5780639d7432ca14610ff75780639f392eb314611029578063a22f239214611031578063a42ab3d214611039578063a5e90eee14611065578063a93acac214611093578063ab08c1c6146110b9578063ab2f3ad4146110c1578063ad1e4f8d146110e7578063ae3302c21461110d578063b06423f314611115578063b136ca491461111d578063b1cc53ab14611143578063b364accb1461117b578063c3c7b9e9146111a1578063c4f718bf146111c7578063c65bc7b1146111cf578063c7e074c3146111f5578063cea0c32814611235578063cfad57a21461126b578063d2fa635e14611291578063d3127e63146112ae578063d54d5a9f146112cb578063d66b000d1461132a578063d8f897c314611356578063d9ac42251461137c578063da76524c14611384578063daf9c210146113ce578063db3555fb146113f4578063db97495f1461141a578063dc8f5fac14611466578063de2ea9481461146e578063df73a267146114b6578063e124e6d2146114be578063e468baf0146114e4578063e67f59a714611501578063efa10a6e14611527578063f07456ce14611553578063f07bbf7714611579578063f255527814611598578063f3ae2415146115c6578063f5b91b7b146115ec578063f887ea40146115f4578063fa12dbc0146115fc578063fbfded6d1461162e578063fce28c101461165c578063fdaf6ac314611664578063fed1a606146116a8575b600080fd5b6105946004803603602081101561058457600080fd5b50356001600160a01b031661173a565b60408051918252519081900360200190f35b61059461179d565b6105946117ae565b610594600480360360408110156105cc57600080fd5b506001600160a01b0381351690602001356117b4565b610594611807565b61059461180d565b6105fa611813565b604080516001600160a01b039092168252519081900360200190f35b610594611822565b610594611828565b61062e61182e565b604080519115158252519081900360200190f35b6105946004803603602081101561065857600080fd5b50356001600160a01b031661183e565b6105946004803603602081101561067e57600080fd5b50356001600160a01b0316611850565b6106ad600480360360208110156106a457600080fd5b50351515611862565b005b6106ad600480360360208110156106c557600080fd5b50356001600160a01b0316611886565b6106ad600480360360408110156106eb57600080fd5b81359190810190604081016020820135600160201b81111561070c57600080fd5b82018360208201111561071e57600080fd5b803590602001918460018302840111600160201b8311171561073f57600080fd5b5090925090506118b7565b6105946004803603602081101561076057600080fd5b50356001600160a01b0316611935565b6105946004803603604081101561078657600080fd5b506001600160a01b038135169060200135611949565b610594600480360360808110156107b257600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135151561198e565b6106ad600480360360208110156107f057600080fd5b503515156119e4565b610594611a06565b61062e611a0c565b61062e611a1a565b6105946004803603602081101561082757600080fd5b50356001600160a01b0316611a23565b6106ad600480360360e081101561084d57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a081013515159060c001351515611ae3565b610594611c25565b61062e611c2b565b6106ad60048036036101208110156108ac57600080fd5b5080359060208101359060408101359060608101359060808101359060a08101359060c08101359060e08101359061010001351515611c3a565b610594600480360360608110156108fc57600080fd5b508035906001600160a01b0360208201358116916040013516611cf4565b61062e6004803603602081101561093057600080fd5b50356001600160a01b0316611d96565b6106ad6004803603604081101561095657600080fd5b506001600160a01b0381351690602001351515611dab565b6109ac6004803603608081101561098457600080fd5b506001600160a01b038135811691602081013582169160408201351690606001351515611dde565b60408051921515835260208301919091528051918290030190f35b6106ad600480360360a08110156109dd57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013590608001351515611e7c565b6105fa6122a9565b610a5160048036036080811015610a2957600080fd5b506001600160a01b0381358116916020810135821691604082013516906060013515156122b8565b604080519889526020890197909752878701959095526060870193909352608086019190915260a0850152151560c084015260e083015251908190036101000190f35b61059460048036036020811015610aaa57600080fd5b50356001600160a01b03166123ae565b6105946123c0565b6105946123c6565b610ae760048036036020811015610ae057600080fd5b50356123cc565b604080519788526020880196909652868601949094526060860192909252608085015260a084015260c0830152519081900360e00190f35b61059460048036036080811015610b3557600080fd5b506001600160a01b038135811691602081013582169160408201351690606001351515612409565b61059460048036036020811015610b7357600080fd5b50356001600160a01b03166124af565b61062e60048036036020811015610b9957600080fd5b50356001600160a01b03166124c1565b61059460048036036020811015610bbf57600080fd5b50356001600160a01b03166124d6565b6109ac600480360360a0811015610be557600080fd5b506001600160a01b03813516906020810135906040810135906060810135151590608001356124e8565b6106ad60048036036020811015610c2557600080fd5b50356001600160a01b03166125e0565b61062e60048036036040811015610c4b57600080fd5b506001600160a01b03813581169160200135166126c3565b6105946126e3565b61059460048036036020811015610c8157600080fd5b50356001600160a01b03166126e9565b6105fa6126fb565b6106ad60048036036020811015610caf57600080fd5b50356001600160a01b0316612711565b61059461273f565b6106ad60048036036020811015610cdd57600080fd5b50356001600160a01b0316612746565b61059460048036036040811015610d0357600080fd5b506001600160a01b038135811691602001351661277a565b6106ad60048036036020811015610d3157600080fd5b50356001600160a01b0316612a0e565b6106ad600480360360c0811015610d5757600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101359060808101359060a00135612a38565b6105fa612aaf565b610594612abe565b6106ad60048036036020811015610daf57600080fd5b50351515612ac4565b61059460048036036040811015610dce57600080fd5b506001600160a01b0381358116916020013516612ae8565b61059460048036036020811015610dfc57600080fd5b50356001600160a01b0316612db8565b610594600480360360e0811015610e2257600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160808201359160a081013515159160c09091013516612e63565b6106ad60048036036040811015610e7657600080fd5b506001600160a01b038135169060200135612ee1565b610594612f05565b61059460048036036020811015610eaa57600080fd5b50356001600160a01b0316612f0a565b6106ad60048036036060811015610ed057600080fd5b5080359060208101359060400135612f1c565b61059460048036036020811015610ef957600080fd5b50356001600160a01b0316612f62565b61059460048036036020811015610f1f57600080fd5b50356001600160a01b0316612f74565b6106ad60048036036020811015610f4557600080fd5b50356001600160a01b0316612f86565b61062e612fb0565b61059460048036036060811015610f7357600080fd5b506001600160a01b038135811691602081013582169160409091013516612fbf565b6105946132a7565b61059460048036036020811015610fb357600080fd5b50356001600160a01b03166132b7565b6105946132c9565b61059460048036036040811015610fe157600080fd5b506001600160a01b0381351690602001356132cf565b6105946004803603606081101561100d57600080fd5b506001600160a01b0381351690602081013590604001356132f1565b61062e61339a565b6105946133a3565b6105946004803603604081101561104f57600080fd5b506001600160a01b0381351690602001356133a9565b6106ad6004803603604081101561107b57600080fd5b506001600160a01b03813516906020013515156133c6565b610594600480360360208110156110a957600080fd5b50356001600160a01b03166133f9565b61062e6134f7565b610594600480360360208110156110d757600080fd5b50356001600160a01b0316613500565b610594600480360360208110156110fd57600080fd5b50356001600160a01b0316613512565b610594613524565b61062e61352a565b6105946004803603602081101561113357600080fd5b50356001600160a01b0316613538565b6105946004803603606081101561115957600080fd5b506001600160a01b0381358116916020810135909116906040013515156135d9565b6109ac6004803603602081101561119157600080fd5b50356001600160a01b0316613674565b610594600480360360208110156111b757600080fd5b50356001600160a01b031661370c565b61059461371e565b610594600480360360208110156111e557600080fd5b50356001600160a01b0316613724565b610594600480360360a081101561120b57600080fd5b506001600160a01b0381351690602081013590604081013590606081013590608001351515613736565b6106ad6004803603606081101561124b57600080fd5b506001600160a01b038135811691602081013590911690604001356137e0565b6106ad6004803603602081101561128157600080fd5b50356001600160a01b0316613801565b6106ad600480360360208110156112a757600080fd5b503561382b565b6106ad600480360360208110156112c457600080fd5b5035613838565b611311600480360360a08110156112e157600080fd5b506001600160a01b0381358116916020810135821691604082013516906060810135151590608001351515613854565b6040805192835260208301919091528051918290030190f35b6106ad6004803603604081101561134057600080fd5b506001600160a01b03813516906020013561390b565b6105946004803603602081101561136c57600080fd5b50356001600160a01b0316613964565b610594613976565b610594600480360360c081101561139a57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013515159060808101359060a0013561397c565b61062e600480360360208110156113e457600080fd5b50356001600160a01b0316613a30565b61062e6004803603602081101561140a57600080fd5b50356001600160a01b0316613a45565b610594600480360360e081101561143057600080fd5b506001600160a01b0381351690602081013590604081013590606081013515159060808101359060a08101359060c00135613a59565b610594613aea565b6106ad600480360360a081101561148457600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013515159160809091013516613af0565b610594613eb6565b610594600480360360208110156114d457600080fd5b50356001600160a01b0316613ebc565b6105fa600480360360208110156114fa57600080fd5b5035613f34565b6106ad6004803603602081101561151757600080fd5b50356001600160a01b0316613f5b565b6106ad6004803603604081101561153d57600080fd5b506001600160a01b03813516906020013561402e565b6105946004803603602081101561156957600080fd5b50356001600160a01b0316614052565b6106ad6004803603602081101561158f57600080fd5b50351515614064565b610594600480360360408110156115ae57600080fd5b506001600160a01b038135811691602001351661408a565b61062e600480360360208110156115dc57600080fd5b50356001600160a01b03166140e0565b6105fa6140f5565b6105fa614104565b6105946004803603606081101561161257600080fd5b506001600160a01b038135169060208101359060400135614113565b6106ad6004803603604081101561164457600080fd5b506001600160a01b038135811691602001351661414d565b610594614326565b610594600480360360a081101561167a57600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101351515906080013561432c565b6116c5600480360360208110156116be57600080fd5b50356143a2565b6040805160208082528351818301528351919283929083019185019080838360005b838110156116ff5781810151838201526020016116e7565b50505050905090810190601f16801561172c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6001600160a01b03811660009081526025602052604081205480611762576000915050611798565b6001600160a01b03831660009081526026602052604090205461179490829061178e90620f424061443d565b90614496565b9150505b919050565b6904ee2d6d415b85acef8160201b81565b601b5490565b6000816117c357506000611801565b60006117ce84612db8565b6001600160a01b0385166000908152601d60205260409020549091506117fc600a82900a61178e868561443d565b925050505b92915050565b600b5481565b61271081565b6006546001600160a01b031681565b60145481565b60095481565b6016546301000000900460ff1681565b60236020526000908152604090205481565b602c6020526000908152604090205481565b61186a6144d5565b60168054911515620100000262ff000019909216919091179055565b3360009081526018602090815260408083206001600160a01b0394909416835292905220805460ff19166001179055565b6002546001600160a01b03163314611916576040805162461bcd60e51b815260206004820152601e60248201527f5661756c743a20696e76616c6964206572726f72436f6e74726f6c6c65720000604482015290519081900360640190fd5b600083815260306020526040902061192f908383615cec565b50505050565b60006118018261194484613538565b6117b4565b60008061195584613ebc565b905060006119738261178e8668327cb2734119d3b7a9601e1b61443d565b6005549091506117fc9082906001600160a01b031687611cf4565b604080516001600160601b0319606096871b811660208084019190915295871b811660348301529390951b9092166048850152151560f81b605c8401528051603d818503018152605d9093019052815191012090565b6119ec6144d5565b600180549115156101000261ff0019909216919091179055565b600f5481565b600154610100900460ff1681565b60015460ff1681565b600080600560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611a7457600080fd5b505afa158015611a88573d6000803e3d6000fd5b505050506040513d6020811015611a9e57600080fd5b5051905080611ab1576000915050611798565b6001600160a01b038316600090815260226020526040902054601554611adb9061178e838561443d565b949350505050565b611aeb6144d5565b6001600160a01b0387166000908152601c602052604090205460ff16611b6857600754611b199060016144f0565b600755601b80546001810182556000919091527f3ad8aa4f87544323a9d1e5dd902f40c356527a7955687113db5f9a85ad579dc10180546001600160a01b0319166001600160a01b0389161790555b6015546001600160a01b038816600090815260226020526040902054611b8f908290614548565b6001600160a01b0389166000908152601c602090815260408083208054600160ff1991821617909155601d83528184208c9055602283528184208b9055601e83528184208a905560248352818420899055601f83528184208054821689151517905591805290912080549091168415151790559050611c0e81876144f0565b601555611c1a88613ebc565b505050505050505050565b60175481565b60015462010000900460ff1681565b611c426144d5565b611c526101f48a1115600361458a565b611c626101f4891115600461458a565b611c726101f4881115600561458a565b611c826101f4871115600661458a565b611c926101f4861115600761458a565b611ca26101f4851115600861458a565b611cbd6904ee2d6d415b85acef8160201b841115600961458a565b600a98909855600b96909655600c94909455600d92909255600e55600f556009556010556011805460ff1916911515919091179055565b60055460009081906001600160a01b03858116911614611d2c576001600160a01b0384166000908152601d6020526040902054611d2f565b60125b6005549091506000906001600160a01b03858116911614611d68576001600160a01b0384166000908152601d6020526040902054611d6b565b60125b9050611d8a82600a0a61178e83600a0a8961443d90919063ffffffff16565b925050505b9392505050565b601f6020526000908152604090205460ff1681565b611db36144d5565b6001600160a01b03919091166000908152601960205260409020805460ff1916911515919091179055565b6000806000611def8787878761198e565b9050611df9615d6a565b506000818152602b6020908152604091829020825160e081018452815480825260018301549382019390935260028201549381018490526003820154606082015260048201546080820152600582015460a082015260069091015460c082018190529092611e6d92899290919089906124e8565b93509350505094509492505050565b60026000541415611ec2576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b6002600055600154611ede9062010000900460ff16601c61458a565b611ee6614636565b611eef85614652565b611efa8484836146b5565b60015460408051634eae147d60e11b81526001600160a01b038881166004830152878116602483015286811660448301526064820186905284151560848301529151630100000090930490911691639d5c28fa9160a480820192600092909190829003018186803b158015611f6e57600080fd5b505afa158015611f82573d6000803e3d6000fd5b50505050611f90848461414d565b6000611f9e8686868561198e565b6000818152602b6020526040812091925083611fc257611fbd86612db8565b611fcb565b611fcb86613ebc565b8254909150611fdc57600282018190555b815415801590611fec5750600085115b156120125761200c868360000154846002015487858a8860060154613a59565b60028301555b600061202b898989888a886000015489600301546147ca565b9050600061203889614886565b905060006120468a836117b4565b600186015490915061205890826144f0565b6001860181905561206d90841115601d61458a565b600185015461207c9084614548565b600186015561208c8a8a896135d9565b6003860155845461209d90896144f0565b8086554260068701556120b3901515601e61458a565b6120c585600001548660010154614933565b6120d38b8b8b8a6001613854565b505060006120e18b8a6133a9565b60048701549091506120f390826144f0565b60048701556121028b82614957565b87156121475761211b8b6121168b876144f0565b6149f7565b6121258b83614a76565b61212f8b84614af5565b6121428b61213d8d876132cf565b614c0d565b6121b3565b6001600160a01b038a166000908152602d6020526040902054612184576001600160a01b038a166000908152602e602052604090208590556121a9565b61218f8a868b6132f1565b6001600160a01b038b166000908152602e60205260409020555b6121b38a8a614ce0565b604080518881526001600160a01b03808f166020830152808e16828401528c1660608201526080810184905260a081018b905289151560c082015260e08101879052610100810186905290517f2fe68525253654c21998f35787a8d0f361905ef647c854092430ab65f2f15022918190036101200190a1855460018701546002880154600389015460048a015460058b0154604080518e81526020810197909752868101959095526060860193909352608085019190915260a084015260c083015260e0820187905251600080516020615ddd833981519152918190036101000190a15050600160005550505050505050505050565b6002546001600160a01b031681565b60008060008060008060008060006122d28d8d8d8d61198e565b90506122dc615d6a565b602b60008381526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152505090506000808260a001511361235c578160a00151600003612362565b8160a001515b9050816000015182602001518360400151846060015185608001518560008860a0015112158860c001519a509a509a509a509a509a509a509a5050505094995094995094999196509450565b60276020526000908152604090205481565b6101f481565b600c5481565b602b602052600090815260409020805460018201546002830154600384015460048501546005860154600690960154949593949293919290919087565b6000806124188686868661198e565b9050612422615d6a565b506000818152602b6020908152604091829020825160e0810184528154815260018201549281018390526002820154938101939093526003810154606084015260048101546080840152600581015460a08401526006015460c083015261248c901515602561458a565b602081015181516124a4919061178e9061271061443d565b979650505050505050565b60216020526000908152604090205481565b60196020526000908152604090205460ff1681565b60256020526000908152604090205481565b6000806124f960008611602661458a565b60008461250e5761250988613ebc565b612517565b61251788612db8565b905060008187116125315761252c8288614548565b61253b565b61253b8783614548565b9050600061254d8861178e8b8561443d565b9050600087156125605750878311612565565b508288115b600061257c601054896144f090919063ffffffff16565b42116125a0576001600160a01b038c166000908152601e60205260409020546125a3565b60005b90508180156125c657506125b78b8261443d565b6125c38461271061443d565b11155b156125d057600092505b509a909950975050505050505050565b60026000541415612626576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b600260009081556001600160a01b0382168152601c60205260409020546126519060ff16600e61458a565b600061265c82614886565b905061266c60008211600f61458a565b6126768282614af5565b604080516001600160a01b03841681526020810183905281517fa5a389190ebf6170a133bda5c769b77f4d6715b8aa172ec0ddf8473d0b4944bd929181900390910190a150506001600055565b601860209081526000928352604080842090915290825290205460ff1681565b60075481565b602e6020526000908152604090205481565b600154630100000090046001600160a01b031681565b3360009081526018602090815260408083206001600160a01b0394909416835292905220805460ff19169055565b620f424081565b61274e6144d5565b600180546001600160a01b039092166301000000026301000000600160b81b0319909216919091179055565b6000600260005414156127c2576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b60026000556127cf614d98565b6001600160a01b0383166000908152601c60205260409020546127f69060ff16601361458a565b6016805461ff00191661010017905560055460009061281d906001600160a01b0316614886565b905061282d60008211601461458a565b612837848561414d565b60006128438583611949565b905061285360008211601561458a565b61285d8583614dc7565b6128678582614c0d565b60055460408051632770a7eb60e21b81523060048201526024810185905290516001600160a01b0390921691639dc29fac9160448082019260009290919082900301818387803b1580156128ba57600080fd5b505af11580156128ce573d6000803e3d6000fd5b50506005546128e892506001600160a01b03169050614e85565b6001546040805163eb0835bf60e01b81526001600160a01b038881166004830152602482018690529151600093630100000090049092169163eb0835bf91604480820192602092909190829003018186803b15801561294657600080fd5b505afa15801561295a573d6000803e3d6000fd5b505050506040513d602081101561297057600080fd5b505190506000612981878484614f20565b905061299160008211601661458a565b61299c878288614fe8565b604080516001600160a01b03808916825289166020820152808201869052606081018390526080810184905290517fd732b7828fa6cee72c285eac756fc66a7477e3dc22e22e7c432f1c265d40b4839181900360a00190a16016805461ff001916905560016000559695505050505050565b612a166144d5565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b612a406144d5565b60018054612a549160ff909116159061458a565b6001805460ff191681179055600380546001600160a01b03199081166001600160a01b039889161790915560058054821696881696909617909555600480549095169390951692909217909255600991909155601355601455565b6004546001600160a01b031681565b600a5481565b612acc6144d5565b60018054911515620100000262ff000019909216919091179055565b600060026000541415612b30576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b6002600055612b3d614d98565b6001600160a01b0383166000908152601c6020526040902054612b649060ff16601061458a565b6016805461ff0019166101001790556000612b7e84614886565b9050612b8e60008211601161458a565b612b98848561414d565b6000612ba385612db8565b90506000612bc168327cb2734119d3b7a9601e1b61178e858561443d565b600554909150612bdd90829088906001600160a01b0316611cf4565b9050612bed60008211601261458a565b6001546040805163256f6ee360e11b81526001600160a01b0389811660048301526024820185905291516000936301000000900490921691634adeddc691604480820192602092909190829003018186803b158015612c4b57600080fd5b505afa158015612c5f573d6000803e3d6000fd5b505050506040513d6020811015612c7557600080fd5b505190506000612c86888684614f20565b90506000612ca468327cb2734119d3b7a9601e1b61178e848861443d565b600554909150612cc09082908b906001600160a01b0316611cf4565b9050612ccc898261508f565b612cd68983614af5565b600554604080516340c10f1960e01b81526001600160a01b038b8116600483015260248201859052915191909216916340c10f1991604480830192600092919082900301818387803b158015612d2b57600080fd5b505af1158015612d3f573d6000803e3d6000fd5b5050604080516001600160a01b03808d1682528d1660208201528082018a9052606081018590526080810187905290517fab4c77c74cd32c85f35416cf03e7ce9e2d4387f7b7f2c1f4bf53daaecf8ea72d93509081900360a0019150a16016805461ff0019169055600160005598975050505050505050565b60048054601654604080516317e1d38560e11b81526001600160a01b038681169582019590955260006024820181905260ff80851615156044840152610100909404909316151560648201529051919390921691632fc3a70a916084808301926020929190829003018186803b158015612e3157600080fd5b505afa158015612e45573d6000803e3d6000fd5b505050506040513d6020811015612e5b57600080fd5b505192915050565b600060026000541415612eab576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b6002600055612eb8614636565b612ec188614652565b612ed08888888888888861514d565b600160005598975050505050505050565b612ee96144d5565b6001600160a01b03909116600090815260276020526040902055565b601281565b601e6020526000908152604090205481565b612f246144d5565b612f34610e10841015600a61458a565b612f44612710831115600b61458a565b612f54612710821115600c61458a565b601292909255601355601455565b602d6020526000908152604090205481565b601d6020526000908152604090205481565b612f8e6144d5565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60165462010000900460ff1681565b600060026000541415613007576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b600260005560015461302290610100900460ff16601761458a565b6001600160a01b0384166000908152601c60205260409020546130499060ff16601861458a565b6001600160a01b0383166000908152601c60205260409020546130709060ff16601961458a565b613090836001600160a01b0316856001600160a01b03161415601a61458a565b6016805461ff0019166101001790556130a9848061414d565b6130b3838461414d565b60006130be85614886565b90506130ce60008211601b61458a565b60006130d986612db8565b905060006130e686613ebc565b905060006130f88261178e868661443d565b9050613105818989611cf4565b9050600061312368327cb2734119d3b7a9601e1b61178e878761443d565b60055490915061313f9082908b906001600160a01b0316611cf4565b60015460408051636d099c0b60e11b81526001600160a01b038d811660048301528c8116602483015260448201859052915193945060009363010000009093049091169163da13381691606480820192602092909190829003018186803b1580156131a957600080fd5b505afa1580156131bd573d6000803e3d6000fd5b505050506040513d60208110156131d357600080fd5b5051905060006131e48a8584614f20565b90506131f08b8461508f565b6131fa8a84614dc7565b6132048b88614af5565b61320e8a85614c0d565b6132178a6155da565b6132228a828b614fe8565b604080516001600160a01b03808c168252808e1660208301528c1681830152606081018990526080810186905260a0810183905260c0810184905290517f0874b2d545cb271cdbda4e093020c452328b24af12382ed62c4d00f5c26709db9181900360e00190a16016805461ff001916905560016000559a9950505050505050505050565b68327cb2734119d3b7a9601e1b81565b602f6020526000908152604090205481565b60125481565b6000816132de57506000611801565b611d8f83836132ec86613ebc565b614113565b6001600160a01b0383166000908152602d6020908152604080832054602e9092528220548285821161332c576133278683614548565b613336565b6133368287614548565b905060006133488361178e868561443d565b9050868311600061335986896144f0565b90506000826133715761336c82856144f0565b61337b565b61337b8285614548565b905061338b8161178e8c8561443d565b9b9a5050505050505050505050565b60115460ff1681565b600d5481565b6000816133b857506000611801565b611d8f83836132ec86612db8565b6133ce6144d5565b6001600160a01b03919091166000908152601a60205260409020805460ff1916911515919091179055565b6012546001600160a01b0382166000908152602a602052604081205490914291613422916144f0565b111561343057506000611798565b6012546001600160a01b0383166000908152602a6020526040812054909161345d9161178e904290614548565b6001600160a01b0384166000908152602560205260409020549091508061348957600092505050611798565b6001600160a01b0384166000908152601f602052604081205460ff166134b1576013546134b5565b6014545b6001600160a01b0386166000908152602660205260409020549091506134ee90839061178e9086906134e890869061443d565b9061443d565b95945050505050565b60165460ff1681565b60226020526000908152604090205481565b60246020526000908152604090205481565b60085481565b601654610100900460ff1681565b6001600160a01b0381166000908152601f602052604081205460ff161561357857506001600160a01b038116600090815260256020526040902054611798565b6001600160a01b03821660009081526028602052604081205461359c9084906132cf565b6001600160a01b038416600090815260266020908152604080832054602590925290912054919250611794916135d39084906144f0565b90614548565b6001546040805163b1cc53ab60e01b81526001600160a01b038681166004830152858116602483015284151560448301529151600093630100000090049092169163b1cc53ab91606480820192602092909190829003018186803b15801561364057600080fd5b505afa158015613654573d6000803e3d6000fd5b505050506040513d602081101561366a57600080fd5b5051949350505050565b6001600160a01b0381166000908152602d60205260408120548190806136a1576000809250925050613707565b60006136ac85613ebc565b6001600160a01b0386166000908152602e60205260408120549192508282116136de576136d98383614548565b6136e8565b6136e88284614548565b905060006136fa8361178e878561443d565b9390921195509193505050505b915091565b60266020526000908152604090205481565b60135481565b60296020526000908152604090205481565b6001546040805163c7e074c360e01b81526001600160a01b03888116600483015260248201889052604482018790526064820186905284151560848301529151600093630100000090049092169163c7e074c39160a480820192602092909190829003018186803b1580156137aa57600080fd5b505afa1580156137be573d6000803e3d6000fd5b505050506040513d60208110156137d457600080fd5b50519695505050505050565b6137e86144d5565b6137fc6001600160a01b038316848361564f565b505050565b6138096144d5565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6138336144d5565b601755565b6138406144d5565b61384f6127108211600261458a565b600855565b6001546040805163d54d5a9f60e01b81526001600160a01b03888116600483015287811660248301528681166044830152851515606483015284151560848301528251600094859463010000009091049092169263d54d5a9f9260a4808301939192829003018186803b1580156138ca57600080fd5b505afa1580156138de573d6000803e3d6000fd5b505050506040513d60408110156138f457600080fd5b508051602090910151909890975095505050505050565b6139136144d5565b6001600160a01b0382166000908152602360205260409020548082111561394d57613947836139428484614548565b61508f565b50613960565b6137fc8361395b8385614548565b614dc7565b5050565b602a6020526000908152604090205481565b60105481565b6001546040805163369d949360e21b81526001600160a01b0389811660048301528881166024830152878116604483015286151560648301526084820186905260a482018590529151600093630100000090049092169163da76524c9160c480820192602092909190829003018186803b1580156139f957600080fd5b505afa158015613a0d573d6000803e3d6000fd5b505050506040513d6020811015613a2357600080fd5b5051979650505050505050565b601c6020526000908152604090205460ff1681565b602080526000908152604090205460ff1681565b6000806000613a6b8a8a8a8a886124e8565b90925090506000613a7c8a876144f0565b905060008815613aab5783613a9a57613a958284614548565b613aa4565b613aa482846144f0565b9050613acc565b83613abf57613aba82846144f0565b613ac9565b613ac98284614548565b90505b613ada8161178e8a8561443d565b9c9b505050505050505050505050565b60155481565b60026000541415613b36576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b60026000556016546301000000900460ff1615613b6b5733600090815260196020526040902054613b6b9060ff16602261458a565b6016805460ff19169055613b7f848461414d565b6000613b8d8686868661198e565b9050613b97615d6a565b506000818152602b6020908152604091829020825160e08101845281548082526001830154938201939093526002820154938101939093526003810154606084015260048101546080840152600581015460a08401526006015460c0830152613c03901515602361458a565b600080613c14898989896000613854565b91509150613c278260001415602461458a565b8160021415613c5c57613c44898989600087600001518b8f61514d565b50506016805460ff1916600117905550613eaa915050565b6000613c6889836132cf565b6001600160a01b038a166000908152602c6020526040902054909150613c8e90826144f0565b6001600160a01b038a166000818152602c60209081526040918290209390935580519182529181018490528082018390529051600080516020615e888339815191529181900360600190a1613ce78985608001516156a1565b8615613d165760208401518451613d08918b91613d0391614548565b614a76565b613d168961213d8b856132cf565b600087613d2b57613d2689613ebc565b613d34565b613d3489612db8565b90507f2e1f85a64a2f22cf2f0c42584e7c919ed4abe8d53675cff0f62bf1e95a1c676f868c8c8c8c8a600001518b602001518c608001518d60a001518a604051808b81526020018a6001600160a01b03168152602001896001600160a01b03168152602001886001600160a01b0316815260200187151581526020018681526020018581526020018481526020018381526020018281526020019a505050505050505050505060405180910390a187158015613df35750846020015183105b15613e21576020850151600090613e0a9085614548565b9050613e1f8b613e1a8d846132cf565b614af5565b505b87613e3457613e34898660000151615756565b6000868152602b60205260408120818155600181018290556002810182905560038101829055600481018290556005810182905560060155600954613e80908b9061213d9082906132cf565b613e968a613e908c6009546132cf565b89614fe8565b50506016805460ff19166001179055505050505b50506001600055505050565b600e5481565b60048054601654604080516317e1d38560e11b81526001600160a01b03868116958201959095526001602482015260ff80841615156044830152610100909304909216151560648301525160009390921691632fc3a70a91608480820192602092909190829003018186803b158015612e3157600080fd5b601b8181548110613f4157fe5b6000918252602090912001546001600160a01b0316905081565b613f636144d5565b6001600160a01b0381166000908152601c6020526040902054613f8a9060ff16600d61458a565b6001600160a01b038116600090815260226020526040902054601554613faf91614548565b6015556001600160a01b0381166000908152601c60209081526040808320805460ff19908116909155601d835281842084905560228352818420849055601e835281842084905560248352818420849055601f835281842080548216905591805290912080549091169055600754614028906001614548565b60075550565b6140366144d5565b6001600160a01b039091166000908152602f6020526040902055565b60286020526000908152604090205481565b61406c6144d5565b6016805491151563010000000263ff00000019909216919091179055565b60006140946144d5565b6001600160a01b0383166000908152602c6020526040902054806140bc576000915050611801565b6001600160a01b0384166000908152602c6020526040812055611d8f848285614fe8565b601a6020526000908152604090205460ff1681565b6005546001600160a01b031681565b6003546001600160a01b031681565b60008261412257506000611d8f565b6001600160a01b0384166000908152601d60205260409020546134ee8361178e86600a85900a61443d565b6001546040805163fbfded6d60e01b81526001600160a01b03858116600483015284811660248301529151600093630100000090049092169163fbfded6d9160448082019260209290919082900301818787803b1580156141ad57600080fd5b505af11580156141c1573d6000803e3d6000fd5b505050506040513d60208110156141d757600080fd5b50519050806141e65750613960565b6001600160a01b0383166000908152602a602052604090205461423357601254614214906134e84282614496565b6001600160a01b0384166000908152602a602052604090205550613960565b6012546001600160a01b0384166000908152602a6020526040902054429161425b91906144f0565b11156142675750613960565b6000614272846133f9565b6001600160a01b03851660009081526029602052604090205490915061429890826144f0565b6001600160a01b0385166000908152602960205260409020556012546142c2906134e84282614496565b6001600160a01b0385166000818152602a602090815260408083209490945560298152908390205483519283529082015281517fa146fc154e1913322e9817d49f0d5c37466c24326e15de10e739a948be815eab929181900390910190a150505050565b610e1081565b6001546040805163fdaf6ac360e01b81526001600160a01b038881166004830152878116602483015286811660448301528515156064830152608482018590529151600093630100000090049092169163fdaf6ac39160a480820192602092909190829003018186803b1580156137aa57600080fd5b60306020908152600091825260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156144355780601f1061440a57610100808354040283529160200191614435565b820191906000526020600020905b81548152906001019060200180831161441857829003601f168201915b505050505081565b60008261444c57506000611801565b8282028284828161445957fe5b0414611d8f5760405162461bcd60e51b8152600401808060200182810382526021815260200180615e1d6021913960400191505060405180910390fd5b6000611d8f83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b8152506157be565b6006546144ee906001600160a01b03163314603561458a565b565b600082820183811015611d8f576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6000611d8f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250615860565b6000818152603060205260409020826137fc5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156146275780601f106145fc57610100808354040283529160200191614627565b820191906000526020600020905b81548152906001019060200180831161460a57829003601f168201915b50509250505060405180910390fd5b601754614642576144ee565b6144ee6017543a1115603761458a565b336001600160a01b0382161415614668576146b2565b6003546001600160a01b0316331415614680576146b2565b6001600160a01b03811660009081526018602090815260408083203384529091529020546146b29060ff16602961458a565b50565b801561472e576146da826001600160a01b0316846001600160a01b031614602a61458a565b6001600160a01b0383166000908152601c60205260409020546147019060ff16602b61458a565b6001600160a01b0383166000908152601f60205260409020546147299060ff1615602c61458a565b6137fc565b6001600160a01b0383166000908152601c60205260409020546147559060ff16602d61458a565b6001600160a01b0383166000908152601f602052604090205461477c9060ff16602e61458a565b6001600160a01b0382166000908152601f60205260409020546147a49060ff1615602f61458a565b6001600160a01b03821660009081526020805260409020546137fc9060ff16603061458a565b6000806147da898989898961432c565b905060006147ec8a8a8a8a898961397c565b90506147f882826144f0565b915060006148068a846132cf565b6001600160a01b038b166000908152602c602052604090205490915061482c90826144f0565b6001600160a01b038b166000818152602c60209081526040918290209390935580519182529181018590528082018390529051600080516020615e888339815191529181900360600190a150909998505050505050505050565b6001600160a01b03811660008181526021602090815260408083205481516370a0823160e01b8152306004820152915193949093859391926370a08231926024808301939192829003018186803b1580156148e057600080fd5b505afa1580156148f4573d6000803e3d6000fd5b505050506040513d602081101561490a57600080fd5b50516001600160a01b03851660009081526021602052604090208190559050611adb8183614548565b81614949576149448115602761458a565b613960565b61396081831015602861458a565b6001600160a01b03821660009081526026602052604090205461497a90826144f0565b6001600160a01b0383166000908152602660208181526040808420859055602582529092205491526149af911115603461458a565b604080516001600160a01b03841681526020810183905281517faa5649d82f5462be9d19b0f2b31a59b2259950a6076550bac9f3a1c07db9f66d929181900390910190a15050565b6001600160a01b038216600090815260286020526040902054614a1a90826144f0565b6001600160a01b03831660008181526028602090815260409182902093909355805191825291810183905281517fd9d4761f75e0d0103b5cbeab941eeb443d7a56a35b5baf2a0787c03f03f4e474929181900390910190a15050565b6001600160a01b038216600090815260286020526040902054614a999082614548565b6001600160a01b03831660008181526028602090815260409182902093909355805191825291810183905281517f34e07158b9db50df5613e591c44ea2ebc82834eff4a4dc3a46e000e608261d68929181900390910190a15050565b6001600160a01b038216600090815260256020526040902054614b1890826144f0565b6001600160a01b03831660008181526025602090815260408083209490945583516370a0823160e01b8152306004820152935191936370a082319260248083019392829003018186803b158015614b6e57600080fd5b505afa158015614b82573d6000803e3d6000fd5b505050506040513d6020811015614b9857600080fd5b50516001600160a01b038416600090815260256020526040902054909150614bc490821015603161458a565b604080516001600160a01b03851681526020810184905281517f976177fbe09a15e5e43f848844963a42b41ef919ef17ff21a17a5421de8f4737929181900390910190a1505050565b604080518082018252601a81527915985d5b1d0e881c1bdbdb105b5bdd5b9d08195e18d95959195960321b6020808301919091526001600160a01b038516600090815260259091529190912054614c65918390615860565b6001600160a01b03831660009081526025602090815260408083208490556026909152902054614c98911015603261458a565b604080516001600160a01b03841681526020810183905281517f112726233fbeaeed0f5b1dba5cb0b2b81883dee49fb35ff99fd98ed9f6d31eb0929181900390910190a15050565b6001600160a01b0382166000908152602d6020526040902054614d0390826144f0565b6001600160a01b0383166000908152602d6020908152604080832093909355602f9052205480156137fc576001600160a01b0383166000908152602d60205260409020548110156137fc576040805162461bcd60e51b815260206004820152601a60248201527915985d5b1d0e881b585e081cda1bdc9d1cc8195e18d95959195960321b604482015290519081900360640190fd5b60165462010000900460ff16156144ee57336000908152601a60205260409020546144ee9060ff16603661458a565b6001600160a01b038216600090815260236020526040902054818111614e30576001600160a01b038316600081815260236020908152604080832092909255815192835282018390528051600080516020615e3e8339815191529281900390910190a150613960565b614e3a8183614548565b6001600160a01b0384166000818152602360209081526040918290209390935580519182529181018490528151600080516020615e3e833981519152929181900390910190a1505050565b6000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015614ed457600080fd5b505afa158015614ee8573d6000803e3d6000fd5b505050506040513d6020811015614efe57600080fd5b50516001600160a01b0390921660009081526021602052604090209190915550565b600080614f3d61271061178e614f368287614548565b879061443d565b90506000614f4b8583614548565b6001600160a01b0387166000908152602c6020526040902054909150614f7190826144f0565b6001600160a01b0387166000908152602c60205260409020557f47cd9dda0e50ce30bcaaacd0488452b596221c07ac402a581cfae4d3933cac2b86614fb681846117b4565b604080516001600160a01b0390931683526020830191909152818101849052519081900360600190a150949350505050565b614ffc6001600160a01b038416828461564f565b604080516370a0823160e01b815230600482015290516001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561504257600080fd5b505afa158015615056573d6000803e3d6000fd5b505050506040513d602081101561506c57600080fd5b50516001600160a01b039093166000908152602160205260409020929092555050565b6001600160a01b0382166000908152602360205260409020546150b290826144f0565b6001600160a01b0383166000908152602360209081526040808320939093556024905220548015615104576001600160a01b03831660009081526023602052604090205461510490821015603361458a565b604080516001600160a01b03851681526020810184905281517f64243679a443432e2293343b77d411ff6144370404618f00ca0d2025d9ca9882929181900390910190a1505050565b600154604080516381d11a2360e01b81526001600160a01b038a8116600483015289811660248301528881166044830152606482018890526084820187905285151560a483015284811660c4830152915160009363010000009004909216916381d11a239160e4808201928692909190829003018186803b1580156151d157600080fd5b505afa1580156151e5573d6000803e3d6000fd5b505050506151f3878761414d565b60006152018989898761198e565b6000818152602b60205260409020805491925090615222901515601f61458a565b6152348682600001541015602061458a565b6152468782600101541015602161458a565b6001810154815460048301546000916152639161178e908b61443d565b60048401549091506152759082614548565b60048401556152848b826156a1565b506000806152968d8d8d8d8d8d6158ba565b855491935091508914615416576152ae8c8c8a6135d9565b600385015583546152bf908a614548565b80855560018501546152d19190614933565b6152df8d8d8d8b6001613854565b5050871561530c576153028c61211686600101548661454890919063ffffffff16565b61530c8c8a614a76565b6000886153215761531c8c613ebc565b61532a565b61532a8c612db8565b9050600080516020615dfd833981519152868f8f8f8f8f8f8861534d8c8c614548565b60408051998a526001600160a01b0398891660208b015296881689880152949096166060880152608087019290925260a0860152151560c085015260e084019290925261010083019190915251908190036101200190a18454600186015460028701546003880154600489015460058a0154604080518d81526020810197909752868101959095526060860193909352608085019190915260a084015260c083015260e0820183905251600080516020615ddd833981519152918190036101000190a150615578565b8715615430576154268c846149f7565b6154308c8a614a76565b600088615445576154408c613ebc565b61544e565b61544e8c612db8565b9050600080516020615dfd833981519152868f8f8f8f8f8f886154718c8c614548565b60408051998a526001600160a01b0398891660208b015296881689880152949096166060880152608087019290925260a0860152151560c085015260e084019290925261010083019190915251908190036101200190a18454600186015460028701546003880154600489015460058a0154604080518d81526020810197909752868101959095526060860193909352608085019190915260a084015260c0830152517f73af1d417d82c240fdb6d319b34ad884487c6bf2845d98980cc52ad9171cb4559181900360e00190a1506000858152602b602052604081208181556001810182905560028101829055600381018290556004810182905560058101829055600601555b87615587576155878b8a615756565b81156155c75787156155a1576155a18c61213d8e856132cf565b60006155ad8d836132cf565b90506155ba8d828a614fe8565b95506124a4945050505050565b5060009c9b505050505050505050505050565b6001600160a01b03811660009081526027602090815260408083205460259092529091205410156146b2576040805162461bcd60e51b815260206004820152601a6024820152792b30bab63a1d103837b7b620b6b7bab73a101e10313ab33332b960311b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526137fc908490615ab4565b604080518082018252601b81527a5661756c743a20696e73756666696369656e74207265736572766560281b6020808301919091526001600160a01b0385166000908152602690915291909120546156fa918390615860565b6001600160a01b03831660008181526026602090815260409182902093909355805191825291810183905281517f533cb5ed32be6a90284e96b5747a1bfc2d38fdb5768a6b5f67ff7d62144ed67b929181900390910190a15050565b6001600160a01b0382166000908152602d60205260409020548082111561579657506001600160a01b0382166000908152602d6020526040812055613960565b6157a08183614548565b6001600160a01b0384166000908152602d6020526040902055505050565b6000818361584a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561580f5781810151838201526020016157f7565b50505050905090810190601f16801561583c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161585657fe5b0495945050505050565b600081848411156158b25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561580f5781810151838201526020016157f7565b505050900390565b60008060006158cb8989898761198e565b6000818152602b602052604081208054600382015493945090926158f8918d918d918d918b918d916147ca565b90506000806000806159198d876000015488600201548d8a600601546124e8565b875491955085935091506159319061178e8d8461443d565b9250505060008280156159445750600082115b1561597457506005840180548201905580886159745760006159668e846132cf565b90506159728e82614c0d565b505b821580156159825750600082115b156159c65760018501546159969083614548565b6001860155886159ba5760006159ac8e846132cf565b90506159b88e82614af5565b505b60058501805483900390555b8a156159ee576159d6818c6144f0565b60018601549091506159e8908c614548565b60018601555b84548a1415615a11576001850154615a079082906144f0565b6000600187015590505b8084811115615a2b57615a248286614548565b9050615a5f565b6001860154615a3a9086614548565b60018701558915615a5f576000615a518f876132cf565b9050615a5d8f82614c0d565b505b60408051888152851515602082015280820185905290517f3ff41bdde87755b687ae83d0221a232b6be51a803330ed9661c1b5d0105e0d8a9181900360600190a1909e909d509b505050505050505050505050565b6060615b09826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316615b659092919063ffffffff16565b8051909150156137fc57808060200190516020811015615b2857600080fd5b50516137fc5760405162461bcd60e51b815260040180806020018281038252602a815260200180615e5e602a913960400191505060405180910390fd5b6060611adb848460008585615b7985615c80565b615bca576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310615c095780518252601f199092019160209182019101615bea565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114615c6b576040519150601f19603f3d011682016040523d82523d6000602084013e615c70565b606091505b50915091506124a4828286615c86565b3b151590565b60608315615c95575081611d8f565b825115615ca55782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561580f5781810151838201526020016157f7565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10615d2d5782800160ff19823516178555615d5a565b82800160010185558215615d5a579182015b82811115615d5a578235825591602001919060010190615d3f565b50615d66929150615da7565b5090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115615d665760008155600101615da856fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c0020853733b590dce729d9f4628682ebd9a34d2354e72679e66f43a008fc03b77393d75d64d1f84fc6f430a64fc578bdd4c1e090e90ea2d51773e626d19de56d30536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77e1e812596aac93a06ecc4ca627014d18e30f5c33b825160cc9d5c0ba61e452275361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645d0c0019d3d45fadeb74eff9d2c9924d146d000ac6bcf3c28bf0ac3c9baa011aa26469706673582212205ca00c46f96bc194355f5fdbd2c0097ebd1ced758375298c9787c9b64ee2941264736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106105695760003560e01c806304fef1db1461056e57806307c58752146105a65780630842b076146105ae5780630a48d5a9146105b657806310eb56c2146105e2578063126082cf146105ea57806312d43a51146105f2578063134ca63b14610616578063174d26941461061e578063181e210e146106265780631aa4ace5146106425780631ce9cb8f1461066857806324b0c04d1461068e57806324ca984e146106af57806328e67be5146106d557806329ff96151461074a5780632c668ec1146107705780632d4b05761461079c57806330455ede146107da578063318bc689146107f957806334c1557d146105ea578063351a964d14610801578063392e53cd146108095780633a05dcc1146108115780633c5a6e35146108375780633de39c11146108855780633e72a2621461088d57806340eb38021461089557806342152873146108e657806342b60b031461091a5780634453a3741461094057806345a6f3701461096e57806348d91abf146109c757806348f35cbb14610a0b5780634a3f088d14610a135780634a993ee914610a945780634befe2ca14610aba5780634d47b30414610ac2578063514ea4bf14610aca57806351723e8214610b1f578063523fba7f14610b5d578063529a356f14610b8357806352f55eed14610ba95780635c07eaab14610bcf5780635f7bc11914610c0f5780636092219914610c3557806362287a3214610c635780636274980314610c6b5780636abbe0c814610c915780636ae0b15414610c995780636be6026b14610cbf57806371089f4d14610cc7578063711e619014610ced578063724e78da14610d1b578063728cdbca14610d41578063741bef1a14610d895780637a210a2b14610d915780637c2eb9f714610d99578063817bb85714610db857806381a612d614610de657806382a0849014610e0c5780638585f4d214610e60578063870d917c14610e8c57806388b1fbdf14610e945780638a27d46814610eba5780638a39735a146105ea5780638a78daa814610ee35780638ee573ac14610f095780638f7b840414610f2f5780639060b1ca14610f555780639331621214610f5d57806395082d2514610f955780639698d25a14610f9d5780639849e41214610fc35780639899cd0214610fcb5780639d7432ca14610ff75780639f392eb314611029578063a22f239214611031578063a42ab3d214611039578063a5e90eee14611065578063a93acac214611093578063ab08c1c6146110b9578063ab2f3ad4146110c1578063ad1e4f8d146110e7578063ae3302c21461110d578063b06423f314611115578063b136ca491461111d578063b1cc53ab14611143578063b364accb1461117b578063c3c7b9e9146111a1578063c4f718bf146111c7578063c65bc7b1146111cf578063c7e074c3146111f5578063cea0c32814611235578063cfad57a21461126b578063d2fa635e14611291578063d3127e63146112ae578063d54d5a9f146112cb578063d66b000d1461132a578063d8f897c314611356578063d9ac42251461137c578063da76524c14611384578063daf9c210146113ce578063db3555fb146113f4578063db97495f1461141a578063dc8f5fac14611466578063de2ea9481461146e578063df73a267146114b6578063e124e6d2146114be578063e468baf0146114e4578063e67f59a714611501578063efa10a6e14611527578063f07456ce14611553578063f07bbf7714611579578063f255527814611598578063f3ae2415146115c6578063f5b91b7b146115ec578063f887ea40146115f4578063fa12dbc0146115fc578063fbfded6d1461162e578063fce28c101461165c578063fdaf6ac314611664578063fed1a606146116a8575b600080fd5b6105946004803603602081101561058457600080fd5b50356001600160a01b031661173a565b60408051918252519081900360200190f35b61059461179d565b6105946117ae565b610594600480360360408110156105cc57600080fd5b506001600160a01b0381351690602001356117b4565b610594611807565b61059461180d565b6105fa611813565b604080516001600160a01b039092168252519081900360200190f35b610594611822565b610594611828565b61062e61182e565b604080519115158252519081900360200190f35b6105946004803603602081101561065857600080fd5b50356001600160a01b031661183e565b6105946004803603602081101561067e57600080fd5b50356001600160a01b0316611850565b6106ad600480360360208110156106a457600080fd5b50351515611862565b005b6106ad600480360360208110156106c557600080fd5b50356001600160a01b0316611886565b6106ad600480360360408110156106eb57600080fd5b81359190810190604081016020820135600160201b81111561070c57600080fd5b82018360208201111561071e57600080fd5b803590602001918460018302840111600160201b8311171561073f57600080fd5b5090925090506118b7565b6105946004803603602081101561076057600080fd5b50356001600160a01b0316611935565b6105946004803603604081101561078657600080fd5b506001600160a01b038135169060200135611949565b610594600480360360808110156107b257600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135151561198e565b6106ad600480360360208110156107f057600080fd5b503515156119e4565b610594611a06565b61062e611a0c565b61062e611a1a565b6105946004803603602081101561082757600080fd5b50356001600160a01b0316611a23565b6106ad600480360360e081101561084d57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a081013515159060c001351515611ae3565b610594611c25565b61062e611c2b565b6106ad60048036036101208110156108ac57600080fd5b5080359060208101359060408101359060608101359060808101359060a08101359060c08101359060e08101359061010001351515611c3a565b610594600480360360608110156108fc57600080fd5b508035906001600160a01b0360208201358116916040013516611cf4565b61062e6004803603602081101561093057600080fd5b50356001600160a01b0316611d96565b6106ad6004803603604081101561095657600080fd5b506001600160a01b0381351690602001351515611dab565b6109ac6004803603608081101561098457600080fd5b506001600160a01b038135811691602081013582169160408201351690606001351515611dde565b60408051921515835260208301919091528051918290030190f35b6106ad600480360360a08110156109dd57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013590608001351515611e7c565b6105fa6122a9565b610a5160048036036080811015610a2957600080fd5b506001600160a01b0381358116916020810135821691604082013516906060013515156122b8565b604080519889526020890197909752878701959095526060870193909352608086019190915260a0850152151560c084015260e083015251908190036101000190f35b61059460048036036020811015610aaa57600080fd5b50356001600160a01b03166123ae565b6105946123c0565b6105946123c6565b610ae760048036036020811015610ae057600080fd5b50356123cc565b604080519788526020880196909652868601949094526060860192909252608085015260a084015260c0830152519081900360e00190f35b61059460048036036080811015610b3557600080fd5b506001600160a01b038135811691602081013582169160408201351690606001351515612409565b61059460048036036020811015610b7357600080fd5b50356001600160a01b03166124af565b61062e60048036036020811015610b9957600080fd5b50356001600160a01b03166124c1565b61059460048036036020811015610bbf57600080fd5b50356001600160a01b03166124d6565b6109ac600480360360a0811015610be557600080fd5b506001600160a01b03813516906020810135906040810135906060810135151590608001356124e8565b6106ad60048036036020811015610c2557600080fd5b50356001600160a01b03166125e0565b61062e60048036036040811015610c4b57600080fd5b506001600160a01b03813581169160200135166126c3565b6105946126e3565b61059460048036036020811015610c8157600080fd5b50356001600160a01b03166126e9565b6105fa6126fb565b6106ad60048036036020811015610caf57600080fd5b50356001600160a01b0316612711565b61059461273f565b6106ad60048036036020811015610cdd57600080fd5b50356001600160a01b0316612746565b61059460048036036040811015610d0357600080fd5b506001600160a01b038135811691602001351661277a565b6106ad60048036036020811015610d3157600080fd5b50356001600160a01b0316612a0e565b6106ad600480360360c0811015610d5757600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101359060808101359060a00135612a38565b6105fa612aaf565b610594612abe565b6106ad60048036036020811015610daf57600080fd5b50351515612ac4565b61059460048036036040811015610dce57600080fd5b506001600160a01b0381358116916020013516612ae8565b61059460048036036020811015610dfc57600080fd5b50356001600160a01b0316612db8565b610594600480360360e0811015610e2257600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160808201359160a081013515159160c09091013516612e63565b6106ad60048036036040811015610e7657600080fd5b506001600160a01b038135169060200135612ee1565b610594612f05565b61059460048036036020811015610eaa57600080fd5b50356001600160a01b0316612f0a565b6106ad60048036036060811015610ed057600080fd5b5080359060208101359060400135612f1c565b61059460048036036020811015610ef957600080fd5b50356001600160a01b0316612f62565b61059460048036036020811015610f1f57600080fd5b50356001600160a01b0316612f74565b6106ad60048036036020811015610f4557600080fd5b50356001600160a01b0316612f86565b61062e612fb0565b61059460048036036060811015610f7357600080fd5b506001600160a01b038135811691602081013582169160409091013516612fbf565b6105946132a7565b61059460048036036020811015610fb357600080fd5b50356001600160a01b03166132b7565b6105946132c9565b61059460048036036040811015610fe157600080fd5b506001600160a01b0381351690602001356132cf565b6105946004803603606081101561100d57600080fd5b506001600160a01b0381351690602081013590604001356132f1565b61062e61339a565b6105946133a3565b6105946004803603604081101561104f57600080fd5b506001600160a01b0381351690602001356133a9565b6106ad6004803603604081101561107b57600080fd5b506001600160a01b03813516906020013515156133c6565b610594600480360360208110156110a957600080fd5b50356001600160a01b03166133f9565b61062e6134f7565b610594600480360360208110156110d757600080fd5b50356001600160a01b0316613500565b610594600480360360208110156110fd57600080fd5b50356001600160a01b0316613512565b610594613524565b61062e61352a565b6105946004803603602081101561113357600080fd5b50356001600160a01b0316613538565b6105946004803603606081101561115957600080fd5b506001600160a01b0381358116916020810135909116906040013515156135d9565b6109ac6004803603602081101561119157600080fd5b50356001600160a01b0316613674565b610594600480360360208110156111b757600080fd5b50356001600160a01b031661370c565b61059461371e565b610594600480360360208110156111e557600080fd5b50356001600160a01b0316613724565b610594600480360360a081101561120b57600080fd5b506001600160a01b0381351690602081013590604081013590606081013590608001351515613736565b6106ad6004803603606081101561124b57600080fd5b506001600160a01b038135811691602081013590911690604001356137e0565b6106ad6004803603602081101561128157600080fd5b50356001600160a01b0316613801565b6106ad600480360360208110156112a757600080fd5b503561382b565b6106ad600480360360208110156112c457600080fd5b5035613838565b611311600480360360a08110156112e157600080fd5b506001600160a01b0381358116916020810135821691604082013516906060810135151590608001351515613854565b6040805192835260208301919091528051918290030190f35b6106ad6004803603604081101561134057600080fd5b506001600160a01b03813516906020013561390b565b6105946004803603602081101561136c57600080fd5b50356001600160a01b0316613964565b610594613976565b610594600480360360c081101561139a57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013515159060808101359060a0013561397c565b61062e600480360360208110156113e457600080fd5b50356001600160a01b0316613a30565b61062e6004803603602081101561140a57600080fd5b50356001600160a01b0316613a45565b610594600480360360e081101561143057600080fd5b506001600160a01b0381351690602081013590604081013590606081013515159060808101359060a08101359060c00135613a59565b610594613aea565b6106ad600480360360a081101561148457600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013515159160809091013516613af0565b610594613eb6565b610594600480360360208110156114d457600080fd5b50356001600160a01b0316613ebc565b6105fa600480360360208110156114fa57600080fd5b5035613f34565b6106ad6004803603602081101561151757600080fd5b50356001600160a01b0316613f5b565b6106ad6004803603604081101561153d57600080fd5b506001600160a01b03813516906020013561402e565b6105946004803603602081101561156957600080fd5b50356001600160a01b0316614052565b6106ad6004803603602081101561158f57600080fd5b50351515614064565b610594600480360360408110156115ae57600080fd5b506001600160a01b038135811691602001351661408a565b61062e600480360360208110156115dc57600080fd5b50356001600160a01b03166140e0565b6105fa6140f5565b6105fa614104565b6105946004803603606081101561161257600080fd5b506001600160a01b038135169060208101359060400135614113565b6106ad6004803603604081101561164457600080fd5b506001600160a01b038135811691602001351661414d565b610594614326565b610594600480360360a081101561167a57600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101351515906080013561432c565b6116c5600480360360208110156116be57600080fd5b50356143a2565b6040805160208082528351818301528351919283929083019185019080838360005b838110156116ff5781810151838201526020016116e7565b50505050905090810190601f16801561172c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6001600160a01b03811660009081526025602052604081205480611762576000915050611798565b6001600160a01b03831660009081526026602052604090205461179490829061178e90620f424061443d565b90614496565b9150505b919050565b6904ee2d6d415b85acef8160201b81565b601b5490565b6000816117c357506000611801565b60006117ce84612db8565b6001600160a01b0385166000908152601d60205260409020549091506117fc600a82900a61178e868561443d565b925050505b92915050565b600b5481565b61271081565b6006546001600160a01b031681565b60145481565b60095481565b6016546301000000900460ff1681565b60236020526000908152604090205481565b602c6020526000908152604090205481565b61186a6144d5565b60168054911515620100000262ff000019909216919091179055565b3360009081526018602090815260408083206001600160a01b0394909416835292905220805460ff19166001179055565b6002546001600160a01b03163314611916576040805162461bcd60e51b815260206004820152601e60248201527f5661756c743a20696e76616c6964206572726f72436f6e74726f6c6c65720000604482015290519081900360640190fd5b600083815260306020526040902061192f908383615cec565b50505050565b60006118018261194484613538565b6117b4565b60008061195584613ebc565b905060006119738261178e8668327cb2734119d3b7a9601e1b61443d565b6005549091506117fc9082906001600160a01b031687611cf4565b604080516001600160601b0319606096871b811660208084019190915295871b811660348301529390951b9092166048850152151560f81b605c8401528051603d818503018152605d9093019052815191012090565b6119ec6144d5565b600180549115156101000261ff0019909216919091179055565b600f5481565b600154610100900460ff1681565b60015460ff1681565b600080600560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611a7457600080fd5b505afa158015611a88573d6000803e3d6000fd5b505050506040513d6020811015611a9e57600080fd5b5051905080611ab1576000915050611798565b6001600160a01b038316600090815260226020526040902054601554611adb9061178e838561443d565b949350505050565b611aeb6144d5565b6001600160a01b0387166000908152601c602052604090205460ff16611b6857600754611b199060016144f0565b600755601b80546001810182556000919091527f3ad8aa4f87544323a9d1e5dd902f40c356527a7955687113db5f9a85ad579dc10180546001600160a01b0319166001600160a01b0389161790555b6015546001600160a01b038816600090815260226020526040902054611b8f908290614548565b6001600160a01b0389166000908152601c602090815260408083208054600160ff1991821617909155601d83528184208c9055602283528184208b9055601e83528184208a905560248352818420899055601f83528184208054821689151517905591805290912080549091168415151790559050611c0e81876144f0565b601555611c1a88613ebc565b505050505050505050565b60175481565b60015462010000900460ff1681565b611c426144d5565b611c526101f48a1115600361458a565b611c626101f4891115600461458a565b611c726101f4881115600561458a565b611c826101f4871115600661458a565b611c926101f4861115600761458a565b611ca26101f4851115600861458a565b611cbd6904ee2d6d415b85acef8160201b841115600961458a565b600a98909855600b96909655600c94909455600d92909255600e55600f556009556010556011805460ff1916911515919091179055565b60055460009081906001600160a01b03858116911614611d2c576001600160a01b0384166000908152601d6020526040902054611d2f565b60125b6005549091506000906001600160a01b03858116911614611d68576001600160a01b0384166000908152601d6020526040902054611d6b565b60125b9050611d8a82600a0a61178e83600a0a8961443d90919063ffffffff16565b925050505b9392505050565b601f6020526000908152604090205460ff1681565b611db36144d5565b6001600160a01b03919091166000908152601960205260409020805460ff1916911515919091179055565b6000806000611def8787878761198e565b9050611df9615d6a565b506000818152602b6020908152604091829020825160e081018452815480825260018301549382019390935260028201549381018490526003820154606082015260048201546080820152600582015460a082015260069091015460c082018190529092611e6d92899290919089906124e8565b93509350505094509492505050565b60026000541415611ec2576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b6002600055600154611ede9062010000900460ff16601c61458a565b611ee6614636565b611eef85614652565b611efa8484836146b5565b60015460408051634eae147d60e11b81526001600160a01b038881166004830152878116602483015286811660448301526064820186905284151560848301529151630100000090930490911691639d5c28fa9160a480820192600092909190829003018186803b158015611f6e57600080fd5b505afa158015611f82573d6000803e3d6000fd5b50505050611f90848461414d565b6000611f9e8686868561198e565b6000818152602b6020526040812091925083611fc257611fbd86612db8565b611fcb565b611fcb86613ebc565b8254909150611fdc57600282018190555b815415801590611fec5750600085115b156120125761200c868360000154846002015487858a8860060154613a59565b60028301555b600061202b898989888a886000015489600301546147ca565b9050600061203889614886565b905060006120468a836117b4565b600186015490915061205890826144f0565b6001860181905561206d90841115601d61458a565b600185015461207c9084614548565b600186015561208c8a8a896135d9565b6003860155845461209d90896144f0565b8086554260068701556120b3901515601e61458a565b6120c585600001548660010154614933565b6120d38b8b8b8a6001613854565b505060006120e18b8a6133a9565b60048701549091506120f390826144f0565b60048701556121028b82614957565b87156121475761211b8b6121168b876144f0565b6149f7565b6121258b83614a76565b61212f8b84614af5565b6121428b61213d8d876132cf565b614c0d565b6121b3565b6001600160a01b038a166000908152602d6020526040902054612184576001600160a01b038a166000908152602e602052604090208590556121a9565b61218f8a868b6132f1565b6001600160a01b038b166000908152602e60205260409020555b6121b38a8a614ce0565b604080518881526001600160a01b03808f166020830152808e16828401528c1660608201526080810184905260a081018b905289151560c082015260e08101879052610100810186905290517f2fe68525253654c21998f35787a8d0f361905ef647c854092430ab65f2f15022918190036101200190a1855460018701546002880154600389015460048a015460058b0154604080518e81526020810197909752868101959095526060860193909352608085019190915260a084015260c083015260e0820187905251600080516020615ddd833981519152918190036101000190a15050600160005550505050505050505050565b6002546001600160a01b031681565b60008060008060008060008060006122d28d8d8d8d61198e565b90506122dc615d6a565b602b60008381526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152505090506000808260a001511361235c578160a00151600003612362565b8160a001515b9050816000015182602001518360400151846060015185608001518560008860a0015112158860c001519a509a509a509a509a509a509a509a5050505094995094995094999196509450565b60276020526000908152604090205481565b6101f481565b600c5481565b602b602052600090815260409020805460018201546002830154600384015460048501546005860154600690960154949593949293919290919087565b6000806124188686868661198e565b9050612422615d6a565b506000818152602b6020908152604091829020825160e0810184528154815260018201549281018390526002820154938101939093526003810154606084015260048101546080840152600581015460a08401526006015460c083015261248c901515602561458a565b602081015181516124a4919061178e9061271061443d565b979650505050505050565b60216020526000908152604090205481565b60196020526000908152604090205460ff1681565b60256020526000908152604090205481565b6000806124f960008611602661458a565b60008461250e5761250988613ebc565b612517565b61251788612db8565b905060008187116125315761252c8288614548565b61253b565b61253b8783614548565b9050600061254d8861178e8b8561443d565b9050600087156125605750878311612565565b508288115b600061257c601054896144f090919063ffffffff16565b42116125a0576001600160a01b038c166000908152601e60205260409020546125a3565b60005b90508180156125c657506125b78b8261443d565b6125c38461271061443d565b11155b156125d057600092505b509a909950975050505050505050565b60026000541415612626576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b600260009081556001600160a01b0382168152601c60205260409020546126519060ff16600e61458a565b600061265c82614886565b905061266c60008211600f61458a565b6126768282614af5565b604080516001600160a01b03841681526020810183905281517fa5a389190ebf6170a133bda5c769b77f4d6715b8aa172ec0ddf8473d0b4944bd929181900390910190a150506001600055565b601860209081526000928352604080842090915290825290205460ff1681565b60075481565b602e6020526000908152604090205481565b600154630100000090046001600160a01b031681565b3360009081526018602090815260408083206001600160a01b0394909416835292905220805460ff19169055565b620f424081565b61274e6144d5565b600180546001600160a01b039092166301000000026301000000600160b81b0319909216919091179055565b6000600260005414156127c2576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b60026000556127cf614d98565b6001600160a01b0383166000908152601c60205260409020546127f69060ff16601361458a565b6016805461ff00191661010017905560055460009061281d906001600160a01b0316614886565b905061282d60008211601461458a565b612837848561414d565b60006128438583611949565b905061285360008211601561458a565b61285d8583614dc7565b6128678582614c0d565b60055460408051632770a7eb60e21b81523060048201526024810185905290516001600160a01b0390921691639dc29fac9160448082019260009290919082900301818387803b1580156128ba57600080fd5b505af11580156128ce573d6000803e3d6000fd5b50506005546128e892506001600160a01b03169050614e85565b6001546040805163eb0835bf60e01b81526001600160a01b038881166004830152602482018690529151600093630100000090049092169163eb0835bf91604480820192602092909190829003018186803b15801561294657600080fd5b505afa15801561295a573d6000803e3d6000fd5b505050506040513d602081101561297057600080fd5b505190506000612981878484614f20565b905061299160008211601661458a565b61299c878288614fe8565b604080516001600160a01b03808916825289166020820152808201869052606081018390526080810184905290517fd732b7828fa6cee72c285eac756fc66a7477e3dc22e22e7c432f1c265d40b4839181900360a00190a16016805461ff001916905560016000559695505050505050565b612a166144d5565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b612a406144d5565b60018054612a549160ff909116159061458a565b6001805460ff191681179055600380546001600160a01b03199081166001600160a01b039889161790915560058054821696881696909617909555600480549095169390951692909217909255600991909155601355601455565b6004546001600160a01b031681565b600a5481565b612acc6144d5565b60018054911515620100000262ff000019909216919091179055565b600060026000541415612b30576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b6002600055612b3d614d98565b6001600160a01b0383166000908152601c6020526040902054612b649060ff16601061458a565b6016805461ff0019166101001790556000612b7e84614886565b9050612b8e60008211601161458a565b612b98848561414d565b6000612ba385612db8565b90506000612bc168327cb2734119d3b7a9601e1b61178e858561443d565b600554909150612bdd90829088906001600160a01b0316611cf4565b9050612bed60008211601261458a565b6001546040805163256f6ee360e11b81526001600160a01b0389811660048301526024820185905291516000936301000000900490921691634adeddc691604480820192602092909190829003018186803b158015612c4b57600080fd5b505afa158015612c5f573d6000803e3d6000fd5b505050506040513d6020811015612c7557600080fd5b505190506000612c86888684614f20565b90506000612ca468327cb2734119d3b7a9601e1b61178e848861443d565b600554909150612cc09082908b906001600160a01b0316611cf4565b9050612ccc898261508f565b612cd68983614af5565b600554604080516340c10f1960e01b81526001600160a01b038b8116600483015260248201859052915191909216916340c10f1991604480830192600092919082900301818387803b158015612d2b57600080fd5b505af1158015612d3f573d6000803e3d6000fd5b5050604080516001600160a01b03808d1682528d1660208201528082018a9052606081018590526080810187905290517fab4c77c74cd32c85f35416cf03e7ce9e2d4387f7b7f2c1f4bf53daaecf8ea72d93509081900360a0019150a16016805461ff0019169055600160005598975050505050505050565b60048054601654604080516317e1d38560e11b81526001600160a01b038681169582019590955260006024820181905260ff80851615156044840152610100909404909316151560648201529051919390921691632fc3a70a916084808301926020929190829003018186803b158015612e3157600080fd5b505afa158015612e45573d6000803e3d6000fd5b505050506040513d6020811015612e5b57600080fd5b505192915050565b600060026000541415612eab576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b6002600055612eb8614636565b612ec188614652565b612ed08888888888888861514d565b600160005598975050505050505050565b612ee96144d5565b6001600160a01b03909116600090815260276020526040902055565b601281565b601e6020526000908152604090205481565b612f246144d5565b612f34610e10841015600a61458a565b612f44612710831115600b61458a565b612f54612710821115600c61458a565b601292909255601355601455565b602d6020526000908152604090205481565b601d6020526000908152604090205481565b612f8e6144d5565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60165462010000900460ff1681565b600060026000541415613007576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b600260005560015461302290610100900460ff16601761458a565b6001600160a01b0384166000908152601c60205260409020546130499060ff16601861458a565b6001600160a01b0383166000908152601c60205260409020546130709060ff16601961458a565b613090836001600160a01b0316856001600160a01b03161415601a61458a565b6016805461ff0019166101001790556130a9848061414d565b6130b3838461414d565b60006130be85614886565b90506130ce60008211601b61458a565b60006130d986612db8565b905060006130e686613ebc565b905060006130f88261178e868661443d565b9050613105818989611cf4565b9050600061312368327cb2734119d3b7a9601e1b61178e878761443d565b60055490915061313f9082908b906001600160a01b0316611cf4565b60015460408051636d099c0b60e11b81526001600160a01b038d811660048301528c8116602483015260448201859052915193945060009363010000009093049091169163da13381691606480820192602092909190829003018186803b1580156131a957600080fd5b505afa1580156131bd573d6000803e3d6000fd5b505050506040513d60208110156131d357600080fd5b5051905060006131e48a8584614f20565b90506131f08b8461508f565b6131fa8a84614dc7565b6132048b88614af5565b61320e8a85614c0d565b6132178a6155da565b6132228a828b614fe8565b604080516001600160a01b03808c168252808e1660208301528c1681830152606081018990526080810186905260a0810183905260c0810184905290517f0874b2d545cb271cdbda4e093020c452328b24af12382ed62c4d00f5c26709db9181900360e00190a16016805461ff001916905560016000559a9950505050505050505050565b68327cb2734119d3b7a9601e1b81565b602f6020526000908152604090205481565b60125481565b6000816132de57506000611801565b611d8f83836132ec86613ebc565b614113565b6001600160a01b0383166000908152602d6020908152604080832054602e9092528220548285821161332c576133278683614548565b613336565b6133368287614548565b905060006133488361178e868561443d565b9050868311600061335986896144f0565b90506000826133715761336c82856144f0565b61337b565b61337b8285614548565b905061338b8161178e8c8561443d565b9b9a5050505050505050505050565b60115460ff1681565b600d5481565b6000816133b857506000611801565b611d8f83836132ec86612db8565b6133ce6144d5565b6001600160a01b03919091166000908152601a60205260409020805460ff1916911515919091179055565b6012546001600160a01b0382166000908152602a602052604081205490914291613422916144f0565b111561343057506000611798565b6012546001600160a01b0383166000908152602a6020526040812054909161345d9161178e904290614548565b6001600160a01b0384166000908152602560205260409020549091508061348957600092505050611798565b6001600160a01b0384166000908152601f602052604081205460ff166134b1576013546134b5565b6014545b6001600160a01b0386166000908152602660205260409020549091506134ee90839061178e9086906134e890869061443d565b9061443d565b95945050505050565b60165460ff1681565b60226020526000908152604090205481565b60246020526000908152604090205481565b60085481565b601654610100900460ff1681565b6001600160a01b0381166000908152601f602052604081205460ff161561357857506001600160a01b038116600090815260256020526040902054611798565b6001600160a01b03821660009081526028602052604081205461359c9084906132cf565b6001600160a01b038416600090815260266020908152604080832054602590925290912054919250611794916135d39084906144f0565b90614548565b6001546040805163b1cc53ab60e01b81526001600160a01b038681166004830152858116602483015284151560448301529151600093630100000090049092169163b1cc53ab91606480820192602092909190829003018186803b15801561364057600080fd5b505afa158015613654573d6000803e3d6000fd5b505050506040513d602081101561366a57600080fd5b5051949350505050565b6001600160a01b0381166000908152602d60205260408120548190806136a1576000809250925050613707565b60006136ac85613ebc565b6001600160a01b0386166000908152602e60205260408120549192508282116136de576136d98383614548565b6136e8565b6136e88284614548565b905060006136fa8361178e878561443d565b9390921195509193505050505b915091565b60266020526000908152604090205481565b60135481565b60296020526000908152604090205481565b6001546040805163c7e074c360e01b81526001600160a01b03888116600483015260248201889052604482018790526064820186905284151560848301529151600093630100000090049092169163c7e074c39160a480820192602092909190829003018186803b1580156137aa57600080fd5b505afa1580156137be573d6000803e3d6000fd5b505050506040513d60208110156137d457600080fd5b50519695505050505050565b6137e86144d5565b6137fc6001600160a01b038316848361564f565b505050565b6138096144d5565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6138336144d5565b601755565b6138406144d5565b61384f6127108211600261458a565b600855565b6001546040805163d54d5a9f60e01b81526001600160a01b03888116600483015287811660248301528681166044830152851515606483015284151560848301528251600094859463010000009091049092169263d54d5a9f9260a4808301939192829003018186803b1580156138ca57600080fd5b505afa1580156138de573d6000803e3d6000fd5b505050506040513d60408110156138f457600080fd5b508051602090910151909890975095505050505050565b6139136144d5565b6001600160a01b0382166000908152602360205260409020548082111561394d57613947836139428484614548565b61508f565b50613960565b6137fc8361395b8385614548565b614dc7565b5050565b602a6020526000908152604090205481565b60105481565b6001546040805163369d949360e21b81526001600160a01b0389811660048301528881166024830152878116604483015286151560648301526084820186905260a482018590529151600093630100000090049092169163da76524c9160c480820192602092909190829003018186803b1580156139f957600080fd5b505afa158015613a0d573d6000803e3d6000fd5b505050506040513d6020811015613a2357600080fd5b5051979650505050505050565b601c6020526000908152604090205460ff1681565b602080526000908152604090205460ff1681565b6000806000613a6b8a8a8a8a886124e8565b90925090506000613a7c8a876144f0565b905060008815613aab5783613a9a57613a958284614548565b613aa4565b613aa482846144f0565b9050613acc565b83613abf57613aba82846144f0565b613ac9565b613ac98284614548565b90505b613ada8161178e8a8561443d565b9c9b505050505050505050505050565b60155481565b60026000541415613b36576040805162461bcd60e51b815260206004820152601f6024820152600080516020615dbd833981519152604482015290519081900360640190fd5b60026000556016546301000000900460ff1615613b6b5733600090815260196020526040902054613b6b9060ff16602261458a565b6016805460ff19169055613b7f848461414d565b6000613b8d8686868661198e565b9050613b97615d6a565b506000818152602b6020908152604091829020825160e08101845281548082526001830154938201939093526002820154938101939093526003810154606084015260048101546080840152600581015460a08401526006015460c0830152613c03901515602361458a565b600080613c14898989896000613854565b91509150613c278260001415602461458a565b8160021415613c5c57613c44898989600087600001518b8f61514d565b50506016805460ff1916600117905550613eaa915050565b6000613c6889836132cf565b6001600160a01b038a166000908152602c6020526040902054909150613c8e90826144f0565b6001600160a01b038a166000818152602c60209081526040918290209390935580519182529181018490528082018390529051600080516020615e888339815191529181900360600190a1613ce78985608001516156a1565b8615613d165760208401518451613d08918b91613d0391614548565b614a76565b613d168961213d8b856132cf565b600087613d2b57613d2689613ebc565b613d34565b613d3489612db8565b90507f2e1f85a64a2f22cf2f0c42584e7c919ed4abe8d53675cff0f62bf1e95a1c676f868c8c8c8c8a600001518b602001518c608001518d60a001518a604051808b81526020018a6001600160a01b03168152602001896001600160a01b03168152602001886001600160a01b0316815260200187151581526020018681526020018581526020018481526020018381526020018281526020019a505050505050505050505060405180910390a187158015613df35750846020015183105b15613e21576020850151600090613e0a9085614548565b9050613e1f8b613e1a8d846132cf565b614af5565b505b87613e3457613e34898660000151615756565b6000868152602b60205260408120818155600181018290556002810182905560038101829055600481018290556005810182905560060155600954613e80908b9061213d9082906132cf565b613e968a613e908c6009546132cf565b89614fe8565b50506016805460ff19166001179055505050505b50506001600055505050565b600e5481565b60048054601654604080516317e1d38560e11b81526001600160a01b03868116958201959095526001602482015260ff80841615156044830152610100909304909216151560648301525160009390921691632fc3a70a91608480820192602092909190829003018186803b158015612e3157600080fd5b601b8181548110613f4157fe5b6000918252602090912001546001600160a01b0316905081565b613f636144d5565b6001600160a01b0381166000908152601c6020526040902054613f8a9060ff16600d61458a565b6001600160a01b038116600090815260226020526040902054601554613faf91614548565b6015556001600160a01b0381166000908152601c60209081526040808320805460ff19908116909155601d835281842084905560228352818420849055601e835281842084905560248352818420849055601f835281842080548216905591805290912080549091169055600754614028906001614548565b60075550565b6140366144d5565b6001600160a01b039091166000908152602f6020526040902055565b60286020526000908152604090205481565b61406c6144d5565b6016805491151563010000000263ff00000019909216919091179055565b60006140946144d5565b6001600160a01b0383166000908152602c6020526040902054806140bc576000915050611801565b6001600160a01b0384166000908152602c6020526040812055611d8f848285614fe8565b601a6020526000908152604090205460ff1681565b6005546001600160a01b031681565b6003546001600160a01b031681565b60008261412257506000611d8f565b6001600160a01b0384166000908152601d60205260409020546134ee8361178e86600a85900a61443d565b6001546040805163fbfded6d60e01b81526001600160a01b03858116600483015284811660248301529151600093630100000090049092169163fbfded6d9160448082019260209290919082900301818787803b1580156141ad57600080fd5b505af11580156141c1573d6000803e3d6000fd5b505050506040513d60208110156141d757600080fd5b50519050806141e65750613960565b6001600160a01b0383166000908152602a602052604090205461423357601254614214906134e84282614496565b6001600160a01b0384166000908152602a602052604090205550613960565b6012546001600160a01b0384166000908152602a6020526040902054429161425b91906144f0565b11156142675750613960565b6000614272846133f9565b6001600160a01b03851660009081526029602052604090205490915061429890826144f0565b6001600160a01b0385166000908152602960205260409020556012546142c2906134e84282614496565b6001600160a01b0385166000818152602a602090815260408083209490945560298152908390205483519283529082015281517fa146fc154e1913322e9817d49f0d5c37466c24326e15de10e739a948be815eab929181900390910190a150505050565b610e1081565b6001546040805163fdaf6ac360e01b81526001600160a01b038881166004830152878116602483015286811660448301528515156064830152608482018590529151600093630100000090049092169163fdaf6ac39160a480820192602092909190829003018186803b1580156137aa57600080fd5b60306020908152600091825260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156144355780601f1061440a57610100808354040283529160200191614435565b820191906000526020600020905b81548152906001019060200180831161441857829003601f168201915b505050505081565b60008261444c57506000611801565b8282028284828161445957fe5b0414611d8f5760405162461bcd60e51b8152600401808060200182810382526021815260200180615e1d6021913960400191505060405180910390fd5b6000611d8f83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b8152506157be565b6006546144ee906001600160a01b03163314603561458a565b565b600082820183811015611d8f576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6000611d8f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250615860565b6000818152603060205260409020826137fc5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156146275780601f106145fc57610100808354040283529160200191614627565b820191906000526020600020905b81548152906001019060200180831161460a57829003601f168201915b50509250505060405180910390fd5b601754614642576144ee565b6144ee6017543a1115603761458a565b336001600160a01b0382161415614668576146b2565b6003546001600160a01b0316331415614680576146b2565b6001600160a01b03811660009081526018602090815260408083203384529091529020546146b29060ff16602961458a565b50565b801561472e576146da826001600160a01b0316846001600160a01b031614602a61458a565b6001600160a01b0383166000908152601c60205260409020546147019060ff16602b61458a565b6001600160a01b0383166000908152601f60205260409020546147299060ff1615602c61458a565b6137fc565b6001600160a01b0383166000908152601c60205260409020546147559060ff16602d61458a565b6001600160a01b0383166000908152601f602052604090205461477c9060ff16602e61458a565b6001600160a01b0382166000908152601f60205260409020546147a49060ff1615602f61458a565b6001600160a01b03821660009081526020805260409020546137fc9060ff16603061458a565b6000806147da898989898961432c565b905060006147ec8a8a8a8a898961397c565b90506147f882826144f0565b915060006148068a846132cf565b6001600160a01b038b166000908152602c602052604090205490915061482c90826144f0565b6001600160a01b038b166000818152602c60209081526040918290209390935580519182529181018590528082018390529051600080516020615e888339815191529181900360600190a150909998505050505050505050565b6001600160a01b03811660008181526021602090815260408083205481516370a0823160e01b8152306004820152915193949093859391926370a08231926024808301939192829003018186803b1580156148e057600080fd5b505afa1580156148f4573d6000803e3d6000fd5b505050506040513d602081101561490a57600080fd5b50516001600160a01b03851660009081526021602052604090208190559050611adb8183614548565b81614949576149448115602761458a565b613960565b61396081831015602861458a565b6001600160a01b03821660009081526026602052604090205461497a90826144f0565b6001600160a01b0383166000908152602660208181526040808420859055602582529092205491526149af911115603461458a565b604080516001600160a01b03841681526020810183905281517faa5649d82f5462be9d19b0f2b31a59b2259950a6076550bac9f3a1c07db9f66d929181900390910190a15050565b6001600160a01b038216600090815260286020526040902054614a1a90826144f0565b6001600160a01b03831660008181526028602090815260409182902093909355805191825291810183905281517fd9d4761f75e0d0103b5cbeab941eeb443d7a56a35b5baf2a0787c03f03f4e474929181900390910190a15050565b6001600160a01b038216600090815260286020526040902054614a999082614548565b6001600160a01b03831660008181526028602090815260409182902093909355805191825291810183905281517f34e07158b9db50df5613e591c44ea2ebc82834eff4a4dc3a46e000e608261d68929181900390910190a15050565b6001600160a01b038216600090815260256020526040902054614b1890826144f0565b6001600160a01b03831660008181526025602090815260408083209490945583516370a0823160e01b8152306004820152935191936370a082319260248083019392829003018186803b158015614b6e57600080fd5b505afa158015614b82573d6000803e3d6000fd5b505050506040513d6020811015614b9857600080fd5b50516001600160a01b038416600090815260256020526040902054909150614bc490821015603161458a565b604080516001600160a01b03851681526020810184905281517f976177fbe09a15e5e43f848844963a42b41ef919ef17ff21a17a5421de8f4737929181900390910190a1505050565b604080518082018252601a81527915985d5b1d0e881c1bdbdb105b5bdd5b9d08195e18d95959195960321b6020808301919091526001600160a01b038516600090815260259091529190912054614c65918390615860565b6001600160a01b03831660009081526025602090815260408083208490556026909152902054614c98911015603261458a565b604080516001600160a01b03841681526020810183905281517f112726233fbeaeed0f5b1dba5cb0b2b81883dee49fb35ff99fd98ed9f6d31eb0929181900390910190a15050565b6001600160a01b0382166000908152602d6020526040902054614d0390826144f0565b6001600160a01b0383166000908152602d6020908152604080832093909355602f9052205480156137fc576001600160a01b0383166000908152602d60205260409020548110156137fc576040805162461bcd60e51b815260206004820152601a60248201527915985d5b1d0e881b585e081cda1bdc9d1cc8195e18d95959195960321b604482015290519081900360640190fd5b60165462010000900460ff16156144ee57336000908152601a60205260409020546144ee9060ff16603661458a565b6001600160a01b038216600090815260236020526040902054818111614e30576001600160a01b038316600081815260236020908152604080832092909255815192835282018390528051600080516020615e3e8339815191529281900390910190a150613960565b614e3a8183614548565b6001600160a01b0384166000818152602360209081526040918290209390935580519182529181018490528151600080516020615e3e833981519152929181900390910190a1505050565b6000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015614ed457600080fd5b505afa158015614ee8573d6000803e3d6000fd5b505050506040513d6020811015614efe57600080fd5b50516001600160a01b0390921660009081526021602052604090209190915550565b600080614f3d61271061178e614f368287614548565b879061443d565b90506000614f4b8583614548565b6001600160a01b0387166000908152602c6020526040902054909150614f7190826144f0565b6001600160a01b0387166000908152602c60205260409020557f47cd9dda0e50ce30bcaaacd0488452b596221c07ac402a581cfae4d3933cac2b86614fb681846117b4565b604080516001600160a01b0390931683526020830191909152818101849052519081900360600190a150949350505050565b614ffc6001600160a01b038416828461564f565b604080516370a0823160e01b815230600482015290516001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561504257600080fd5b505afa158015615056573d6000803e3d6000fd5b505050506040513d602081101561506c57600080fd5b50516001600160a01b039093166000908152602160205260409020929092555050565b6001600160a01b0382166000908152602360205260409020546150b290826144f0565b6001600160a01b0383166000908152602360209081526040808320939093556024905220548015615104576001600160a01b03831660009081526023602052604090205461510490821015603361458a565b604080516001600160a01b03851681526020810184905281517f64243679a443432e2293343b77d411ff6144370404618f00ca0d2025d9ca9882929181900390910190a1505050565b600154604080516381d11a2360e01b81526001600160a01b038a8116600483015289811660248301528881166044830152606482018890526084820187905285151560a483015284811660c4830152915160009363010000009004909216916381d11a239160e4808201928692909190829003018186803b1580156151d157600080fd5b505afa1580156151e5573d6000803e3d6000fd5b505050506151f3878761414d565b60006152018989898761198e565b6000818152602b60205260409020805491925090615222901515601f61458a565b6152348682600001541015602061458a565b6152468782600101541015602161458a565b6001810154815460048301546000916152639161178e908b61443d565b60048401549091506152759082614548565b60048401556152848b826156a1565b506000806152968d8d8d8d8d8d6158ba565b855491935091508914615416576152ae8c8c8a6135d9565b600385015583546152bf908a614548565b80855560018501546152d19190614933565b6152df8d8d8d8b6001613854565b5050871561530c576153028c61211686600101548661454890919063ffffffff16565b61530c8c8a614a76565b6000886153215761531c8c613ebc565b61532a565b61532a8c612db8565b9050600080516020615dfd833981519152868f8f8f8f8f8f8861534d8c8c614548565b60408051998a526001600160a01b0398891660208b015296881689880152949096166060880152608087019290925260a0860152151560c085015260e084019290925261010083019190915251908190036101200190a18454600186015460028701546003880154600489015460058a0154604080518d81526020810197909752868101959095526060860193909352608085019190915260a084015260c083015260e0820183905251600080516020615ddd833981519152918190036101000190a150615578565b8715615430576154268c846149f7565b6154308c8a614a76565b600088615445576154408c613ebc565b61544e565b61544e8c612db8565b9050600080516020615dfd833981519152868f8f8f8f8f8f886154718c8c614548565b60408051998a526001600160a01b0398891660208b015296881689880152949096166060880152608087019290925260a0860152151560c085015260e084019290925261010083019190915251908190036101200190a18454600186015460028701546003880154600489015460058a0154604080518d81526020810197909752868101959095526060860193909352608085019190915260a084015260c0830152517f73af1d417d82c240fdb6d319b34ad884487c6bf2845d98980cc52ad9171cb4559181900360e00190a1506000858152602b602052604081208181556001810182905560028101829055600381018290556004810182905560058101829055600601555b87615587576155878b8a615756565b81156155c75787156155a1576155a18c61213d8e856132cf565b60006155ad8d836132cf565b90506155ba8d828a614fe8565b95506124a4945050505050565b5060009c9b505050505050505050505050565b6001600160a01b03811660009081526027602090815260408083205460259092529091205410156146b2576040805162461bcd60e51b815260206004820152601a6024820152792b30bab63a1d103837b7b620b6b7bab73a101e10313ab33332b960311b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526137fc908490615ab4565b604080518082018252601b81527a5661756c743a20696e73756666696369656e74207265736572766560281b6020808301919091526001600160a01b0385166000908152602690915291909120546156fa918390615860565b6001600160a01b03831660008181526026602090815260409182902093909355805191825291810183905281517f533cb5ed32be6a90284e96b5747a1bfc2d38fdb5768a6b5f67ff7d62144ed67b929181900390910190a15050565b6001600160a01b0382166000908152602d60205260409020548082111561579657506001600160a01b0382166000908152602d6020526040812055613960565b6157a08183614548565b6001600160a01b0384166000908152602d6020526040902055505050565b6000818361584a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561580f5781810151838201526020016157f7565b50505050905090810190601f16801561583c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161585657fe5b0495945050505050565b600081848411156158b25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561580f5781810151838201526020016157f7565b505050900390565b60008060006158cb8989898761198e565b6000818152602b602052604081208054600382015493945090926158f8918d918d918d918b918d916147ca565b90506000806000806159198d876000015488600201548d8a600601546124e8565b875491955085935091506159319061178e8d8461443d565b9250505060008280156159445750600082115b1561597457506005840180548201905580886159745760006159668e846132cf565b90506159728e82614c0d565b505b821580156159825750600082115b156159c65760018501546159969083614548565b6001860155886159ba5760006159ac8e846132cf565b90506159b88e82614af5565b505b60058501805483900390555b8a156159ee576159d6818c6144f0565b60018601549091506159e8908c614548565b60018601555b84548a1415615a11576001850154615a079082906144f0565b6000600187015590505b8084811115615a2b57615a248286614548565b9050615a5f565b6001860154615a3a9086614548565b60018701558915615a5f576000615a518f876132cf565b9050615a5d8f82614c0d565b505b60408051888152851515602082015280820185905290517f3ff41bdde87755b687ae83d0221a232b6be51a803330ed9661c1b5d0105e0d8a9181900360600190a1909e909d509b505050505050505050505050565b6060615b09826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316615b659092919063ffffffff16565b8051909150156137fc57808060200190516020811015615b2857600080fd5b50516137fc5760405162461bcd60e51b815260040180806020018281038252602a815260200180615e5e602a913960400191505060405180910390fd5b6060611adb848460008585615b7985615c80565b615bca576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310615c095780518252601f199092019160209182019101615bea565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114615c6b576040519150601f19603f3d011682016040523d82523d6000602084013e615c70565b606091505b50915091506124a4828286615c86565b3b151590565b60608315615c95575081611d8f565b825115615ca55782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561580f5781810151838201526020016157f7565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10615d2d5782800160ff19823516178555615d5a565b82800160010185558215615d5a579182015b82811115615d5a578235825591602001919060010190615d3f565b50615d66929150615da7565b5090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115615d665760008155600101615da856fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c0020853733b590dce729d9f4628682ebd9a34d2354e72679e66f43a008fc03b77393d75d64d1f84fc6f430a64fc578bdd4c1e090e90ea2d51773e626d19de56d30536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77e1e812596aac93a06ecc4ca627014d18e30f5c33b825160cc9d5c0ba61e452275361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645d0c0019d3d45fadeb74eff9d2c9924d146d000ac6bcf3c28bf0ac3c9baa011aa26469706673582212205ca00c46f96bc194355f5fdbd2c0097ebd1ced758375298c9787c9b64ee2941264736f6c634300060c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
