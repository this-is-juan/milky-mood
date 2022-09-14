import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
  /*max-width: 440px;*/
`

export const H3 = styled.h3`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  color: #0519ce;
`

export const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700) {
    font-size: 14px;
  }
`

export const Socials = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 0 16px;
  }
`

export const H4 = styled.h4`
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;
  color: #0519ce;

  @media (max-width: 700) {
    font-size: 24px;
  }
`

export const SuccessContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center:
  margin: 50px auto;
  text-align: center;
`
