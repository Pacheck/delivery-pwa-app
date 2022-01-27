import { OrderProps } from "../../types/user-info";
import { ActionType, UserOrdersType } from "../actions/user-order.action";

const initialState: OrderProps = {
    id: '',
    address: {},
    payment: {},
    orders: []
};
export function UserOrderReducer(state = initialState, action: ActionType) {
    const { SET_ADDRESS, SET_PAYMENT, SET_ORDERS } = UserOrdersType;
    switch (action.type) {
        case SET_ADDRESS:
            return { ...state, address: action.payload }
        case SET_PAYMENT:
            return { ...state, payment: action.payload };
        case SET_ORDERS:
            const orderIndex = state.orders.findIndex(order => order.id === action.payload.id);
            if (orderIndex > -1) {
                const newOrders = [...state.orders, { ...state.orders[orderIndex], quantity: state.orders[orderIndex].quantity + action.payload.quantity }];
                return { ...state, orders: newOrders }
            }

            return { ...state, orders: [...state.orders, action.payload] }
        default:
            return state;
    }
}
