import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Context as CustomerContext } from "../../context/CustomerContext";

const Customer = () => {
    const { state, getCustomer } = useContext(CustomerContext);
    const { customerId } = useParams();

    useEffect(() => {
        getCustomer(customerId);
    }, [customerId]);

    return (
        <>
            {state.customer && (
                <div className="customer-box customer-details">
                    <div>
                        <figure>
                            <Avatar image={state.customer.avatar} />
                        </figure>
                        <aside>
                            <h2>{state.customer.name}</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Username:</td>
                                        <td>{state.customer.username}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail:</td>
                                        <td>{state.customer.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Cell #:</td>
                                        <td>{state.customer.contact}</td>
                                    </tr>
                                    <tr>
                                        <td>Age:</td>
                                        <td>{state.customer.age}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender:</td>
                                        <td>{state.customer.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>{state.customer.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <NavLink to="/">Go Back</NavLink>
                        </aside>
                    </div>
                </div>
            )}
        </>
    );
};

export default Customer;
