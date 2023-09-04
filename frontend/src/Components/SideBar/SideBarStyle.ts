import styled from "@emotion/styled";
import { Box,Button } from "@mui/material";
import { Colors } from "../../assets/Colors";

export const SideBarDiv = styled(Box)`
 .special{
    background-color: ${Colors.yellowBtns};
 }
`;


export const StatusBtnDiv = styled(Box)`
margin-bottom: 5%;

`;

export const StatusBtn = styled(Button)`
  background-color: ${Colors.roseBtns};
  color: black;
  transition: 2s;
  padding: 10px;
  border-radius: 12px;
  @media (max-width: 400px) {
      font-size: 10px;
      padding: 10px;
    }
  :hover {
    background-color: ${Colors.white};
  }
  :focus {
    outline: none;
    border: none;
  }
`;
