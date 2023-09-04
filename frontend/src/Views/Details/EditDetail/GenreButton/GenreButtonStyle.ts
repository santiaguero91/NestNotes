import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const MainDiv = styled(Box)`
height: fit-content;
.special {
    background-color: rgba(244,244,244,0.5);
color: black;
  transition: 1s;
transform:translate(0%,-30%);
border: none;
outline: none;
:focus{
    border: none;
    outline: none;
}

}

.clicked {
background-color: rgba(89,89,89,0.5);
color: black;
  transition: 1s;
  border: none;
    outline: none;
    :focus{
    border: none;
    outline: none;
}
}
`;

export const GenreBtn = styled(Button)`
`;
