import { UserInformation } from '../../types/user-info';
import { UserInfoActionType, ActionType } from '../actions/user-info.action';

const initialState: UserInformation = {
    name: '',
    cpf: '',
    address: {},
    payment: {},
    orders: [],
}
export const UserInfoReducer = (action: ActionType, state = initialState) => {
    switch (action.type) {
        case UserInfoActionType.SET_USER_NAME:
            return { ...state, name: action.payload }
        case UserInfoActionType.SET_USER_ADDRESS:
            return { ...state, ...action.payload }
        case UserInfoActionType.SET_USER_CPF:
            return { ...state, cpf: action.payload }
        case UserInfoActionType.SET_USER_PAYMENT:
            return { ...state, payment: action.payload }
        case UserInfoActionType.SET_USER_ORDERS:
            const orderIndex = state.orders.findIndex(order => order.id === action.payload.id);
            if (orderIndex > -1) {
                const newOrders = [...state.orders, { ...state.orders[orderIndex], quantity: state.orders[orderIndex].quantity + 1 }];
                return { ...state, order: newOrders }
            }

            return { ...state, orders: [...state.orders, action.payload] }
        default:
            return state;
    }
} 
