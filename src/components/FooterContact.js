import React from "react"
import { ContactForm } from "./ContactForm"
import styled from "styled-components"
import * as theme from "../shared/theme"

const S = {
  FooterContactContainer: styled.div`
    h1 {
      text-align: center;
    }
    
    background: ${theme.secondaryBackgroundColor};
    
    form {
      max-width: 50%;
      margin: 0 auto;
    
    @media (max-width: ${theme.tabletBreakpoint}) {
        max-width: 80%;
      }
    
    @media (max-width: ${theme.mobileBreakpoint}) {
        max-width: 90%;
      }
    }
`
}

export const FooterContact = () => (
  <S.FooterContactContainer className={'section-container'}>
    <h1>Contact Us</h1>
    <ContactForm callToActionText={'Contact'}/>
  </S.FooterContactContainer>
)