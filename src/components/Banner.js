import React from "react"
import styled from "styled-components"

const S = {
  Banner: styled.section`
    background-color: #444444;
    color: white;
    text-align: center;
  
    h6 {
      color: white;
      margin: 0 auto;
    }
`,
  BannerContent: styled.div`
    margin: 0 auto;
    width: 80%;

    p {
      width: 80%;
      margin: .4em auto;
    }
`,
}

export const Banner = () => (
  <S.Banner className={"section-container"}>
    <S.BannerContent>
      <h6>Limited Units So Act Fast</h6>
      <p>There are only a limited amounts of unit available at a first-come-first-serve basis and they sell fast.
        <br/>Take your first step right now and get the VIP access!</p>
      <div className={"call-to-action-container"}>
        <label className="call-to-action-btn" htmlFor={"modal-1"}>Get VIP Access</label>
      </div>
    </S.BannerContent>
  </S.Banner>
)