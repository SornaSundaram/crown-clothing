import React from 'react';
import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/signUp';

import './signInSignUp.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
