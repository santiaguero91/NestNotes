import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const MainDiv = styled(Box)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100vh;
  top:0;
  right: 0;
  z-index: 2;

`;

export const BackgroundDiv = styled(Box)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
  right: 0;
  transition: 2s;
  z-index: 8;
`;

export const DetailsMainDiv = styled(Box)`
  background-color: rgba(155, 155, 155);
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  width: 65vw;
  height: fit-content;
  z-index: 10;

`;

export const BtnsDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  right: 0;
  align-items: center;
`;

export const CloseBtn = styled(Button)`
  border-radius: 20px;
  color: black;
  transition: 1s;
  @media (max-width: 400px) {
    }
  :hover {
  }
  :focus {
    outline: none;
    border: none;
  }
`;
export const EditDiv = styled(Button)`
  border-radius: 20px;
  color: black;
  transition: 1s;
  @media (max-width: 400px) {
    }
  :hover {
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const GenreDiv = styled(Box)`
  color: black;
  padding: 0 5%;
  border-radius: 25px;
  width: fit-content;
  justify-content: center;
  align-content: center;
  background-color: rgba(222,222,222,1);

  cursor: pointer;
`;

export const CategoriesDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: fit-content;
  margin: 3% auto;
  gap: 1%;
  .special{
    color: black;
    background-color: rgba(255,255,255);
  }
`;

export const DescriptionBox = styled(Box)`
  margin: 1% 5% 5% 5%;
`;


export const TypoDetail = styled(Typography)`
color: black;
/*  font-size: 25px; */ 
@media (max-width: 400px) {
  font-size: 8px;
    }
`;

export const StatusDiv = styled(Box)`
width: fit-content;
height: fit-content;
margin: 0 auto;
display: flex;
flex-direction: row;
`;
