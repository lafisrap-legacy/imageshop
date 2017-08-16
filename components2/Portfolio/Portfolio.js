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

import s from './Portfolio.css';
import PortfolioFilter from './PortfolioFilter';
import PortfolioGrid from './PortfolioGrid';

class Portfolio extends React.Component {

  static propTypes = {
    portfolio: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      all: PropTypes.string,
      filters: PropTypes.array,
      elements: PropTypes.array
    })
  };

  componentDidUpdate() {
    global.$('.mix').magnificPopup({
      type: 'image',
      image: {
        titleSrc: 'title'
      }
    });

    global.mixitup(document.querySelector('#portfolioList'));
  }

  componentWillUnmount() {
  }

  render() {
    const portfolio = this.props.portfolio;

    if (!portfolio) return <div className="spinner" />;

    return (
      <section className={cx('page-section', s.pageSection)}>
        <div className="container text-center wow fadeIn">
          <h2>{portfolio.title}</h2>
          <hr className="colored" />
          <p>{portfolio.subtitle}</p>
          <div className="btn btn-primary">OK</div>

          <PortfolioFilter />
          <PortfolioGrid />
        </div>
      </section>
    );
  }
}

function mapStateToProps({ portfolio }) {
  return { portfolio };
}

export default connect(mapStateToProps)(Portfolio);
