export const SAVE_DATA_LIST_ADDRESS = "0x5e7Cc8A8807a47EC9FcBBBB2DEb9BA2d89A7dCAb"
export const SAVE_DATA_LIST_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "senders",
    "outputs": [
      {
        "name": "totalMedicalReports",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x982fb9d8"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalMedicalReports",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe7ee5d52"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "data",
    "outputs": [
      {
        "name": "hashOfOriginalDataString",
        "type": "string"
      },
      {
        "name": "secondTimeEncryptedString",
        "type": "string"
      },
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "medReportId",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xf0ba8440"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "secondTimeEncryptedString",
        "type": "string"
      },
      {
        "name": "hashOfOriginalDataString",
        "type": "string"
      },
      {
        "name": "medReportId",
        "type": "string"
      }
    ],
    "name": "saveData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2320b16b"
  }
]