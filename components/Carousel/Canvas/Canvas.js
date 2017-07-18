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
import s from './Canvas.css';

class Canvas extends React.Component {

  static propTypes = {
    images: PropTypes.objectOf(PropTypes.object),
    frames: PropTypes.objectOf(PropTypes.object),
    frameName: PropTypes.string,
    imageId: PropTypes.string
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    if (!this.props.images || !this.props.frames) return <div className="spinner" />;

    const image = this.props.images[this.props.imageId];
    const frame = this.props.frames[this.props.frameName];

    return (
      <div className="col-md-7 pull-md-5 hidden-xs my-auto">
        <div className={cx('device-container', s.deviceContainer)}>
          <div className={cx('device-mockup', frame.frameId, frame.canvas, 'landscape', 'black', s.deviceMockup)}>
            <div className={cx('device', s.device)}>
              <div className={cx('screen', s.screen)}>
                <img className={cx('img-fluid', s.img)} src={image.mediumImage} alt={image.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ images, frames }) {
  return { images, frames };
}

export default connect(mapStateToProps)(Canvas);
