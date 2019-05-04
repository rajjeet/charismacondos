import { ContactForm } from "./ContactForm"
import React from "react"
import styled from "styled-components"
import * as theme from "../shared/theme"

const S = {
  CallToActionModal: styled.div`
    .modal__inner {
      transition: top .25s ease;
      position: relative;
      width: 50vw;
      margin: 3em auto;
      overflow: auto;
      background: #fff;
      border-radius: 5px;
      padding: 1em 2em;
    
      h1 {
        width: 70%;
      }
    
      @media screen and (max-width: ${theme.computerBreakpoint}) {
        width: 90vw;
      }
    
      @media screen and (max-width: ${theme.tabletBreakpoint}) {
        width: 70vw;
        box-sizing: border-box;
      }
    
      @media screen and (max-width: ${theme.mobileBreakpoint}) {
        width: 95vw;
      }
    
      @media screen and (max-height: ${theme.mobileBreakpoint}) {
        height: 95vh;
      }
    
      .modal__close {
        position: relative;
        float: right;
        cursor: pointer;
        width: 20px;
      }
    
      .modal__close:after,
      .modal__close:before {
        content: '';
        position: absolute;
        width: 5px;
        height: 1.5em;
        background: #ccc;
        display: block;
        transform: rotate(45deg);
        left: 50%;
        margin: -3px 0 0 -1px;
        top: 0;
      }
    
      .modal__close:hover:after,
      .modal__close:hover:before {
        background: #aaa;
      }
    
      .modal__close:before {
        transform: rotate(-45deg);
      }
    }
    
    .modal-state {
      display: none;
    
      &:checked + .modal {
        opacity: 1;
        visibility: visible;
      }
    }
`
}

export function CallToActionModal() {
  return <S.CallToActionModal>
    <input className="modal-state" id="modal-1" type="checkbox"/>
    <div className="modal">
      <label className="modal__bg" htmlFor="modal-1"/>
      <div className="modal__inner">
        <label className="modal__close" htmlFor="modal-1"/>
        <h1>Register</h1>
        <ContactForm/>
      </div>
    </div>
  </S.CallToActionModal>
}