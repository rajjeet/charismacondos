import React from "react"
import styled from "styled-components"
import * as theme from "../shared/theme"

const S = {
  MessageContainer: styled.div`
    position: fixed;
    top: 1em;
    right: 1em;
    background: white;
    box-shadow: 1px 1px 4px #444444;
    width: 40%;
    padding: 1em;
    z-index: 4;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease, visibility .5s ease;
  
    @media screen and (max-width: ${theme.tabletBreakpoint}) {
      width: 70%;
    }
`
}

export const Message = () => (
  <S.MessageContainer id={'message-container'}>
    <h6>Success!</h6>
    <p>Your submission was successful</p>
  </S.MessageContainer>
)