import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SwitchThemeMode } from '../../redux/actions/theme.action'
import { RootReducerType } from '../../redux/store'
import * as S from './styles'





export const NavBar = () => {
    const dispatch = useDispatch();
    const { MAIN_COLOR, MAIN_TEXT_COLOR } = useSelector((state: RootReducerType) => state.theme);

    return (
        <S.Container mainColor={MAIN_COLOR} >
            <S.ThemeMode mainTextColor={MAIN_TEXT_COLOR}>
                <label>
                    <span>Dark Mode</span>
                    <input type="checkbox" onClick={() => dispatch(SwitchThemeMode())} />
                </label>
            </S.ThemeMode>

        </S.Container>)
}
