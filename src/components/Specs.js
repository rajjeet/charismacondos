import React from "react"
import styled from "styled-components"
import * as theme from "../shared/theme"

const S = {
  Specs: styled.div`
  background: #eee;

  h1 {
    text-align: center;
  }

  table {
    width: 80%;
    margin: 0 auto;
    font-size: 1.2em;

    @media (max-width: ${theme.mobileBreakpoint}) {
      font-size: .8em;
    }

    tr {
      td:first-of-type {
        text-align: right;
        font-weight: bold;
      }

      a {
        text-decoration-line: none;
          color: ${theme.sponsorColor};

        :hover {
          color: ${theme.primaryBtnColor};
        }

      }
    }
  }
  `
}


export const Specs = () => (
  <S.Specs id={"specs-container"} className={"section-container"}>
    <h1 className={"section-title"}>
      <span id={"specs"}/>
    </h1>
    <table>
      <tbody>
      <tr>
        <td>Address</td>
        <td>-</td>
        <td><a href={"/#location"}>8960 Jane St, Vaughan</a></td>
      </tr>
      <tr>
        <td>Number of stories</td>
        <td>-</td>
        <td>28</td>
      </tr>
      <tr>
        <td>VIP Launch</td>
        <td>-</td>
        <td>Early May, 2019</td>
      </tr>
      <tr>
        <td>Builder</td>
        <td>-</td>
        <td>Greenpark Homes</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>-</td>
        <td>Available for Reservation</td>
      </tr>
      </tbody>
    </table>
  </S.Specs>
)