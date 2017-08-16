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

import s from './PortfolioGrid.css';
import PortfolioImage from '../PortfolioImage';

class PortfolioGrid extends React.Component {

  static propTypes = {
    portfolio: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      all: PropTypes.string,
      filters: PropTypes.array,
      elements: PropTypes.array
    })
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    let elements = (this.props.portfolio && this.props.portfolio.elements) || null;

    if (!elements) {
      elements = <div className="spinner" />;
    } else {
      elements =
        elements.map(element => <PortfolioImage key={element.imageId} element={element} />);
    }

    return (
      <div className={cx('portfolio-grid', 'clearfix', s.portfolioGrid)} id="portfolioList">
        { elements }
      </div>
    );
  }
}

function mapStateToProps({ portfolio }) {
  return { portfolio };
}

export default connect(mapStateToProps)(PortfolioGrid);
