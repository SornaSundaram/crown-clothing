import React from 'react';
import FormInput from '../form-input/formInput';
import CustomButton from '../custom-button/customButton';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            required
            value={email}
            name='email'
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            required
            value={password}
            name='password'
            label='Password'
            handleChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
