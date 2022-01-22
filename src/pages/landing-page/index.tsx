import React from 'react'
import * as S from './styles'


export const LandingPage = () => <S.Container>

    <S.Content>
        <S.TextBox>
            <h1>Título aqui, tudo o que você precisa.</h1>
            <h2>Subtítulo logo abaixo pra te explicar melhor o que é isto.</h2>
        </S.TextBox>
        <S.InputCEP>
            <input type='text' required placeholder='Insira o endereço de entrega'/>
        </S.InputCEP>
        <S.CTA>
            <button>Buscar</button>
        </S.CTA>
    </S.Content>

</S.Container>
