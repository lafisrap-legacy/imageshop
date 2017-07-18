/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint comma-dangle: [2, "never"] */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { urlize } from '../../../src/utils';
import s from './PortfolioImage.css';

const WIDTH_HEIGHT_RATION = 0.663;

class PortfolioImage extends React.Component {

  static propTypes = {
    images: PropTypes.objectOf(PropTypes.object),
    element: PropTypes.shape({
      imageId: PropTypes.number.isRequired,
      captionTitle: PropTypes.string,
      captionCategory: PropTypes.string,
      filters: PropTypes.array
    })
  };

  componentDidMount() {
    this.mix.height = this.mix.clientWidth * WIDTH_HEIGHT_RATION;
  }

  componentWillUnmount() {
  }

  render() {
    const el = this.props.element;
    const imageId = (el && el.imageId) || null;

    if (!imageId) return <div className="spinner" />;

    const filters = el.filters;
    const title = el.captionTitle;
    const subtitle = el.captionCategory;
    const name = el.name;
    const image = this.props.images[imageId];

    return (
      <div
        className={cx('mix', ...filters.map(filter => urlize(filter)), s.mix)}
        href={image.largeImage}
        title={name}
      >
        <div className={cx('portfolio-wrapper', s.wrapper)}>
          <img
            src={image.smallImage}
            alt=""
            ref={(mix) => { this.mix = mix; return null; }}
            className={s.img}
          />
          <div className={cx('caption', s.caption)}>
            <div className={cx('caption-text', s.captionText)}>
              <a className={cx('text-title', s.title)}>{title}</a>
              <span className={cx('text-category', s.subtitle)}>{subtitle}</span>
            </div>
            <div className={cx('caption-bg', s.background)} />
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
