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

const WIDTH_HEIGHT_RATION = 0.663;

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
            >
              {info.name}  
            </a>
          </h5>
        </div>

        <div id={`RoomInfo__collapse${index}`} className="collapse" role="tabpanel" aria-labelledby={`room ${index}`}>
          <div className="card-block">
            {JSON.stringify(info)}
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
