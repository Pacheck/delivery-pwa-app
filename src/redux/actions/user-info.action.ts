import { UserInformation } from "../../types/user-info";

export enum UserInfoActionType {
    SET_USER_NAME = "SET_USER_NAME",
    SET_USER_CPF = "SET_USER_CPF",
    SET_USER_PAYMENT = "SET_USER_PAYMENT",
    SET_USER_ORDERS = "SET_USER_ORDERS",
    SET_USER_ADDRESS = "SET_USER_ADDRESS"
}

export type ActionType = {
    type: UserInfoActionType;
    payload: any
}

export const setUserName = (payload: string) => ({
    type: UserInfoActionType.SET_USER_NAME,
    payload
})
