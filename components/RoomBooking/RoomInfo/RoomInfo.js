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

import s from './RoomInfo.css';
import { API_BASE_URL } from '../../../src/actions';

class RoomInfo extends React.Component {

  static propTypes = {
    info: PropTypes.object
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { index, info } = this.props;

    if (isEmpty(info)) return <div className="spinner" />;    

    return (
      <div className="card">
        <div className="card-header" role="tab" id={`RoomInfo__cardHeader${index}`}>
          <h5 className="mb-0">
            <a 
              data-toggle="collapse"
              data-parent="#roombooking__roomlist"
              href={`#RoomInfo__collapse${index}`}
              aria-expanded="true"
              aria-controls={`RoomInfo__collapse${index}`}
              className={cx(s.roomHeader)}
            >
              <div className="row">
                <div className="col-lg-4 col-xs-12">
                  <span className={cx(s.headerItem, s.roomName)}>{info.name}</span>
                  <br />
                  <span className={cx(s.headerItem, s.roomCapacity)}>Capacity: {info.capacity}</span>
                  <span className={cx(s.headerItem, s.roomSize)}>{info.size}</span>
                </div>
                <div className="col-lg-8 col-xs-12">
                  <span>Time Schedule</span>
                </div>
              </div>
            </a>
          </h5>
        </div>

        <div id={`RoomInfo__collapse${index}`} className="collapse" role="tabpanel" aria-labelledby={`room ${index}`}>
          <div className="card-block">
            <div className="row">
              <div className="col-lg-9 col-xs-12">
                <div className={cx(s.headerItem, s.roomName)}>Location</div>
                <div className={cx(s.headerItem)}>{info.location}</div>
                <div className={cx(s.headerItem, s.roomName)}>Equipment</div>
                <div className={cx(s.headerItem)}>{info.equipment.join(", ")}</div>
              </div>
              <div className="col-lg-3 col-xs-12">
                {info.images.map(image => <img src={`${API_BASE_URL}/${image}`} className={cx("img", "img-fluid", s.roomImage)} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ }) {
  return { };
}

export default connect(mapStateToProps)(RoomInfo);
