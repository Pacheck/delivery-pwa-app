export type Order = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    deliveryTime: number;
};

export type UserInformation = {
    name: string;
    cpf: string;
}

export type OrderProps = {
    id: string;
    address: {},
    payment: {},
    orders: Array<Order>
}
