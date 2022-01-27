import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SwitchThemeMode } from '../../redux/actions/theme.action'
import { RootReducerType } from '../../redux/store'

import lightMode from '../../assets/lightMode.svg'
import darkMode from '../../assets/darkMode.svg'

import * as S from './styles'



export const NavBar = () => {
    const dispatch = useDispatch();
    const { MAIN_COLOR, MAIN_TEXT_COLOR } = useSelector((state: RootReducerType) => state.theme);

    return (
        <S.Container mainColor={MAIN_COLOR} >
            <S.ThemeMode mainTextColor={MAIN_TEXT_COLOR}>
                <label>
                    <div>
                        <img src={darkMode} alt="theme" />
                        <img src={lightMode} alt="theme" />
                    </div>
                    <input type="checkbox" onClick={() => dispatch(SwitchThemeMode())} />
                    <span></span>
                </label>
            </S.ThemeMode>

        </S.Container>)
}
