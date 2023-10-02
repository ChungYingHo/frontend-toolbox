import styled from "styled-components";
import * as styles from '../common/common.styled'
import Input from "../components/ShadowInput";
import { useState } from "react";

const Container = styled(styles.StyledContainer)`
    display: flex;
    justify-content: space-between;
    padding: 0;

    @media (max-width: 900px){
        flex-direction: column;
    }
`
const Des = styled.div`
    width: 100%;
    flex: 1;
    margin: 0.5rem 0;
    p{
        margin: 0;
    }
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
const PhoneCanvas = styled.div`
    border: darkgray solid 2px;
    width: 50%;
    height: 20vh;
    margin: 5rem auto;
    box-shadow: ${props => props.$xShadow}px ${props => props.$yShadow}px ${props => props.$blurNum}px ${props => props.$spreadNum}px rgba(${props => props.$rValue}, ${props => props.$gValue}, ${props => props.$bValue}, ${props => props.$oValue}) ${props => props.$inset ? 'inset' : ''};
    display: none;

    @media (max-width: 900px){
        display: block;
    }
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
    const [inset, setInset] = useState(false)
    const [xDisplay, setXDisplay] = useState(0)
    const [yDisplay, setYDisplay] = useState(0)
    const [blurDisplay, setBlurDisplay] = useState(0)
    const [spreadDisplay, setSpreadDisplay] = useState(0)
    const [oDisplay, setODisplay] = useState(1)
    return(
        <>
            <Container>
                <Inputs>
                    <Des>
                        <h4>Box Shadow</h4>
                        <p>Here, you can experiment the box shadow.</p>
                    </Des>
                    <PhoneCanvas
                        $xShadow={xShadow}
                        $yShadow={yShadow}
                        $blurNum={blurNum}
                        $spreadNum={spreadNum}
                        $rValue={rValue}
                        $gValue={gValue}
                        $bValue={bValue}
                        $oValue={oValue}
                        $inset={inset}/>
                    <Input
                        label={'X-Offset (-150px ~ 150px)'}
                        value={xDisplay}
                        min={-150}
                        max={150}
                        step={1}
                        set={setXShadow}
                        setDisplay={setXDisplay}
                        shadow/>
                    <Input
                        label={'Y-Offset (-150px ~ 150px)'}
                        value={yDisplay}
                        min={-150}
                        max={150}
                        step={1}
                        set={setYShadow}
                        setDisplay={setYDisplay}
                        shadow/>
                    <Input
                        label={'Blur-radius (0px ~ 150px)'}
                        value={blurDisplay}
                        min={0}
                        max={150}
                        step={1}
                        set={setBlurNum}
                        setDisplay={setBlurDisplay}/>
                    <Input
                        label={'spread-radius (-150px ~ 150px)'}
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
                        label={'Shadow opacity (0~1):'}
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
                    <Input text label={'box shadow code:'} disabled={true} displayValue={`box-shadow: ${xShadow}px ${yShadow}px ${blurNum}px ${spreadNum}px rgba(${rValue}, ${gValue}, ${bValue}, ${oValue}) ${inset ? 'inset' : ''};`}/>
                </Inputs>
            </Container>
        </>
    )
}