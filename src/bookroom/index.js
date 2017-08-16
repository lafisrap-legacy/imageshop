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
import RoomBooking from '../../components/RoomBooking';
import s from './styles.css';
import { fetchRooms } from '../actions';

class HomePage extends React.Component {

  static propTypes = {
    fetchRooms: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchRooms("today");
  }

  render() {
    return (
      <div>
        <RoomBooking />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRooms }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);
