import React, { Component } from 'react';
import './index.css';
class Detail extends Component {

    render() {
        const { details } = this.props;
        return (
            <div>
                {details &&
                    <div>
                        <h3 className="center_css">{details.properties.title}</h3>
                        <br />
                        <table className="detail_table">
                            <tbody>
                                <tr><td className="td_css"><h6><b>Place</b></h6></td>
                                    <td><h6>{details.properties.place}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>Magnitude</b></h6></td>
                                    <td><h6>{details.properties.mag}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>time</b></h6></td>
                                    <td><h6>{details.properties.time}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>status</b></h6></td>
                                    <td><h6>{details.properties.status}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>tsunami</b></h6></td>
                                    <td><h6>{details.properties.tsunami}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>type</b></h6></td>
                                    <td><h6>{details.properties.type}</h6></td></tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}
export default Detail;