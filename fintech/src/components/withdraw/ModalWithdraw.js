import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import ModalCard from "./ModalCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const ModalWithdraw = ({ tofintechno }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [acountList, setAccountList] = useState([]);

  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {
   // const accessToken = localStorage.getItem("accessToken");
   //const userSeqNo = localStorage.getItem("userSeqNo");
   const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDI0MzE5NDYsImp0aSI6ImRlNGRlNmEyLTIxNmItNGIyNi04YjA4LThlMDVkYmQwMzU0MyJ9.BirXtT1V5AmgZC3SuTAOj-E0TuTcFsrdVco0gR6FlsA`
   const userSeqNo ='1100034736'
    console.log(accessToken, userSeqNo);
    //axios 요청을 작성해야함
    //header 설정
    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        user_seq_no: userSeqNo,
      },
    };

    axios(option).then(({ data }) => {
      setAccountList(data.res_list);
    });
  };

  return (
    <ModalWithdrawBlock>
      <Slider {...settings}>
        {acountList.map((account) => {
          return (
            <ModalCard
              key={account.fintech_use_num}
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
              tofintechno={tofintechno}
            ></ModalCard>
          );
        })}
      </Slider>
    </ModalWithdrawBlock>
  );
};

export default ModalWithdraw;