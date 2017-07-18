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
import s from './Panel.css';

class Panel extends React.Component {

  static propTypes = {
    images: PropTypes.objectOf(PropTypes.object),
    frames: PropTypes.objectOf(PropTypes.object),
    frameName: PropTypes.string,
    imageId: PropTypes.number
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    if (!this.props.images) return <div className="spinner" />;

    const image = this.props.images[this.props.imageId];
    const frame = this.props.frames[this.props.frameName];

    return (
      <div className="col-md-5 push-md-7 my-auto">
        <div className={cx('project-details', s.projectDetails)}>
          <span className="project-name">{image.name}</span>
          <span className="project-description">{image.description}</span>
          <span className="project-frame">{frame.maxNumber}</span>
          <hr className="colored" />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ images, frames }) {
  return { images, frames };
}

export default connect(mapStateToProps)(Panel);
