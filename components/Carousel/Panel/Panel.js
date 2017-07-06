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
import s from './Panel.css';

class Panel extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    let image = this.props.images[this.props.imageId];

    console.assert( image, `Image Id ${this.props.imageId} not found for carousel.`)

    return (
        <div className="col-md-5 push-md-7 my-auto">
            <div className="project-details">
                <span className="project-name">{ image.name }</span>
                <span className="project-description">{ image.description }</span>
                <hr className="colored" />
            </div>
        </div>
    );
  }
}

function mapStateToProps({ images }) {
    return { images };
}

export default connect(mapStateToProps)(Panel);
