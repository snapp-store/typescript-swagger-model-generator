import clubRequest from "../axios";

const getWalletBalance = async () =>
  (await clubRequest.walletBalanceList()).data;

const walletService = {
  getWalletBalance,
};

export default walletService;
