import React from "react";
import useGetWalletBalance from "./hooks/useGetWalletBalance";

function UseQuerySample() {
  const { data, isLoading } = useGetWalletBalance();
  if (isLoading) return <span>Loading...</span>;
  return <div>{data?.amount}</div>;
}

export default UseQuerySample;
