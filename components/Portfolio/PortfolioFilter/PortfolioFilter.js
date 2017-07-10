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
import { urlize } from '../../../src/utils';
import cx from 'classnames';
import s from './PortfolioFilter.css';
class PortfolioFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allTopic: {}
        }
    }

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
        let filters = this.props.portfolio && this.props.portfolio.filters || null;

        if( !filters ) return <div className="spinner"></div>;

            // Prepare filter tabs
        let tabs = filters.map((filter, i) => {
                return (
                    <li className="nav-item" key={filter.id}>
                        <a
                            className={"nav-link" + (!i? " active":"")}
                            id="home-tab"
                            data-toggle="tab"
                            href={`#${filter.id}`}
                            role="tab" aria-controls={filter.id}
                            aria-expanded={!i?"true":"false"}
                            onClick={() => this.state.allTopic[filter.id].click()}
                        >
                            {filter.name}
                        </a>
                    </li>
                );
            }),

            // Prepare filter buttons
            buttons = filters.map((filter, i) => {

                // Prepare one topic
                let topics = filter.topics.map((topic, i) => {
                    return (
                        <button
                            type="button"
                            className="control btn btn-secondary btn-sm mx-2 mb-4"
                            data-filter={`.${ urlize( topic )}`}
                            key={topic}
                            ref={ topic => !i? this.state.allTopic[filter.id] = topic : null}
                        >
                            {!i?this.props.portfolio.all:topic}
                        </button>
                    )
                });

                // Collect topics
                return (
                    <div 
                        role="tabpanel"
                        className={"tab-pane fade" + (!i?" active show":"")}
                        id={filter.id}
                        key={filter.id}
                        aria-labelledby={filter.id+"_tab"}
                        aria-expanded={!i?"true":"false"}
                    >
                        <div className="controls mt-3">
                            {topics}
                        </div>
                    </div>
                );
            });

        // Collect tabs and buttons
        return (
            <div>
                <ul className="nav nav-tabs" id="portfolio-group" role="tablist">
                    { tabs }
                </ul>
                <div className="tab-content" id="myTabContent">
                    { buttons }
                </div>
            </div>
        );
    }
}

function mapStateToProps({ portfolio }) {
    return { portfolio };
}

export default connect(mapStateToProps)(PortfolioFilter);