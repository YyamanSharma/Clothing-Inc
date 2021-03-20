import React from 'react';
import './sign-in.styles.scss';
import constants from '../../constants/constants';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error Signing In with Email and Password', error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
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
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            required
            value={password}
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'>{constants.signIn}</CustomButton>
            <CustomButton
              type='button'
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              {constants.signInWithGoogle}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
