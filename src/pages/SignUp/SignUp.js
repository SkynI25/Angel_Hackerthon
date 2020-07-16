import React from 'react'
import './SignUp.scss'

const SignUp = () => {
  return (
    <div className="signin-container">
      <form>
        <h2>회원가입</h2>
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
        <input type="password" name="passwordConfirm" placeholder="비밀번호 확인" />
        <input type="text" name="phone" placeholder="전화번호" />
        <input type="text" name="address" placeholder="주소" />
        <button type="submit" className="btn">
          회원가입
        </button>
      </form>
    </div>
  )
}

export default SignUp
