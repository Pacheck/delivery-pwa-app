import React from 'react'
import * as S from './styles'


export const NavBar = () => <S.Container>
    <S.ThemeMode>
    <label>
        <span>Dark Mode</span>
        <input type="checkbox"/>
    </label>
    </S.ThemeMode>

</S.Container>
