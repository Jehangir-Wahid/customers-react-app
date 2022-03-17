import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar";

const Customer = ({ data: { _id, name, username, email, avatar } }) => {
    return (
        <>
            <div className="customer-box">
                <div>
                    <figure>
                        <Avatar image={avatar} />
                    </figure>
                    <aside>
                        <h2>{name}</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Username:</td>
                                    <td>{username}</td>
                                </tr>
                                <tr>
                                    <td>E-mail:</td>
                                    <td>{email}</td>
                                </tr>
                            </tbody>
                        </table>
                        <NavLink to={`/customers/${_id}`}>
                            &nbsp;View Details
                        </NavLink>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default Customer;
