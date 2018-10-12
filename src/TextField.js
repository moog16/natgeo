import React, { Component } from 'react';
import {MDCTextField} from '@material/textfield/index';
import classnames from 'classnames';

const TextField = (props) => {
  const {
    textFieldId, outlined, textarea,
    dense, leading, trailing, helperText, className, children, label
  } = props;
  const classes = classnames('mdc-text-field', 'text-field', className, {
    'mdc-text-field--outlined': outlined,
    'mdc-text-field--textarea': textarea,
    'mdc-text-field--dense': dense,
    'mdc-text-field--with-leading-icon': leading,
    'mdc-text-field--with-trailing-icon': trailing,
  });

  return (
    <div className='text-field-container'>
      <div className={classes} ref={textFieldEl => textFieldEl && new MDCTextField(textFieldEl)}>
        {leading && <i className='material-icons mdc-text-field__icon'>event</i>}
        {children}
        <Label textFieldId={textFieldId} dense={dense}>{label}</Label>
        {trailing && <i className='material-icons mdc-text-field__icon'>delete</i>}
        {outlined ? <Outline /> : <div className='mdc-line-ripple'></div>}
      </div>
      <HelperText helperText={helperText} />
    </div>
  );
}

const Outline = () => [
  <div className='mdc-notched-outline' key='outline'>
    <svg>
      <path className='mdc-notched-outline__path'/>
    </svg>
  </div>,
  <div className='mdc-notched-outline__idle' key='outline-idle'></div>
];

const Label = ({children, textFieldId}) => (
  <label className='mdc-floating-label' htmlFor={textFieldId}>
    {children}
  </label>
);

const Input = (props) => (
  <input type='text'
    {...props}
    className='mdc-text-field__input' />
);

const HelperText = ({helperText}) => (
  <p className='mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg'
   id='pw-validation-msg'>
    {helperText}
  </p>
);

export default TextField;
export {Input};
