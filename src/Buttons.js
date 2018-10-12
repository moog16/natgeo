import React, { Component } from 'react';
import Button from '@material/react-button';
import Card from '@material/react-card';
import Switch from '@material/react-switch';
import {MDCRipple} from '@material/ripple';
import classnames from 'classnames';

class Buttons extends Component {
  text = 'Watch Again';
  state = {
    disabled: false,
  };

  render() {
    const {disabled} = this.state;
    return (
      <div className='buttons'>
        <Card>
          <div className='button-row'>
            <div className={`${disabled ? 'mdc-button__core--disabled' : ''} mdc-button__core mdc-button__core--filled`} tabIndex='0'>
              <button ref={el => el && new MDCRipple(el)} className='mdc-button mdc-button--unelevated' tabIndex='-1' disabled={disabled}>
                {this.text}
              </button>
            </div>
          </div>
          <div className='button-row'>
            <div className={`${disabled ? 'mdc-button__core--disabled' : ''} mdc-button__core`} tabIndex='0'>
              <button ref={el => el && new MDCRipple(el)} className='mdc-button mdc-button--outlined' tabIndex='-1' disabled={disabled}>
                {this.text}
              </button>
            </div>
          </div>
          <div className='button-row'>
            <div className={`${disabled ? 'mdc-button__core--disabled' : ''} mdc-button__core mdc-button__core--filled`} tabIndex='0'>
              <button ref={el => el && new MDCRipple(el)} className='mdc-button mdc-button--unelevated mdc-button--dark' tabIndex='-1' disabled={disabled}>
                {this.text}
              </button>
            </div>
          </div>
          <div className='button-row'>
            <div className={`${disabled ? 'mdc-button__core--disabled' : ''} mdc-button__core`} tabIndex='0'>
              <button ref={el => el && new MDCRipple(el)} className='mdc-button' tabIndex='-1' disabled={disabled}>
                {this.text}
              </button>
            </div>
          </div>

          <div className='mdc-form-field'>
            <Switch
              nativeControlId='disabled-switch'
              value={disabled}
              onChange={(e) => this.setState({disabled: e.target.checked})}
            />
            <label htmlFor='disabled-switch'>Disable</label>
          </div>
        </Card>
      </div>
    );
  }
}

export default Buttons;
