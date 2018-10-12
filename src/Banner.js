// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withRipple from '@material/react-ripple';
import Button from '@material/react-button';

import NativeControl from './NativeControl';

export class Banner extends Component {
  state = {top: 64, showing: false};

  componentDidMount() {
    this.setTop();

    window.addEventListener('scroll', (evt) => {
      this.toggleBanner();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.show !== prevProps.show) {
      if (this.props.show) {
        this.setState({
          showing: true
        }, this.setTop);
      }
    }

    if (this.state.showing !== prevState.showing) {
      this.toggleBanner();
    }
  }

  setTop() {
    let top = 64 - window.scrollY;

    if (top < 0) {
      top = 0;
    }

    if (this.state.showing) {
      this.setState({top});
    }
  }

  toggleBanner() {
    if (this.state.showing) {
      this.setTop();
    } else {
      this.setState({top: -64});
    }
  }

  render() {
    const {top} = this.state;
    return (
      <div className='mdc-banner' style={{top: `${top}px`}}>
        <div className='mdc-banner__text'>
          {this.props.message}
        </div>
        <div className='mdc-banner__buttons'>
          <Button onClick={this.props.onSuccess}>
            Fill Form
          </Button>
          <Button onClick={() => this.setState({showing: false})}>
            Dismiss
          </Button>
        </div>
      </div>
    );
  }
}

export default Banner;
