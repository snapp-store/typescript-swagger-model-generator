import clubRequest from "@/services/axios";
import walletService from "@/services/wallet";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function useGetWalletBalance() {
  const { data, isLoading } = useQuery({
    queryKey: ["getWalletBalance"],
    queryFn: walletService.getWalletBalance,
  });
  return { data, isLoading };
}

export default useGetWalletBalance;
