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
import Link from '../Link';

function Footer() {
  return (
    <footer className="footer" style={{backgroundImage: "url('/startbootstrap/img/agency/backgrounds/bg-footer.jpg')"}}>
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4 footer-contact-details">
                    <h4><i className="fa fa-phone"></i> Call</h4>
                    <p>555-213-4567</p>
                </div>
                <div className="col-md-4 footer-contact-details">
                    <h4><i className="fa fa-map-marker"></i> Visit</h4>
                    <p>3481 Melrose Place
                        <br />Beverly Hills, CA 90210</p>
                </div>
                <div className="col-md-4 footer-contact-details">
                    <h4><i className="fa fa-envelope"></i> Email</h4>
                    <p><a href="mailto:mail@example.com">mail@example.com</a>
                    </p>
                </div>
            </div>
            <div className="row footer-social">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#"><i className="fa fa-facebook fa-fw fa-2x"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#"><i className="fa fa-twitter fa-fw fa-2x"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#"><i className="fa fa-linkedin fa-fw fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright">&copy; 2017 Start Bootstrap Themes</p>
        </div>
    </footer>
  );
}

export default Footer;
