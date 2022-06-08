import styled from "styled-components"
import { useSelector } from "react-redux"

const Div = styled.div`
    /* border: 5px solid red; */
    margin: 10px;
    background-color: ${(props) => props.bgColor};
`


const Div2 = styled(Div)`
    /* border: 5px solid red; */
    display: flex;
    align-items: center;
`

function Left1(props) {
    return (
        <Div bgColor="#435DBF">
            <h1>Left1</h1>
            <Left2></Left2>
        </Div>
    )
}
function Left2(props) {
    return (
        <Div bgColor="#5292CA">
            <h1>Left2</h1>
            <Left3></Left3>
        </Div>
    )
}
function Left3(props) {
    const number = useSelector((state) => state.number)
    return (
        <Div2 bgColor="#3EBF92">
            <h1>Left3 : {number}</h1>
        </Div2>
    )
}

export default Left1
