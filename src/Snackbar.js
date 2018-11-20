import React, { Component } from 'react';
import {MDCSnackbar} from '@material/snackbar';

class Snackbar extends Component {
  element = React.createRef();

  componentDidMount() {
    this.snackbar = new MDCSnackbar(this.element.current);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.snackbar.show({
        message: this.props.message
      });
    }
  }

  render() {
    return (
      <div className='mdc-snackbar'
        ref={this.element}
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden='true'
      >
        <div className='mdc-snackbar__text'>
          Test
        </div>
        <div className='mdc-snackbar__action-wrapper'>
          <button type='button' className='mdc-snackbar__action-button'></button>
        </div>
      </div>
    );
  }
}


export default Snackbar;
