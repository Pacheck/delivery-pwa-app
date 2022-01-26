import { UserInformation } from '../../types/user-info';
import { UserInfoActionType, ActionType } from '../actions/user-info.action';

const initialState: UserInformation = {
    name: '',
    cpf: '',
}

export const UserInfoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case UserInfoActionType.SET_USER_NAME:
            return { ...state, name: action.payload }
        case UserInfoActionType.SET_USER_CPF:
            return { ...state, cpf: action.payload }
        default:
            return state;
    }
};
