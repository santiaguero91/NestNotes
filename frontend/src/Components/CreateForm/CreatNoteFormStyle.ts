import styled from '@emotion/styled'
import { Box,Typography,TextField,Button, FormLabel } from '@mui/material'

export const FormMainDiv = styled(Box)`
  background-color: transparent;
  height: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: 1% 8%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`
export const StyldTypo = styled(Typography)`
  color: black;
  font-size: larger;
  font-weight: 700;
  margin-top: 5%;
`;

export const GenresSelected = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  padding: 0 30%
`;

export const StyldTextField = styled(TextField)`
  background-color: rgb(237, 234, 229);
  border-radius: 25px;
  width: 20vw;
  margin: 5%;
`;

export const StyldFormButton = styled(Button)`
  background-color: rgb(237, 234, 229);
  color: black;
  transition: 2s;
  border-radius: 25px;
  margin: 5% auto;
  width: 10vw;

  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;


export const StyldFormLabel = styled(FormLabel)`
  margin: 0% 0 10% 0;
  width: 60%;
`;
