import React, { Component } from 'react';
import Button from '@material/react-button';
import Card from '@material/react-card';
import Switch from '@material/react-switch';
import {MDCRipple} from '@material/ripple';
import classnames from 'classnames';

const ButtonRow = ({disabled = false, className = ''}) => (
  <div className='button-row'>
    <div className={`${disabled ? 'mdc-button__core--disabled' : ''} mdc-button__core mdc-button__core--filled`} tabIndex='0'>
      <button ref={el => el && new MDCRipple(el)} className={`mdc-button ${className}`} tabIndex='-1' disabled={disabled}>
        Watch Again
      </button>
    </div>
  </div>
);

class Buttons extends Component {
  state = {
    disabled: false,
  };

  render() {
    const {disabled} = this.state;
    return (
      <div className='buttons'>
        <Card>
          <ButtonRow className='mdc-button--unelevated'/>
          <ButtonRow className='mdc-button--outlined'/>
          <ButtonRow className='mdc-button--unelevated mdc-button--dark'/>
          <ButtonRow />

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
