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
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header 
        className={`mdl-layout__header ${s.header} masthead`}
        style={{"backgroundImage": "url('/startbootstrap/img/header/fragile.jpg')"}}
        ref={node => (this.root = node)}
      >
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12 my-auto text-center text-white">
                    <img className="masthead-img img-fluid mb-3" src="/startbootstrap/img/agency/profile.svg" alt="" />
                    <div className="masthead-title">Vitality</div>
                    <hr className="colored" />
                    <div className="masthead-subtitle">by Start Bootstrap</div>
                </div>
            </div>
        </div>
        <div className="scroll-down">
            <a className="btn page-scroll" href="#about">
                <i className="fa fa-angle-down fa-fw"></i>
            </a>
        </div>
      </header>
    );
  }
}

export default Header;
