import createDataContext from "../createDataContext";
import CustomerService from "../../services/CustomerService";

const customerReducer = (state, action) => {
    switch (action.type) {
        case "get_customers":
            return { ...state, customers: action.payload };
        case "get_customer":
            return { ...state, customer: action.payload };
        default:
            return state;
    }
};

const getCustomers = (dispatch) => {
    return async () => {
        try {
            const response = await CustomerService.get("/customers");
            console.log("Customers: ", response.data);
            dispatch({
                type: "get_customers",
                payload: response.data,
            });
            return true;
        } catch (error) {
            console.log(error);
        }
    };
};

const getCustomer = (dispatch) => {
    return async (customerId) => {
        try {
            console.log("customerID: ", customerId);

            const response = await CustomerService.get(
                `/customers/${customerId}`
            );
            console.log("Customer: ", response.data);
            dispatch({
                type: "get_customer",
                payload: response.data,
            });
            return true;
        } catch (error) {
            console.log(error);
        }
    };
};

export const { Provider, Context } = createDataContext(
    customerReducer,
    {
        getCustomers,
        getCustomer,
    },
    {}
);
