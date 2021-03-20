import React from 'react';
import './sign-in.styles.scss';
import constants from '../../constants/constants';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>{constants.alreadyHaveAnAccount}</h2>
        <span>{constants.signInWithEmail}</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'>{constants.signIn}</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              {constants.signInWithGoogle}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
