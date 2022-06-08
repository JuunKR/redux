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



function Right1(props) {
    return (
        <Div bgColor="#435DBF">
            <h1>Right1</h1>
            <Right2 onIncrease={() => { props.onIncrease() }}></Right2>
        </Div>
    )
}

function Right2(props) {
    return (
        <Div bgColor="#5292CA">
            <h1>Right2</h1>
            <Right3 onIncrease={() => { props.onIncrease() }}></Right3>

        </Div >
    )
}


function Right3(props) {
    return (
        <Div2 bgColor="#3EBF92">
            <h1>Right3</h1>
            <input type="button" value="+" onClick={() => { props.onIncrease() }}></input>
        </Div2>
    )
}



export default Right1
