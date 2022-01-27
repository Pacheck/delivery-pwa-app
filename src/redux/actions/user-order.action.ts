import { OrderProps } from "../../types/user-info";

export enum UserOrdersType {
    SET_ADDRESS = "SET_ADDRESS",
    SET_PAYMENT = "SET_PAYMENT",
    SET_ORDERS = "SET_ORDERS",
}

interface OderAction extends OrderProps {
    quantity: number;
}
export type ActionType = {
    type: UserOrdersType;
    payload: OderAction;
}
