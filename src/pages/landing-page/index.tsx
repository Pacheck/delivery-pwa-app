import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerType } from '../../redux/store';
import * as S from './styles'


export const LandingPage = () => {
    const theme = useSelector((state: RootReducerType) => state.theme);
    console.log(theme);

    return (
        <S.Container bgColor={theme.BACKGROUND_COLOR}>

            <S.Content>
                <S.TextBox txtColor={theme.MAIN_TEXT_COLOR}>
                    <h1>Título aqui, tudo o que você precisa.</h1>
                    <h2>Subtítulo logo abaixo pra te explicar melhor o que é isto.</h2>
                </S.TextBox>
                <S.InputCEP>
                    <input type='text' required placeholder='Insira o endereço de entrega' />
                </S.InputCEP>
                <S.CTA btnColor={theme.MAIN_BUTTON}>
                    <button>Buscar</button>
                </S.CTA>
            </S.Content>

        </S.Container>
    )
}

