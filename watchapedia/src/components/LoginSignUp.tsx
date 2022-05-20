import styled from "@emotion/styled";
import {HiOutlineLockClosed} from 'react-icons/hi' 
import {BsPerson} from 'react-icons/bs'
import {BsPencilSquare} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md' 
import { Dialog } from "@mui/material";
import {MdClose} from 'react-icons/md'
import { Button } from "@mui/material";
import React from "react";

const LoginBox=styled.div`
  width:300px;
  height:350px;
  box-sizing:border-box;
  padding-left:20px;
  >h2{
    margin-bottom:30px;
  }
`
const SignUpBox=styled.div`
width:400px;
height:580px;
box-sizing:border-box;
padding-left:70px;
>h2{
  margin-bottom:30px;
}
`

const LoginButton = styled(Button)`
  background:rgb(255, 47, 110);
  border: 0;
  border-radius: 3px;
  color: white;
  height: 40px;
  wight: 100px;
  padding: 0 30px;
  position:absolute;
  bottom:40px;
  left:50%;
  margin-left:-60px;
  :hover{
    transition:all ease .4s;
    box-shadow: 0 3px 5px 2px rgba(100, 100, 100, 0.3);
    background:rgb(255, 47, 110);
  }
`;
const CloseButton=styled.button`
  position:absolute;
  border:none;
  right:10px;
  top:10px;
  background-color:transparent;
  cursor:pointer;
  :hover{
    color:#aaa;
  }
`
const input={
  width:"200px",
  height:"40px",
  marginBottom:"30px",
  marginLeft:"10px"
}
const LoginSignUp=(props: any)=>{
  console.log(props);
  
  function clickLogin(){
    setopenLogin(true);
  }
    const [openLogin, setopenLogin] = React.useState(false);
    const [openSignUp, setopenSignUp] = React.useState(false);

    const handleLoginOpen = () => {
      setopenLogin(true);
    };
  
    const handleCloseLogin = () => {
      setopenLogin(false);
    };
    const handleSignUpOpen = () => {
      setopenSignUp(true);
    };
  
    const handleCloseSignUp = () => {
      setopenSignUp(false);
    };
    <>
    <Dialog open={openLogin} className="login">
      <LoginBox>
        <CloseButton onClick={handleCloseLogin}><MdClose size="24" /></CloseButton>
        <h2>로그인</h2>
          <BsPerson size="24"/><input placeholder="아이디" type="text" autoFocus style={input} />
          <br />
          <HiOutlineLockClosed size="24" /><input placeholder="비밀번호" type="password" style={input} />
        <LoginButton variant="contained" color="secondary" size="large">로그인</LoginButton>
        <input type="checkbox" />아이디 저장
      </LoginBox>
    </Dialog>
    <Dialog open={openSignUp}>
    <SignUpBox>
    <CloseButton onClick={handleCloseSignUp}><MdClose size="24" /></CloseButton>
    <h2>회원가입</h2>
        <BsPencilSquare size="24"/><input placeholder="이름" type="text" autoFocus style={input} />
        <br />
        <MdOutlineEmail size="24"/><input placeholder="이메일" type="email" style={input} />
        <br />
        <BsPerson size="24"/><input placeholder="아이디" type="text" style={input} />
        <br />
        <HiOutlineLockClosed size="24" /><input placeholder="비밀번호" type="password" style={input} />
        <br />
        <HiOutlineLockClosed size="24" /><input placeholder="비밀번호 확인" type="password" style={input} />
        <LoginButton variant="contained" color="secondary" size="large">회원가입</LoginButton>
    </SignUpBox>
  </Dialog>
  </>
}

export default LoginSignUp;