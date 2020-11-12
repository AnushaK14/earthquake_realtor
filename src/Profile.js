import React, { Component } from 'react';
import './index.css';
class Profile extends Component {

    render() {
        const { profile } = this.props;
        return (
            <div>
                {profile &&
                    <div>
                        <h3 className="center_css">Profile</h3>
                        <br />
                        <table className="profile_table">
                            <tbody>
                                <tr>
                                    <td rowSpan="6">
                                        <img
                                            style={{ width: "75%", height: "6%" }}
                                            src={profile.avatarImage}
                                            alt="Profile Logo"
                                        >
                                        </img>
                                    </td>
                                </tr>
                                <tr><td className="td_css"><h6><b>First Name</b></h6></td>
                                    <td><h6>{profile.firstName}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>Last Name</b></h6></td>
                                    <td><h6>{profile.lastName}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>Phone</b></h6></td>
                                    <td><h6>{profile.phone}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>Email</b></h6></td>
                                    <td><h6>{profile.email}</h6></td></tr>
                                <tr><td className="td_css"><h6><b>Bio</b></h6></td>
                                    <td><h6>{profile.bio}</h6></td></tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}
export default Profile;