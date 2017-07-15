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
import { connect } from "react-redux";
import cx from 'classnames';
import s from './Carousel.css';
import Canvas from './Canvas';
import Panel from './Panel';

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.pages = [];

        this.state = {
            test: "TEST1"
        }
    }

    static propTypes = {
        className: PropTypes.string,
    };

    componentDidUpdate() {
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

        this.pages.map( page => page.style.paddingTop = page.style.paddingBottom = (screen.height - page.clientHeight) / 2 + "px" );

        //window.componentHandler.upgradeElement(this.root);
      }

      componentWillUnmount() {
        //window.componentHandler.downgradeElements(this.root);
      }

      render() {
        if( !this.props.carousel.length ) {
            
            var carousel = <div className="spinner"></div>;

        } else {
            var carousel = this.props.carousel.map( page => {
                return (
                    <div
                        className={ cx("page item", s.page) }
                        key={page.imageId + "-" + page.frameName}
                        style={{"backgroundImage": `url(${page.backgroundImage})`}}
                        ref={ page => this.pages.push( page ) }
                    >
                        <div className={ cx("container-fluid", s.container) }>
                            <div className={ cx("row h-100", s.row) }>
                                <Panel imageId={ page.imageId } frameName={ page.frameName } />
                                <Canvas imageId={ page.imageId } frameName={ page.frameName } />
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return (
            <div className="portfolio-carousel wow fadeIn owl-carousel owl-theme" id="carousel">
                { carousel }
            </div>
        );
    }
}

export function mapStateToProps({ carousel }) {
    return { carousel };
}

export default connect(mapStateToProps)(Carousel);
