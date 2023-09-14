import React, { useEffect, useState } from "react";
import MainAccountCard from "../components/list/MainAccountCard";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

const AccountList = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log("data");
    getAccountList();
  }, []);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    let requestOption = {
      url: "/v2.0/user/me",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDI0MzE5NDYsImp0aSI6ImRlNGRlNmEyLTIxNmItNGIyNi04YjA4LThlMDVkYmQwMzU0MyJ9.BirXtT1V5AmgZC3SuTAOj-E0TuTcFsrdVco0gR6FlsA`,
      },
      params: {
        user_seq_no: '1100034736',
      },
    };

    axios(requestOption).then((response) => {
      console.log(response);
      setAccountList(response.data.res_list);
    });
  };

  return (
    <div>
      <HeaderComponent title={"계좌조회"}></HeaderComponent>
      {accountList.map((account) => {
        return (
          <MainAccountCard
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></MainAccountCard>
        );
      })}
    </div>
  );
};

export default AccountList;
