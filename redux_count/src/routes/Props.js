import Left1 from "../components/props/Left"
import Root from "../components/props/Root"
import styled from "styled-components"
import React, { useState } from "react";
import Right1 from "../components/props/Right";

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
    const [number, setNumber] = useState(1);
    return (
        <Div>
            <Root />
            <Div2>
                <Left1 number={number} />
                <Right1 onIncrease={() => setNumber((prev) => prev + 1)} />
            </Div2>
        </Div>
    )

}

export default Props