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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import s from './styles.css';
import { fetchImages, fetchFrames } from '../actions';

class HomePage extends React.Component {

  static propTypes = {
    fetchImages: PropTypes.func.isRequired,
    fetchFrames: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchFrames();
  }

  render() {
    return (
      <div>
        <Layout className={s.content} />
        <Portfolio />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchImages, fetchFrames }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);
