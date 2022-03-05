import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar";

const Customer = ({ data: { id, name, username, email, avatar } }) => {
    return (
        <>
            <div className="customer-box">
                <div>
                    <figure>
                        <Avatar image={avatar} />
                    </figure>
                    <aside>
                        <h2>{name}</h2>
                        <p>
                            Username: {username}
                            <br />
                            E-mail: {email}
                        </p>
                        <NavLink to={`/customers/${id}`}>
                            &nbsp;View Details
                        </NavLink>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default Customer;
