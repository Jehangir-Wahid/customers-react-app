import React, { useContext, useEffect, useState } from "react";
import Customer from "../../components/Customer";
import NoRecord from "../../components/NoRecord";
import { Context as CustomerContext } from "../../context/CustomerContext";
import qs from "qs";
import { createBrowserHistory } from "history";

const Customers = () => {
    const { state, getCustomers } = useContext(CustomerContext);
    const [username, setUsername] = useState("");
    const [validationError, setValidationError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage, setCustomersPerPage] = useState(6);

    const history = createBrowserHistory();

    useEffect(() => {
        const filterParams = history.location.search.substring(1);
        const filtersFromParams = qs.parse(filterParams);
        if (filtersFromParams.page) {
            setCurrentPage(Number(filtersFromParams.page));
        } else if (filtersFromParams.username) {
            setUsername(filtersFromParams.username);
        }

        getCustomers();
    }, []);

    useEffect(() => {
        history.push(`?username=${username}`);
    }, [username]);

    useEffect(() => {
        history.push(`?page=${currentPage}`);
    }, [currentPage]);

    const onClickPagination = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

    var customers = [];
    var pageNumbers = [];
    var filteredCustomers = [];

    if (state.customers) {
        filteredCustomers = state.customers.filter((customer) =>
            customer.username.includes(username.toLowerCase())
        );

        if (filteredCustomers.length >= customersPerPage) {
            customers = filteredCustomers.slice(
                indexOfFirstCustomer,
                indexOfLastCustomer
            );

            pageNumbers = Array.from(
                {
                    length: Math.ceil(
                        state.customers.length / customersPerPage
                    ),
                },
                (_, page) => ({ page: page + 1 })
            );
        } else {
            customers = filteredCustomers;
        }
    }

    const renderPageNumbers = pageNumbers.map(({ page }) => {
        return (
            <li
                key={page}
                id={page}
                onClick={(page) => onClickPagination(page)}
            >
                {page}
            </li>
        );
    });

    return (
        <>
            {customers ? (
                <div>
                    <div className="search-container">
                        <input
                            type="text"
                            className="customer-search"
                            value={username}
                            placeholder="Search by Username"
                            onChange={(event) => {
                                if (
                                    event.target.value.match(
                                        /^[a-zA-Z0-9\_\.\-]*$/
                                    )
                                ) {
                                    setValidationError(false);
                                    setUsername(event.target.value);
                                } else {
                                    setValidationError(true);
                                }
                            }}
                        />
                        {validationError && (
                            <div className="validation-info">
                                Please enter only alphanumeric, underscore(_),
                                dot(.), and hyphen(-).
                            </div>
                        )}
                    </div>
                    {customers.map((customer, index) => (
                        <Customer key={index} data={customer} />
                    ))}
                    {filteredCustomers.length >= 6 ? (
                        <div className="pagination">
                            <ul>{renderPageNumbers}</ul>
                        </div>
                    ) : null}
                </div>
            ) : (
                <NoRecord />
            )}
        </>
    );
};

export default Customers;
