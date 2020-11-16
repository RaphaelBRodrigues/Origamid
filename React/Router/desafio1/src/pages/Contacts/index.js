import React from 'react'
import * as S from './styled';

function Contacts() {
  return (
    <S.ContactsWrapper>
      <S.ContactsImage src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone-1.jpg" />
      <S.ContactsInfo>
        <S.Title>Entre em contato</S.Title>
        <S.Info>
          raphaelbarbosa.rodrigues@gmail.com <br/>
          96548-2567 <br/>
          Por ai
        </S.Info>
      </S.ContactsInfo>
    </S.ContactsWrapper>
  )
}

export default Contacts
