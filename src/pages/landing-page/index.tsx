import React from 'react'
import * as S from './styles'


export const LandingPage = () => <S.Container>
    <main>
        <div className='Content'>
            <div className ='TextBox'>
                <h1>Título aqui, tudo o que você precisa.</h1>
                <h2>Subtítulo logo abaixo pra te explicar melhor o que é isto.</h2>
            </div>
            <div className='InputCEP'>
                <input type='text' required placeholder='Insira o endereço de entrega'/>
            </div>
            <div className ='CTA'>
                <button>Buscar</button>
            </div>
        </div>
    </main>

</S.Container>
