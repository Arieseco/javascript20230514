import React,{ useContext } from 'react'
import AppContext from '../context/AppContext';
import styled from "styled-components";
import { device } from './device';

const CustomHeader = styled.header`
  background-color: #1aaedb;
  border-bottom: #ead963 6px solid;
`
const CustomDiv = styled.div`
  min-height: 60px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 76px;
  background-image: url(../logo.svg);
  background-repeat: no-repeat;
  background-size: 53px;
  background-position: 16px 10px;

  @media ${device.tablet} {
    min-height: 100px;
    padding-left: 120px;
    background-size: 80px;
    background-position: 30px 20px;
  }
`

const CustomH1 = styled.h1`
  margin: 0;
  color: #fff;
  line-height: 1;
  padding: 15px 0 4px 0;
  border-bottom: 1px dotted #fff;
  font-size: 16px;
  font-weight: 500;

  @media ${device.tablet} {
    padding: 30px 0 5px 0;
    font-size: 24px;
  }
`
const CustomH2 = styled.h1`
  margin: 0;
  color: #fff;
  line-height: 1;
  padding: 5px 0 0 0;
  font-size: 10px;
  font-weight: 400;

  @media ${device.tablet} {
    padding: 6px 0 0 0;
    font-size: 14px;
  }
`

const Header: React.FC = () => {

  const value = useContext(AppContext)

  return (
    <CustomHeader>
      <CustomDiv>
        <CustomH1>{value.title}</CustomH1>
        <CustomH2>{value.subTitle}</CustomH2>
      </CustomDiv>
    </CustomHeader>
  )
}

export default Header
