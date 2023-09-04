import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const DeleteBtnStlyd = styled(Button)`
  background-color: transparent;
  color: black;
  transition: 2s;
  border-radius: 25px;
  margin: 0 auto;   
  display: flex;
  width: 50%;
  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const CloseMainDiv = styled.div`
`;