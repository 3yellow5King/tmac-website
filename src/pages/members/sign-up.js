// External Dependencies
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import { withRouter } from 'react-router-dom';

// Internal Dependencies
import Container from '../../components/shared/container';
import presets, { colors } from '../../utils/presets';
import { options } from '../../utils/typography';
import {
  auth,
  firebase,
} from '../../firebase';

// Local Styles
const rootStyles = {
  margin: '1rem 0',
};

const labelStyles = {
  display: 'block',
  fontSize: '67.5%',
  letterSpacing: '0.125em',
  textTransform: 'uppercase',
};

const bottomLabelStyles = {
  ...labelStyles,
  marginTop: 16,
};

const inputStyles = {
  display: 'block',
  fontSize: '1rem',
  padding: '0.3rem',
};

const buttonStyles = {
  backgroundColor: 'rebeccapurple',
  border: 0,
  color: 'white',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginTop: '0.5rem',
  padding: '0.25rem 1rem',
  transition: 'background-color 150ms linear',
};

const INITIAL_STATE = {
  email: '',
  emailError: '',
  error: '',
  passwordError: '',
  passwordOne: '',
  passwordTwo: '',
  registerError: null,
};

// To check for a valid email address
const regex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

// Component Definition
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, this.handleUpdateErrors);
  }

  handleClickSignUpButton = () => {
    const {
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authuser => {
        this.setState(() => ({
          ...INITIAL_STATE,
          isAuthenticated: true,
        }));
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  toggleRegisterPasswordInput = () => {
    const passOne = document.getElementById('passwordOne');
    const passTwo = document.getElementById('passwordTwo');

    if (passOne.type === 'password' && passTwo.type === 'password') {
      passOne.setAttribute('type', 'text')
      passTwo.setAttribute('type', 'text')
    }
    else {
      passOne.setAttribute('type', 'password');
      passTwo.setAttribute('type', 'password');
    }
  }

  handleUpdateErrors = () => {
    this.handleUpdateEmailError();
    this.handleUpdateRegisterPasswordError();
  }

  handleUpdateEmailError = () => {
    const {
      email,
    } = this.state;

    if (!email) {
      this.setState({
        emailError: 'Email is required',
      });
    } else if (regex.test(email)) {
      this.setState({
        emailError: '',
      });
    } else if (email && !regex.test(email)) {
      this.setState({
        emailError: 'Use a valid email',
      });
    }
  }

  handleUpdateRegisterPasswordError = (message) => {
    const {
      passwordOne,
      passwordTwo,
    } = this.state;

    const hasInput = passwordOne !== '' && passwordTwo !== '';

    if (!hasInput) {
      this.setState({
        registerError: '',
      });
    } else if (hasInput && passwordOne !== passwordTwo) {
      this.setState({
        registerError: 'Passwords should match',
      });
    } else if (hasInput && passwordOne === passwordTwo && passwordOne.length < 8) {
      this.setState({
        registerError: 'Password must be at least 8 characters long',
      });
    } else if (hasInput && passwordOne === passwordTwo) {
      this.setState({
        registerError: '',
      });
    }
  }

  render() {
    const {
      history,
    } = this.props;

    const {
      email,
      emailError,
      error,
      isAuthenticated,
      passwordError,
      passwordOne,
      passwordTwo,
      registerError,
    } = this.state;

    if (isAuthenticated) history.push('/members');

    const hasInput = passwordOne !== '' && passwordTwo !== '' && email !== '';
    const isInvalid =
      !hasInput ||
      registerError ||
      emailError;

    return (
      <div css={{
        paddingLeft: 0,
        [presets.Tablet]: {
          paddingLeft: '1.5rem',
        },
      }}>
        <Container className="sign-up">
          <Helmet>
            <title>TMAC | Sign Up</title>
          </Helmet>
          <h1
            css={{
              margin: '1rem 0',
            }}
          >
            Sign Up
          </h1>
          <div
            css={{ marginBottom: 16 }}
            key="register-message"
          >
            Registration is open to TMAC members. For information about joining TMAC, head over to the&nbsp;
            <Link to="/members#google-form-members">Members page</Link>.
          </div>
          <form
            key="register-form"
            onSubmit={this.handleSubmit}
          >
            <label css={labelStyles}>
              Username
              <input
                css={inputStyles}
                type="text"
                name="email"
                onChange={this.handleUpdate}
                placeholder="Email Address"
                value={email}
              />
            </label>
            <div
              css={{
                color: 'red',
                fontFamily: options.headerFontFamily.join(`,`),
                marginTop: 16,
              }}
            >
              {emailError}
            </div>
            <label css={bottomLabelStyles}>
              Password
            </label>
            <div
              css={{
                alignItems: 'center',
                display: 'flex',
                marginBottom: 16,
              }}
            >
              <input
                css={inputStyles}
                id="passwordOne"
                type="password"
                name="passwordOne"
                onChange={this.handleUpdate}
                placeholder="Password"
                value={passwordOne}
              />
              <div css={{ marginLeft: 8 }}>
                <MdRemoveRedEye
                  css={{
                    height: 20,
                    width: 20,
                  }}
                  onClick={this.toggleRegisterPasswordInput}
                />
              </div>
            </div>
            <label css={bottomLabelStyles}>
              Confirm Password
            </label>
            <div
              css={{
                alignItems: 'center',
                display: 'flex',
                marginBottom: 16,
              }}
            >
              <input
                css={inputStyles}
                id="passwordTwo"
                type="password"
                name="passwordTwo"
                onChange={this.handleUpdate}
                placeholder="Confirm Password"
                value={passwordTwo}
              />
            </div>
            <div
              css={{
                color: 'red',
                fontFamily: options.headerFontFamily.join(`,`),
                margin: '16px 0',
              }}
            >
              {registerError}
            </div>
            <button
              disabled={isInvalid}
              type="submit"
              onClick={this.handleClickSignUpButton}
            >
              Sign Up
            </button>
            {error &&
              <div
                css={{
                  color: 'red',
                  fontWeight: 500,
                  fontFamily: options.headerFontFamily.join(`,`),
                  margin: '16px 0',
                }}
              >
                {error.message}
              </div>
            }
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignUpForm);