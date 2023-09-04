import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Colors } from "../../assets/Colors";

export const CardMainDiv = styled(Box)`
  background-color: ${Colors.blueCards};
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
  padding: 0 5% 0 5%;
  align-items: center;
  border-radius: 25px;
  padding: 1% ;
  margin: 0.5% 0;

  &.special {
    background-color: ${Colors.greyCards};
    color: black;
    text-decoration: line-through;

  }

`;
