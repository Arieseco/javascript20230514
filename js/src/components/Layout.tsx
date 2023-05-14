import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const CustomMain = styled.main`
  min-height: calc(100% - 156px);
`
const CustomContainer = styled.div`
  margin: 0 auto;
  background-color: #fff;
`

const layout: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  return (
    <>
      <Header/>
      <CustomMain>
        <CustomContainer >
          <section>{children}</section>
        </CustomContainer>
      </CustomMain>
      <Footer/>
    </>
    
  )
}

export default layout
