import styled from "styled-components";
import AddButton from "./AddBotton";
const StyledHeader = styled.div`
    background-color: cornsilk;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


function MyHeader () {
    return(
        <StyledHeader>
        <h1>PlaceHolderTitle <AddButton/></h1>
        </StyledHeader>
    )
}

export default MyHeader;