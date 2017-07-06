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

        this.items = [];
    }

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

        this.items.map( item => item.style.paddingTop = item.style.paddingBottom = (screen.height - item.clientHeight) / 2 + "px" );
        console.log( this.items );

        //window.componentHandler.upgradeElement(this.root);
      }

      componentWillUnmount() {
        //window.componentHandler.downgradeElements(this.root);
      }

      render() {
        let carousel = this.props.carousel.map( page => {
            return (
                <div
                    className={ cx("item", s.item) }
                    key={page.imageId + "-" + page.canvas}
                    style={{backgroundImage: "url('/startbootstrap/img/agency/portfolio/carousel/bg-1.jpg')"}}
                    ref={ item => this.items.push( item ) }
                >
                    <div className={ cx("container-fluid", s.container) }>
                        <div className={ cx("row h-100", s.row) }>
                            <Panel imageId={ page.imageId } />
                            <Canvas imageId={ page.imageId } canvas={ page.canvas } />
                        </div>
                    </div>
                </div>
            );
        })

        return (
            <div className="portfolio-carousel wow fadeIn owl-carousel owl-theme" id="carousel">
                { carousel }
            </div>
        );
    }
}

function mapStateToProps({ carousel }) {
    return { carousel };
}

export default connect(mapStateToProps)(Carousel);
