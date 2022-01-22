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
    address: Object;
    payment: Object;
    orders: Array<Order>
}
