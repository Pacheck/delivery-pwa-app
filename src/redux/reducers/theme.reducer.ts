import { ThemeAction, ThemeValueType } from "../actions/theme.action";

const initialState = {
    isDarkMode: false,
    MAIN_COLOR: '#d90d0d',
    MAIN_TEXT_COLOR: '#121212',
    BACKGROUND_COLOR: '#fff',
    MAIN_BUTTON: '#d90d0d'
};

const darkTheme = {
    MAIN_COLOR: '#121212',
    MAIN_TEXT_COLOR: '#f3f3f3',
    BACKGROUND_COLOR: '#201e1e',
    MAIN_BUTTON: '#d1c708'
}

const lightTheme = {
    MAIN_COLOR: '#d90d0d',
    MAIN_TEXT_COLOR: '#121212',
    BACKGROUND_COLOR: '#fff',
    MAIN_BUTTON: '#d90d0d'
}

export const ThemeReducer = (state = initialState, action: ThemeAction) => {
    switch (action.type) {
        case ThemeValueType.SWITCH_THEME_MODE:
            if (state.isDarkMode)
                return { ...state, isDarkMode: !state.isDarkMode, ...lightTheme };
            return { ...state, isDarkMode: !state.isDarkMode, ...darkTheme };
        default:
            return state;
    }
};
