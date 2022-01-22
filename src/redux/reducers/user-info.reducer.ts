type Order = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    deliveryTime: number;
};

type UserInformation = {
    name: string;
    cpf: string;
    address: Object;
    payment: Object;
    orders: Array<Order>
}
const initialState: UserInformation = {
    name: '',
    cpf: '',
    address: {},
    payment: {},
    orders: [],
}
export const UserInfoReducer = (action: any, state = initialState) => {
    switch (action.type) {
        case "SET_USER_NAME":
            return { ...state, name: action.payload }
        case "SET_USER_ADDRESS":
            return { ...state, ...action.payload }
        case "SET_USER_CPF":
            return { ...state, cpf: action.payload }
        case "SET_USER_PAYMENT":
            return { ...state, payment: action.payload }
        case "SET_USER_ORDERS":
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
