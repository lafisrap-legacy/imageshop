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
import { urlize } from '../../../src/utils';
import cx from 'classnames';
import s from './PortfolioImage.css';

const widthHeightRatio = 0.663;

class PortfolioImage extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    this.mix.height = this.mix.clientWidth * widthHeightRatio;
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    let el = this.props.element,
        imageId = el && el.imageId || null;

    if( !imageId ) return <div className="spinner"></div>;

    let filters = el.filters,
        title = el.captionTitle,
        subtitle = el.captionCategory,
        name = el.name,
        image = this.props.images[imageId];

    return (
        <div
            className={ cx("mix", ...filters.map( filter => urlize( filter ) ), s.mix) }
            href={ image.image }
            title={ name }
        >
            <div className={ cx("portfolio-wrapper", s.wrapper) }>
                <img 
                    src={ image.smallImage }
                    alt="" 
                    ref={ mix => this.mix = mix }
                    className={ s.img }
                />
                <div className={ cx("caption", s.caption) }>
                    <div className={ cx("caption-text", s.captionText) }>
                        <a className={ cx("text-title", s.title) }>{ title }</a>
                        <span className={ cx("text-category", s.subtitle) }>{ subtitle }</span>
                    </div>
                    <div className={ cx("caption-bg", s.background) }></div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps({ cart, images }) {
    return { cart, images };
}

export default connect(mapStateToProps)(PortfolioImage);
