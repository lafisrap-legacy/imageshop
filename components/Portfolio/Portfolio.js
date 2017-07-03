/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Portfolio.css';

class Portfolio extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    $('.mix').magnificPopup({
        type: 'image',
        image: {
            titleSrc: 'title'
        }
    });

    var containerEl = document.querySelector('#portfolioList');
    var mixer = mixitup(containerEl);
    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
        <section className="page-section">
            <div className="container text-center wow fadeIn">
                <h2>Portfolio</h2>
                <hr className="colored" />
                <p>Here are some other projects that we´ve worked on.</p>
                <div className="controls mt-3">
                    <button type="button" className="control btn btn-secondary btn-sm mx-2 mb-4" data-filter="all">All</button>
                    <button type="button" className="control btn btn-secondary btn-sm mx-2 mb-4" data-filter=".identity">Identity</button>
                    <button type="button" className="control btn btn-secondary btn-sm mx-2 mb-4" data-filter=".graphic">Graphic</button>
                    <button type="button" className="control btn btn-secondary btn-sm mx-2 mb-4" data-filter=".web">Web</button>
                </div>
                <div className="portfolio-grid clearfix" id="portfolioList">
                    <div className="mix identity" href="/startbootstrap/img/agency/portfolio/grid/grid-1.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-1.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Brand Identity</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix web" href="/startbootstrap/img/agency/portfolio/grid/grid-2.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-2.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Web Development</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix web" href="/startbootstrap/img/agency/portfolio/grid/grid-3.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-3.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Web Development</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix identity" href="/startbootstrap/img/agency/portfolio/grid/grid-4.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-4.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Brand Identity</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix web" href="/startbootstrap/img/agency/portfolio/grid/grid-5.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-5.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Web Development</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix graphic" href="/startbootstrap/img/agency/portfolio/grid/grid-6.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-6.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Graphic Design</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix graphic" href="/startbootstrap/img/agency/portfolio/grid/grid-7.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-7.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Graphic Design</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix web" href="/startbootstrap/img/agency/portfolio/grid/grid-8.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-8.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Web Development</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mix identity" href="/startbootstrap/img/agency/portfolio/grid/grid-9.jpg" title="Client Name">
                        <div className="portfolio-wrapper">
                            <img src="/startbootstrap/img/agency/portfolio/grid/grid-9.jpg" alt="" />
                            <div className="caption">
                                <div className="caption-text">
                                    <a className="text-title">Client Name</a>
                                    <span className="text-category">Brand Identity</span>
                                </div>
                                <div className="caption-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Portfolio;
