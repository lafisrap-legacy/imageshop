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
import s from './Canvas.css';

class Canvas extends React.Component {

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
    let image = this.props.images[this.props.imageId],
        canvas = this.props.canvases[this.props.canvas];

    console.assert( image, `Image Id ${this.props.imageId} not found for carousel.`)
    console.assert( canvas, `Canvas ${this.props.canvas} not found for carousel.`)

    return (
        <div className="col-md-7 pull-md-5 hidden-xs my-auto">
            <div className="device-container">
                <div className={`device-mockup ${canvas.name} ${canvas.orientation} ${canvas.color}`}>
                    <div className="device">
                        <div className="screen">
                            <img className="img-fluid" src={image.imageSmall} alt={image.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps({ images, canvases }) {
    return { images, canvases };
}

export default connect(mapStateToProps)(Canvas);
