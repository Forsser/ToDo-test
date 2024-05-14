import styled from '@emotion/styled'


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  &.open {
    opacity: 1;
    pointer-events: auto;
  }
`;


const Continer = styled.div`
display: flex;
flex: 1 1 auto;
flex-direction: column;
margin: 20px auto;
gap: 10px;
max-width: 500px;
max-height: 450px;
background: rgba(218, 218, 218, 0.5);
box-shadow: 0 5px 22px 0 rgba( 55, 53, 53, 0.37 );
backdrop-filter: blur( 4px );
border-radius: 10px;
  transform: translateY(-50px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }
`

const TitleContiner = styled.div`
  display: flex;
  gap: 10px;
  `

const Form = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap: 0px 5px;
`

const LabelE = styled.label`
min-width: 70px;
min-height: 50px;
padding: 10px;
border-radius: 10px;
background: rgb(67,242,81);
background: linear-gradient(0deg, #5eeb69 0%, #ddeff2bd 30%);
`
const LabelN = styled.label`
min-width: 70px;
min-height: 50px;
padding: 10px;
border-radius: 10px;
background: rgb(250,251,10);
background: linear-gradient(0deg, rgba(250,251,10,1) 0%, #ddeff2bd 30%);
`
const LabelH = styled.label`
min-width: 70px;
min-height: 50px;
padding: 10px;
border-radius: 10px;
background: rgb(251,78,10);
background: linear-gradient(0deg, rgba(251,78,10,1) 0%, #ddeff2bd 30%);
`


  const P = styled.p`
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #ffffff93;
  border-radius:10px;
/*     &::before{
          content: '';
      position: absolute;
      left:5px;
      top:28px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${({ color }) => color};
      background: linear-gradient(90deg,  ${({ color }) => color} 0%, rgba(20,20,20,0.1) 100%);
      } */
  `

const DateContiner = styled.div`
min-height:100px;
min-width: 250px;
margin-top: 20px;
`

const FormInput = styled.form`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
  gap: 10px;
`


export {Form, LabelE,LabelN,LabelH, Continer, P, DateContiner,FormInput, ModalOverlay, TitleContiner,};