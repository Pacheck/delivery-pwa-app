import { ThemeAction, ThemeValueType } from "../actions/theme.action";

const initialState = {
    isDarkMode: false,
    MAIN_COLOR: '#FF6B00',
    MAIN_TEXT_COLOR: '#121212',
    BACKGROUND_COLOR: '#fff',
    MAIN_BUTTON: '#FF6B00'
};

const darkTheme = {
    MAIN_COLOR: '#121212',
    MAIN_TEXT_COLOR: '#f3f3f3',
    BACKGROUND_COLOR: '#201e1e',
    MAIN_BUTTON: '#CF80FF',
}

const lightTheme = {
    MAIN_COLOR: '#FF6B00',
    MAIN_TEXT_COLOR: '#803600',
    BACKGROUND_COLOR: '#fff',
    MAIN_BUTTON: '#FF6B00'
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
