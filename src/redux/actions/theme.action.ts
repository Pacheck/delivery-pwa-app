export enum ThemeValueType {
    SWITCH_THEME_MODE = "SWITCH_THEME_MODE",
}

export type ThemeAction = {
    type: ThemeValueType;
}

export const SwitchThemeMode = () => ({
    type: ThemeValueType.SWITCH_THEME_MODE
})
