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
import s from './Carousel.css';

class Carousel extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    $(".portfolio-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "fadeUp"
    });

    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div>
        <div className="portfolio-carousel wow fadeIn owl-carousel owl-theme" id="work">
            <div className="item" style={{backgroundImage: "url('/startbootstrap/img/agency/portfolio/carousel/bg-1.jpg')"}}>
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-md-5 push-md-7 my-auto">
                            <div className="project-details">
                                <span className="project-name">Project Name</span>
                                <span className="project-description">Branding, Website Design</span>
                                <hr className="colored" />
                                <a href="#portfolioModal1" data-toggle="modal" className="btn btn-primary">View Details <i className="fa fa-long-arrow-right fa-fw"></i></a>
                            </div>
                        </div>
                        <div className="col-md-7 pull-md-5 hidden-xs my-auto">
                            <div className="device-container">
                                <div className="device-mockup macbook portrait black">
                                    <div className="device">
                                        <div className="screen">
                                            <img className="img-fluid" src="/startbootstrap/img/agency/portfolio/carousel/screen-1a.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item" style={{backgroundImage: "url('/startbootstrap/img/agency/portfolio/carousel/bg-2.jpg')"}}>
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-md-5 push-md-7 my-auto">
                            <div className="project-details">
                                <span className="project-name">Project Name</span>
                                <span className="project-description">Branding, Website Design</span>
                                <hr className="colored" />
                                <a href="#portfolioModal2" data-toggle="modal" className="btn btn-primary">View Details <i className="fa fa-long-arrow-right fa-fw"></i></a>
                            </div>
                        </div>
                        <div className="col-md-7 pull-md-5 hidden-xs my-auto">
                            <div className="device-container">
                                <div className="device-mockup macbook portrait black">
                                    <div className="device">
                                        <div className="screen">
                                            <img className="img-fluid" src="/startbootstrap/img/agency/portfolio/carousel/screen-2a.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item" style={{backgroundImage: "url('/startbootstrap/img/agency/portfolio/carousel/bg-3.jpg')"}}>
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-md-5 push-md-7 my-auto">
                            <div className="project-details">
                                <span className="project-name">Project Name</span>
                                <span className="project-description">Branding, Website Design</span>
                                <hr className="colored" />
                                <a href="#portfolioModal3" data-toggle="modal" className="btn btn-primary">View Details <i className="fa fa-long-arrow-right fa-fw"></i></a>
                            </div>
                        </div>
                        <div className="col-md-7 pull-md-5 hidden-xs my-auto">
                            <div className="device-container">
                                <div className="device-mockup macbook portrait black">
                                    <div className="device">
                                        <div className="screen">
                                            <img className="img-fluid" src="/startbootstrap/img/agency/portfolio/carousel/screen-3a.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item" style={{backgroundImage: "url('/startbootstrap/img/agency/portfolio/carousel/bg-4.jpg')"}}>
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-md-5 push-md-7 my-auto">
                            <div className="project-details">
                                <span className="project-name">Project Name</span>
                                <span className="project-description">Branding, Website Design</span>
                                <hr className="colored" />
                                <a href="#portfolioModal4" data-toggle="modal" className="btn btn-primary">View Details <i className="fa fa-long-arrow-right fa-fw"></i></a>
                            </div>
                        </div>
                        <div className="col-md-7 pull-md-5 hidden-xs my-auto">
                            <div className="device-container">
                                <div className="device-mockup macbook portrait black">
                                    <div className="device">
                                        <div className="screen">
                                            <img className="img-fluid" src="/startbootstrap/img/agency/portfolio/carousel/screen-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
