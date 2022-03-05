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
                            <p>
                                Username: {state.customer.username}
                                <br />
                                E-mail: {state.customer.email}
                                <br />
                                Phone number: {state.customer.contact}
                                <br />
                                Age: {state.customer.age}
                                <br />
                                Gender: {state.customer.gender}
                                <br />
                                Address: {state.customer.address}
                            </p>
                            <NavLink to="/">Go Back</NavLink>
                        </aside>
                    </div>
                </div>
            )}
        </>
    );
};

export default Customer;
