import React from 'react'
import lightMode from '../../assets/lightMode.svg'
import darkMode from '../../assets/darkMode.svg'
import * as S from './styles'


export const NavBar = () => <S.Container>
    <S.ThemeMode>
        <label>
            <div>
                <img src ={darkMode}/>
                <img src ={lightMode}/>
            </div>
            <input type="checkbox"/>
            <span></span>
        </label>
    </S.ThemeMode>

</S.Container>
