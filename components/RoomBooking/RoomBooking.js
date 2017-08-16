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
import { isEmpty } from 'lodash';

import s from './RoomBooking.css';
import DatePicker from '../DatePicker';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

class RoomBooking extends React.Component {

  static propTypes = {
    portfolio: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      all: PropTypes.string,
      filters: PropTypes.array,
      elements: PropTypes.array
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      date: "today",
      filteredList: null
    };
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  setFilteredList(list) {
    this.filteredList = list;
  }

  render() {
    return (
      <section className={cx('room-booking-section', s.section)}>
        <div className="container text-center fadeIn">
          <div className={cx('row', s.row)}>
            <DatePicker date={this.state.date}/>
            <RoomFilter setFilteredList={list => this.setFilteredList(list)} />
          </div>
          <div className={cx('row', s.row)}>
            <RoomList date={this.state.date} />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ rooms }) {
  return { rooms };
}

export default connect(mapStateToProps)(RoomBooking);
