import React from 'react'
import './SignUp.scss'
import RegisterForm from '../../containers/auth/RegisterForm'
import AuthTemplate from '../../components/auth/AuthTemplate'

const SignUp = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
}

export default SignUp
