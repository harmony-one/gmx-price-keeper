export const abi = [{"inputs":[{"internalType":"address","name":"_endpoint","type":"address"},{"internalType":"address","name":"_nonceContract","type":"address"},{"internalType":"uint16","name":"_localChainId","type":"uint16"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"address","name":"lib","type":"address"}],"name":"AddInboundProofLibraryForChain","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userApplication","type":"address"},{"indexed":true,"internalType":"uint256","name":"configType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newConfig","type":"bytes"}],"name":"AppConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"proofType","type":"uint16"}],"name":"EnableSupportedOutboundProof","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":true,"internalType":"address","name":"oracle","type":"address"},{"indexed":false,"internalType":"bytes32","name":"lookupHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"blockData","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"confirmations","type":"uint256"}],"name":"HashReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"},{"indexed":true,"internalType":"address","name":"dstAddress","type":"address"},{"indexed":false,"internalType":"uint64","name":"nonce","type":"uint64"},{"indexed":false,"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"name":"InvalidDst","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"payload","type":"bytes"}],"name":"Packet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"},{"indexed":true,"internalType":"address","name":"dstAddress","type":"address"},{"indexed":false,"internalType":"uint64","name":"nonce","type":"uint64"},{"indexed":false,"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"name":"PacketReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"adapterParams","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"outboundProofType","type":"uint16"}],"name":"RelayerParams","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"}],"name":"SetChainAddressSize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"proofType","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"adapterParams","type":"bytes"}],"name":"SetDefaultAdapterParamsForChainId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"inboundProofLib","type":"uint16"},{"indexed":false,"internalType":"uint64","name":"inboundBlockConfirm","type":"uint64"},{"indexed":false,"internalType":"address","name":"relayer","type":"address"},{"indexed":false,"internalType":"uint16","name":"outboundProofType","type":"uint16"},{"indexed":false,"internalType":"uint64","name":"outboundBlockConfirm","type":"uint64"},{"indexed":false,"internalType":"address","name":"oracle","type":"address"}],"name":"SetDefaultConfigForChainId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"SetLayerZeroToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"bytes32","name":"uln","type":"bytes32"}],"name":"SetRemoteUln","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"treasuryAddress","type":"address"}],"name":"SetTreasury","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"msgSender","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawNative","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"msgSender","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawZRO","type":"event"},{"inputs":[],"name":"CONFIG_TYPE_INBOUND_BLOCK_CONFIRMATIONS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONFIG_TYPE_INBOUND_PROOF_LIBRARY_VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONFIG_TYPE_ORACLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONFIG_TYPE_OUTBOUND_BLOCK_CONFIRMATIONS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONFIG_TYPE_OUTBOUND_PROOF_TYPE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONFIG_TYPE_RELAYER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"accruedNativeFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"address","name":"_library","type":"address"}],"name":"addInboundProofLibraryForChain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"name":"appConfig","outputs":[{"internalType":"uint16","name":"inboundProofLibraryVersion","type":"uint16"},{"internalType":"uint64","name":"inboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"relayer","type":"address"},{"internalType":"uint16","name":"outboundProofType","type":"uint16"},{"internalType":"uint64","name":"outboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"oracle","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"chainAddressSizeMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"}],"name":"defaultAdapterParams","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"defaultAppConfig","outputs":[{"internalType":"uint16","name":"inboundProofLibraryVersion","type":"uint16"},{"internalType":"uint64","name":"inboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"relayer","type":"address"},{"internalType":"uint16","name":"outboundProofType","type":"uint16"},{"internalType":"uint64","name":"outboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"oracle","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint16","name":"_proofType","type":"uint16"}],"name":"enableSupportedOutboundProof","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endpoint","outputs":[{"internalType":"contract ILayerZeroEndpoint","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"address","name":"_ua","type":"address"},{"internalType":"bytes","name":"_payload","type":"bytes"},{"internalType":"bool","name":"_payInZRO","type":"bool"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"estimateFees","outputs":[{"internalType":"uint256","name":"nativeFee","type":"uint256"},{"internalType":"uint256","name":"zroFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_remoteChainId","type":"uint16"},{"internalType":"address","name":"_ua","type":"address"}],"name":"getAppConfig","outputs":[{"components":[{"internalType":"uint16","name":"inboundProofLibraryVersion","type":"uint16"},{"internalType":"uint64","name":"inboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"relayer","type":"address"},{"internalType":"uint16","name":"outboundProofType","type":"uint16"},{"internalType":"uint64","name":"outboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"oracle","type":"address"}],"internalType":"struct ILayerZeroUltraLightNodeV2.ApplicationConfiguration","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_remoteChainId","type":"uint16"},{"internalType":"address","name":"_ua","type":"address"},{"internalType":"uint256","name":"_configType","type":"uint256"}],"name":"getConfig","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"bytes","name":"_path","type":"bytes"}],"name":"getOutboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"hashLookup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"}],"name":"inboundProofLibrary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"layerZeroToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"localChainId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"maxInboundProofLibrary","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nativeFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonceContract","outputs":[{"internalType":"contract NonceContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ua","type":"address"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"bytes","name":"_path","type":"bytes"},{"internalType":"bytes","name":"_payload","type":"bytes"},{"internalType":"address payable","name":"_refundAddress","type":"address"},{"internalType":"address","name":"_zroPaymentAddress","type":"address"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"send","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"setChainAddressSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_remoteChainId","type":"uint16"},{"internalType":"address","name":"_ua","type":"address"},{"internalType":"uint256","name":"_configType","type":"uint256"},{"internalType":"bytes","name":"_config","type":"bytes"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint16","name":"_proofType","type":"uint16"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"setDefaultAdapterParamsForChainId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint16","name":"_inboundProofLibraryVersion","type":"uint16"},{"internalType":"uint64","name":"_inboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"_relayer","type":"address"},{"internalType":"uint16","name":"_outboundProofType","type":"uint16"},{"internalType":"uint64","name":"_outboundBlockConfirmations","type":"uint64"},{"internalType":"address","name":"_oracle","type":"address"}],"name":"setDefaultConfigForChainId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_layerZeroToken","type":"address"}],"name":"setLayerZeroToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_remoteChainId","type":"uint16"},{"internalType":"bytes32","name":"_remoteUln","type":"bytes32"}],"name":"setRemoteUln","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"}],"name":"supportedOutboundProof","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryContract","outputs":[{"internalType":"contract ILayerZeroTreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryZROFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"ulnLookup","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes32","name":"_lookupHash","type":"bytes32"},{"internalType":"uint256","name":"_confirmations","type":"uint256"},{"internalType":"bytes32","name":"_blockData","type":"bytes32"}],"name":"updateHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"address","name":"_dstAddress","type":"address"},{"internalType":"uint256","name":"_gasLimit","type":"uint256"},{"internalType":"bytes32","name":"_lookupHash","type":"bytes32"},{"internalType":"bytes32","name":"_blockData","type":"bytes32"},{"internalType":"bytes","name":"_transactionProof","type":"bytes"}],"name":"validateTransactionProof","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawZRO","outputs":[],"stateMutability":"nonpayable","type":"function"}];