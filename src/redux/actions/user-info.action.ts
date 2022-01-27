import { UserInformation } from "../../types/user-info";

export enum UserInfoActionType {
    SET_USER_NAME = "SET_USER_NAME",
    SET_USER_CPF = "SET_USER_CPF"
}

export type ActionType = {
    type: UserInfoActionType;
    // payload: UserInformation;
    payload: string;
}

export const setUserName = (payload: string) => ({
    type: UserInfoActionType.SET_USER_NAME,
    payload
})

export const setUserCpf = (payload: string) => ({
    type: UserInfoActionType.SET_USER_CPF,
    payload
})
