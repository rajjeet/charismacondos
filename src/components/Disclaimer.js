import React from "react"
import styled from "styled-components"
import * as theme from '../shared/theme'

const S = {
    DisclaimerContainer: styled.div`
        width: 80%;
        margin: 1em auto;
        font-size: .8em;
        color: #aaaaaa;
        padding: .5em;

      @media (max-width: ${theme.mobileBreakpoint}) {
        width: 100%;
      }
`
}


export const Disclaimer = () => (
  <S.DisclaimerContainer>
    Copyright © 2019. All Rights Reserved. The information provided is for reference purposes only and is without any
    representations and warranties. The information should be verified. The website owners don’t represent the builders
    and developers of the condo/house project but represent the buyer/client of units. Sizes are approximate. Sizes,
    Specifications, Prices, inventory, Incentives and any other promotion are subject to change without notice. Errors
    and Omissions are Excepted. For Further Information, Please contact Jatinder Phull (416-569-7608) or Jagdeep Gambhir
    (647-226-7457), Brokers at Spectrum Realty Services Inc Brokerage (416-736-6500).
  </S.DisclaimerContainer>
)