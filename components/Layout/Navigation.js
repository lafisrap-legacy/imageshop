/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';

import s from './Navigation.css';

class Navigation extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <nav
        className={cx(
          'page-section',
          'mdl-navigation',
          'navbar',
          'fixed-top',
          'navbar-toggleable-md',
          'navbar-inverse',
          'navbar-expanded',
        s.pageSection)}
        id="mainNav"
        ref={node => (this.root = node)}
      >
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img className={`img-fluid ${s.brandImage}`} src="/startbootstrap/img/agency/logo.svg" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">Process</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
