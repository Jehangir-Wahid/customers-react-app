import React, { useContext, useEffect, useState } from "react";
import Customer from "../../components/Customer";
import NoRecord from "../../components/NoRecord";
import { Context as CustomerContext } from "../../context/CustomerContext";

const Customers = () => {
    const { state, getCustomers } = useContext(CustomerContext);
    const [username, setUsername] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage, setCustomersPerPage] = useState(6);

    useEffect(() => {
        if (!state.customers) {
            getCustomers();
        }
    }, []);

    const onClickPagination = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

    var customers = [];
    var pageNumbers = [];

    if (state.customers) {
        customers = state.customers.slice(
            indexOfFirstCustomer,
            indexOfLastCustomer
        );

        for (
            let i = 1;
            i <= Math.ceil(state.customers.length / customersPerPage);
            i++
        ) {
            pageNumbers.push(i);
        }
    }

    const renderPageNumbers = pageNumbers.map((pageNumber) => {
        return (
            <li
                key={pageNumber}
                id={pageNumber}
                onClick={(pageNumber) => onClickPagination(pageNumber)}
            >
                {pageNumber}
            </li>
        );
    });

    return (
        <>
            {customers ? (
                <div>
                    <input
                        type="text"
                        className="customer-search"
                        value={username}
                        placeholder="Search by Username"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                    {customers
                        .filter((customer) =>
                            customer.username.includes(username)
                        )
                        .map((customer, index) => (
                            <Customer key={index} data={customer} />
                        ))}
                    {pageNumbers && (
                        <ul className="pagination">{renderPageNumbers}</ul>
                    )}
                </div>
            ) : (
                <NoRecord />
            )}
        </>
    );
};

export default Customers;
