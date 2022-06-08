import Left1 from "../components/redux/Left"
import Root from "../components/redux/Root"
import styled from "styled-components"
import React, { useState } from "react";
import Right1 from "../components/redux/Right";

const Div = styled.div`
    /* border: 5px solid red; */
    margin: 10px;
    background-color: #8686E6 ;
`
const Div2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

function Props() {
    return (
        <Div>
            <Root />
            <Div2>
                <Left1 />
                <Right1 />
            </Div2>
        </Div>
    )

}

export default Props