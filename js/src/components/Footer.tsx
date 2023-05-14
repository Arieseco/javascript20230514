import styled from "styled-components"
import { device } from "./device"
import { Link } from "react-router-dom"; 

const CustomFooter = styled.footer`
  background-color: #1aaedb;
`
const CustomConteiner = styled.div`
  min-height: 50px;
  padding-top:10px;
  padding-bottom:10px;
  color: #fff;
  font-size: 12px;
  text-align: right;
  @media ${device.tablet} {
    min-height: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`
const CustomP = styled.p`
  margin: 0;
`

const Footer = () => {
  return (
    <CustomFooter>
      <CustomConteiner>
          <ul>
            <li>
                <Link to="/">Home</Link> 
                <Link to="/2-1">chapter2-1</Link> 
                <Link to="/2-2">chapter2-2</Link>
                
            </li>
            <li>
                <Link to="/2-1">chapter2-1</Link>
            </li>
            <li>
                <Link to="/2-2">chapter2-2</Link>
            </li>
          </ul>
        <CustomP>JavaScript Samples</CustomP>
      </CustomConteiner>
    </CustomFooter>
  )
}

export default Footer
