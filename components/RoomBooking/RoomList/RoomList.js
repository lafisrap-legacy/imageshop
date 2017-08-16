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

import s from './RoomList.css';
import RoomInfo from '../RoomInfo';

class RoomList extends React.Component {

  static propTypes = {

  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const rooms = this.props.rooms;

    if (isEmpty(rooms)) return <div className="spinner" />;    

    return (
      <div className={cx('room-list', 'clearfix', s.roomlist)}>
        <div id="roombooking__roomlist" role="tablist" aria-multiselectable="true">
          {this.props.rooms.map((room, i) => <RoomInfo key={`${i}_{room.name}`} index={i} info={room} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ rooms }) {
  return { rooms };
}

export default connect(mapStateToProps)(RoomList);
