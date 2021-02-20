import styled from 'styled-components'

export const OutContainer = styled.div.attrs(() =>({}))`
  padding-left: 21%;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    position: absolute;
    max-width: 311px; 
  }

  @media (max-width: 480px) {
    width: 311px;
    height: 381px;
    padding: 28px;
    top: 15%;
    left: 15%;
    align-items: center;
    justify-items: center;
    margin: auto;
    border-radius: 8px;
  }
`

export const Form = styled.form.attrs(() =>({}))`
  height: auto;
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2{
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    color: ${ props => props.theme.colors.primary };

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      width: 139px;
    }
  }

  @media (max-width: 768px) {
      width: 297px;
  }

  @media (max-width: 480px) {
    width: 256px;
    align-items: center;
    transform: translateY(50px)
  }
`

export const Subtitle = styled.p.attrs(() =>({}))`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${ props => props.theme.colors.secondary };
  margin: 10px 0 20px 0;

  @media (max-width: 480px) {
    width: 255px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 0px;
  }
`

export const Label = styled.label.attrs(() =>({}))`
  color: ${ props => props.theme.colors.primary };
  text-transform: uppercase;
  font-size: 10px;
  line-height: 48px;

  @media (max-width: 480px) {
    width: 256px;
  }
`

export const Input = styled.input.attrs(() =>({}))`
  font-size: 10px;
  line-height: 48px;
  border: 1px solid ${ props => props.theme.colors.secondary };
  border-radius: 8px;
  padding-left: 17px;
  margin-bottom: 10px;
  margin-top: -10px;
  color: ${props => props.theme.colors.primary};
  outline: 0;

  @media (max-width: 480px) {
    width: 256px;
  }
`

export const Button = styled.button.attrs(() =>({}))`
  border-radius: 8px;
  width: 256px;
  height: 48px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  margin: 45px 0 20px 0;
  outline: 0;
  border: none;

  @media (max-width: 480px) {
    width: 168px;
  }
`

export const Link = styled.p.attrs(() =>({}))`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${ props => props.theme.colors.secondary };

  a{
    color: ${ props => props.theme.colors.primary };
    text-decoration: none;

    @media (max-width: 480px) {
      color: white;
    }
  }

  
`