import React, { Component } from 'react';
import Detail from "./Detail";
import './index.css';
// import Link from 'Link';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            selectedRecord: {}
        }
    }
    handleRecordClick = async (record, e) => {
        e.preventDefault();
        await this.setState({ ...this.state, selectedRecord: record, showDetail: true });
    }
    render() {
        const { data } = this.props;
        return (
            <div className="home_div">
                {this.state.showDetail &&
                    <Detail details={this.state.selectedRecord} uri="/detail" />
                }
                {!this.state.showDetail && data && <div>
                    <h3>{data.metadata.title}</h3>
                    <table className="center_css">
                        <thead>
                            <tr>
                                <th><h5>Place</h5></th>
                                <th><h5>Magitude</h5></th>
                                <th><h5>Time</h5></th>
                            </tr>
                        </thead>
                        {data &&
                            data.features.map((record, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr key={record.properties.id}><h6>
                                            <a href="/detail" onClick={(e) => this.handleRecordClick(record, e)}>{record.properties.place}</a>
                                        </h6>
                                            <td><h6>{record.properties.mag}</h6></td>
                                            <td><h6>{record.properties.time}</h6></td>
                                        </tr>
                                    </tbody>
                                );
                            })
                        }
                    </table>
                </div>
                }
            </div>
        );
    }
}
export default Home;