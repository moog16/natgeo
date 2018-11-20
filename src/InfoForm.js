import React, { Component } from 'react';
import silohouette from './silohouette.png';
import FacebookLogo from './facebook.js';

import TopAppBar from '@material/react-top-app-bar';
import TextField, {Input} from './TextField';
import Button from '@material/react-button';
import Snackbar from './Snackbar';
import Checkbox from './Checkbox';
import Banner from './Banner';
import Card from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';

class InfoForm extends Component {
  infoFormElement = React.createRef();

  state = {
    firstName: '',
    lastName: '',
    password: '',
    confirm: '',
    email: '',
    city: '',
    educatorIndeterminate: false,
    educatorChecked: false,
    showSnackbar: 0,
    snackbarMessage: '',
    bannerMessage: '',
    showBanner: 0,
    submit: 0,
    hasError: false,
  };


  componentDidUpdate(prevProps, prevState) {
    if (this.state.submit !== prevState.submit) {
      const textFields = this.infoFormElement.current.querySelectorAll('.mdc-text-field');
      textFields.forEach(tf => tf.querySelector('input').focus());

      const hasError = this.infoFormElement.current.querySelectorAll('.mdc-text-field--invalid').length > 0;
      this.setState({hasError});

      if (!hasError) {
        this.setState({
          showSnackbar: this.state.showSnackbar+1,
          snackbarMessage: 'Thanks for signing up!'
        });
      } else {
        this.setState({
          bannerMessage: 'Some fields are incorrectly filled, please fix.',
          showBanner: this.state.showBanner+1,
        });
      }
    }
  }

  scrollToError = () => {
    const errors = this.infoFormElement.current.querySelectorAll('.mdc-text-field--invalid');
    if (errors.length <= 0) {
      return;
    }
    const scrollPos = errors[0].offsetTop;
    window.scrollTo({top: scrollPos + 12});
  }


  render() {
    const {showSnackbar, showBanner, bannerMessage} = this.state;
    return (
      <div className='info-form' ref={this.infoFormElement}>
        <TopAppBar />
        <div className='mdc-top-app-bar--fixed-adjust form'>
          <Banner show={showBanner} message={bannerMessage} onSuccess={this.scrollToError}/>
          <div className='form__container'>
            <div className='form__header'>
              <h1 className='mdc-typography--headline3'>
                Welcome to Our Community
              </h1>
              <h3 className='mdc-typography--body1'>
                Join now and get access to  exclusive content and discounts.
              </h3>
            </div>

            <form className='form__form'>

              <div className='form-field facebook-login__container'>
                {this.renderFacebookSignIn()}
              </div>

              <hr />

              {this.renderImageUploader()}
              {this.renderCheckbox()}
              {this.renderName()}

              {this.renderEmail()}
              {this.renderPassword()}
              {this.renderCity()}

              <div className='form-footer'>
                <div className='form-footer__submit'>
                  {this.renderSubmit()}
                </div>
                <a href='#'>
                  Cancel
                </a>
              </div>

            </form>
          </div>
          <div className='footer'></div>
        </div>

        <Snackbar message={this.state.snackbarMessage} show={showSnackbar} />
      </div>
    );
  }

  renderImageUploader() {
    return (
      <Card className='horizontal-card'>
        <div className='horizontal-card-content'>
          <img className='horizontal-card__image' src={silohouette} alt=''/>
          <div className='horizontal-card-header'>
            <h2 className='mdc-typography--body1 card-title'>Choose profile image (optional)</h2>
            <button className='mdc-button mdc-button--raised mdc-elevation--z0 upload-icon-button' type='button'>
              Upload Icon
              <MaterialIcon icon='add' />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  renderCheckbox() {
    return (
      <div className='mdc-form-field form__checkbox'>
        <Checkbox
          id='educator'
          checked={this.state.checked}
          indeterminate={this.state.indeterminate}
          onChange={(e) => this.setState({
            educatorChecked: e.target.checked,
            educatorIndeterminate: e.target.indeterminate
          })
          }
        />
        <label htmlFor='educator'>Are you an educator?</label>
      </div>
    );
  }

  renderName() {
    return (
      <div className='form-field'>
        <TextField
          outlined
          label='Name'
          helperText='Please enter your name'
        >
          <Input
            value={this.state.firstName}
            onChange={(evt) => this.setState({firstName: evt.target.value})}
            required
          />
        </TextField>
      </div>
    );
  }

  renderEmail() {
    return (
      <div className='form-field'>
        <TextField
          outlined
          label='Email Address'
          helperText='Please enter an email'
        >
          <Input
            value={this.state.email}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            onChange={(evt) => this.setState({email: evt.target.value})}
            required
          />
        </TextField>
      </div>
    );
  }

  renderPassword() {
    return (
      <div className='form-field'>
        <TextField
          outlined
          label='Password'
          helperText='Please enter a minimum length password of 8'
        >
          <Input
            value={this.state.password}
            minLength={8}
            required
            type='password'
            onChange={(evt) => this.setState({password: evt.target.value})}
          />
        </TextField>
      </div>
    );
  }

  renderCity() {
    return (
      <div className='form-field'>
        <TextField
          outlined
          label='City'
        >
          <Input
            value={this.state.city}
            onChange={(evt) => this.setState({city: evt.target.value})}
          />
        </TextField>
      </div>
    );
  }

  renderSubmit() {
    return (
      <Button
        raised
        className='mdc-elevation--z0'
        type='submit' onClick={(e) => {
          e.preventDefault();
          this.setState({submit: this.state.submit+1});
        }}
      >
        Join Now
      </Button>
    );
  }

  renderFacebookSignIn() {
    return (
      <Button onClick={(evt) => {evt.preventDefault()}}
        icon={<span className='mdc-button__icon facebook-icon'><FacebookLogo/></span>} raised className='facebook-login mdc-elevation--z0'>
        Connect with Facebook
      </Button>
    );
  }
}

export default InfoForm;
