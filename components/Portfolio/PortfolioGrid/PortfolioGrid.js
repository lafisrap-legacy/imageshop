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
import s from './PortfolioGrid.css';
import PortfolioImage from '../PortfolioImage'

class PortfolioGrid extends React.Component {

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
    let elements = this.props.portfolio && this.props.portfolio.elements || null;

    if( !elements ) elements = <div className="spinner"></div>;
    else elements = elements.map( element => <PortfolioImage key={ element.imageId } element={ element } />)

    return (
        <div className="portfolio-grid clearfix" id="portfolioList">
            { elements }
        </div>
    );
  }
}

function mapStateToProps({ portfolio }) {
    return { portfolio };
}

export default connect(mapStateToProps)(PortfolioGrid);
