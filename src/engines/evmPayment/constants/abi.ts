export const PaymentAbi =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "feeReceiver",
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
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "AdminUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "admins",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "bool[]",
        "name": "status",
        "type": "bool[]"
      }
    ],
    "name": "AdminsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "protocolFee",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "share",
                "type": "uint256"
              }
            ],
            "internalType": "struct Pajily.PaymentInfo[]",
            "name": "paymentInfos",
            "type": "tuple[]"
          }
        ],
        "indexed": false,
        "internalType": "struct Pajily.PartnerInfo",
        "name": "partnerInfo",
        "type": "tuple"
      }
    ],
    "name": "PartnerCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "payer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "payFor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "Payment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "name": "SetStatusPartner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "bool[]",
        "name": "isActives",
        "type": "bool[]"
      }
    ],
    "name": "SetWhitelistTokens",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "newFeeReceiver",
        "type": "address"
      }
    ],
    "name": "UpdateFeeReceiver",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "UpdatePartnerOwner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "share",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct Pajily.PaymentInfo[]",
        "name": "paymentInfos",
        "type": "tuple[]"
      }
    ],
    "name": "UpdatePartnerPaymentInfo",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newProtocolFee",
        "type": "uint256"
      }
    ],
    "name": "UpdatePartnerProtocolFee",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "protocolFee",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "share",
                "type": "uint256"
              }
            ],
            "internalType": "struct Pajily.PaymentInfo[]",
            "name": "paymentInfos",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Pajily.PartnerInfo",
        "name": "info",
        "type": "tuple"
      }
    ],
    "name": "createPartner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFeeReceiver",
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
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      }
    ],
    "name": "getPartnerInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "protocolFee",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "share",
                "type": "uint256"
              }
            ],
            "internalType": "struct Pajily.PaymentInfo[]",
            "name": "paymentInfos",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Pajily.PartnerInfo",
        "name": "",
        "type": "tuple"
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
    "name": "isAdmins",
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
        "name": "token",
        "type": "address"
      }
    ],
    "name": "isWhiteListToken",
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
    "name": "owner",
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
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "payFor",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "pay",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "admins",
        "type": "address[]"
      },
      {
        "internalType": "bool[]",
        "name": "isActives",
        "type": "bool[]"
      }
    ],
    "name": "setAdmins",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "internalType": "bool[]",
        "name": "isActives",
        "type": "bool[]"
      }
    ],
    "name": "setWhitelistTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newFeeReceiver",
        "type": "address"
      }
    ],
    "name": "updateFeeReceiver",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "updatePartnerOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "share",
            "type": "uint256"
          }
        ],
        "internalType": "struct Pajily.PaymentInfo[]",
        "name": "paymentInfos",
        "type": "tuple[]"
      }
    ],
    "name": "updatePartnerPaymentInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "newProtocolFee",
        "type": "uint256"
      }
    ],
    "name": "updatePartnerProtocolFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "partnerCode",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "name": "updatePartnerStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawFungibleToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "withdrawNft",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]