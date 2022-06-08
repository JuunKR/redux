import styled from "styled-components"

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
            <h1>Left1 : {props.number}</h1>
            <Left2 number={props.number} ></Left2>
        </Div>
    )
}
function Left2(props) {
    return (
        <Div bgColor="#5292CA">
            <h1>Left2: {props.number}</h1>
            <Left3 number={props.number} ></Left3>
        </Div>
    )
}
function Left3(props) {
    return (
        <Div2 bgColor="#3EBF92">
            <h1 number={props.number} >Left3 : {props.number}</h1>
        </Div2>
    )
}

export default Left1
