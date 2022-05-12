import React from "react";
import ReactSlider, { Settings } from 'react-slick';
import styled from "@emotion/styled"
import { css } from '@emotion/react';
import {MdArrowBackIos,MdArrowForwardIos} from 'react-icons/md'
import 'slick-carousel/slick/slick.css';

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  margin-top:-40px;
  background-color: #fff;
  position: absolute;
  cursor:pointer;
  :hover{
    padding:17px;
    transition:all ease .3s;
    background-color:#f2f2f2;
  }
  ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
  
`;

const DEFAULT_SETTINGS={
    dots: false,
    arrows: true, //좌우이동 화살표
    infinite: true, //마지막 슬라이드에서 다시 처음으로
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
    prevArrow: (
        <ArrowButton pos="left">
          <MdArrowBackIos />
        </ArrowButton>
      ),
      nextArrow: (
        <ArrowButton pos="right">
          <MdArrowForwardIos />
        </ArrowButton>
      )
}
interface Props{
    settings?: any;
    children:any;
}

const Sliders: React.FC<Props> = ({ settings = DEFAULT_SETTINGS,children}) => {
    return(
        <ReactSlider {...settings}>
            {children}
        </ReactSlider>
    )
}

export default Sliders;