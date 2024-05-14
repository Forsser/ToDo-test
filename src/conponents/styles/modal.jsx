import styled from '@emotion/styled'


const AddTask = styled.button`
margin-bottom: 20px;
left: 50%;
transform: translateX(-50%);
width: 150px;
padding: 20px;
background-color: rgba(255, 255, 255, 0.9);
border-radius: 30px;
backdrop-filter: blur( 10px );
    &:active{
        background-color:   rgba(255, 255, 255, 0.5);
    }
`

const CloseModal = styled.button`
position: fixed;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
width: 60px;
padding: 20px;
background-color: rgba(255, 255, 255, 0.9);
border-radius: 50%;
backdrop-filter: blur( 10px );
    &:active{
        background-color:   rgba(255, 255, 255, 0.5);
    }
`

export {AddTask,CloseModal}