import styled from "styled-components";
import * as styles from '../common/common.styled'
import Input from "../components/ShadowInput";
import { useState } from "react";

const Container = styled(styles.StyledContainer)`
    outline: black solid 2px;
    display: flex;
    justify-content: space-between;
    padding: 0;
`
const Inputs = styled.div`
    width: 47.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 900px){
        width: 100%;
    }
    @media (max-width: 500px){
        padding: 0.5rem;
    }
`
const CanvasContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px){
        display: none;
    }
`
const Canvas = styled.div`
    border: darkgray solid 2px;
    background-color: darkgray;
    width: 50%;
    height: 50%;
    margin: 10rem;
    box-shadow: ${props => props.$xShadow}px ${props => props.$yShadow}px ${props => props.$blurNum}px ${props => props.$spreadNum}px rgba(${props => props.$rValue}, ${props => props.$gValue}, ${props => props.$bValue}, ${props => props.$oValue}) ${props => props.$inset ? 'inset' : ''};
`

export default function Shadow(){
    const [xShadow, setXShadow] = useState(0)
    const [yShadow, setYShadow] = useState(0)
    const [blurNum, setBlurNum] = useState(0)
    const [spreadNum, setSpreadNum] = useState(0)
    const [rValue, setRvalue] = useState(0)
    const [gValue, setGvalue] = useState(0)
    const [bValue, setBvalue] = useState(0)
    const [oValue, setOvalue] = useState(1)
    const [inset, setInset] = useState(true)
    const [xDisplay, setXDisplay] = useState(0)
    const [yDisplay, setYDisplay] = useState(0)
    const [blurDisplay, setBlurDisplay] = useState(0)
    const [spreadDisplay, setSpreadDisplay] = useState(0)
    const [oDisplay, setODisplay] = useState(1)
    return(
        <>
            <Container>
                <Inputs>
                    <Input
                        label={'x-offset'}
                        value={xDisplay}
                        min={-150}
                        max={150}
                        step={1}
                        set={setXShadow}
                        setDisplay={setXDisplay}
                        shadow/>
                    <Input
                        label={'y-offset'}
                        value={yDisplay}
                        min={-150}
                        max={150}
                        step={1}
                        set={setYShadow}
                        setDisplay={setYDisplay}
                        shadow/>
                    <Input
                        label={'blur-radius'}
                        value={blurDisplay}
                        min={0}
                        max={150}
                        step={1}
                        set={setBlurNum}
                        setDisplay={setBlurDisplay}/>
                    <Input
                        label={'spread-radius'}
                        value={spreadDisplay}
                        min={-150}
                        max={150}
                        step={1}
                        set={setSpreadNum}
                        setDisplay={setSpreadDisplay}
                        shadow/>
                    <Input
                        color
                        label={'Shadow color:'}
                        setR={setRvalue}
                        setG={setGvalue}
                        setB={setBvalue}
                        setO={setOvalue}/>
                    <Input
                        min={0}
                        max={1}
                        step={0.1}
                        label={'Shadow opacity:'}
                        value={oDisplay}
                        set={setOvalue}
                        setDisplay={setODisplay}
                        opacity/>
                    <Input
                        check
                        set={setInset}/>
                </Inputs>
                <Inputs>
                    <CanvasContainer>
                        <Canvas
                            $xShadow={xShadow}
                            $yShadow={yShadow}
                            $blurNum={blurNum}
                            $spreadNum={spreadNum}
                            $rValue={rValue}
                            $gValue={gValue}
                            $bValue={bValue}
                            $oValue={oValue}
                            $inset={inset}/>
                    </CanvasContainer>
                    <Input text label={'box shadow code:'} disabled={true} displayValue={`box-shadow: ${xShadow}px ${yShadow}px ${blurNum}px ${spreadNum}px rgba(${rValue}, ${gValue}, ${bValue}, ${oValue}) ${inset ? 'inset' : ''}`}/>
                </Inputs>
            </Container>
        </>
    )
}