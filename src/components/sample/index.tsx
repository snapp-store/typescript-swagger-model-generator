import { WalletResponse } from "@/models/response/wallet";
import clubRequest from "@/services/axios";
import React, { useEffect, useState } from "react";

function SimpleExample() {
  const [wallet, setWallet] = useState<WalletResponse>();

  async function fetchData() {
    let response = await clubRequest.walletBalanceList();
    setWallet(response?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{wallet?.amount}</div>;
}

export default SimpleExample;
