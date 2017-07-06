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
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import s from './styles.css';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
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

export default HomePage;
