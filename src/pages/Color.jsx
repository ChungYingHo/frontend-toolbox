import styled from "styled-components";
import * as styles from '../common/common.styled'
import Input from "../components/ColorInput";
import { useState, useEffect } from "react";
import { convertToHex } from "../utils/convert";

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
    margin: 1rem 0;
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
    border-radius: 20px;
    width: 50%;
    height: 50%;
    background: rgba(${props => props.color.rValue}, ${props => props.color.gValue}, ${props => props.color.bValue}, ${props => props.color.oValue});
`
const PhoneCanvas = styled.div`
    border: darkgray solid 2px;
    border-radius: 20px;
    width: 50%;
    height: 20vh;
    margin: 0 auto 1rem;
    background: rgba(${props => props.color.rValue}, ${props => props.color.gValue}, ${props => props.color.bValue}, ${props => props.color.oValue});
    display: none;

    @media (max-width: 900px){
        display: block;
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

export default function Color(){
    const [rValue, setRvalue] = useState(0)
    const [gValue, setGvalue] = useState(0)
    const [bValue, setBvalue] = useState(0)
    const [oValue, setOvalue] = useState(1)
    const [hex, setHex] = useState(`#${convertToHex(rValue)}${convertToHex(gValue)}${convertToHex(bValue)}`)
    // RGBA 數字顯示
    const [rDisplay, setRDisplay] = useState(0)
    const [gDisplay, setGDisplay] = useState(0)
    const [bDisplay, setBDisplay] = useState(0)
    const [oDisplay, setODisplay] = useState(0)
    
    useEffect(()=>{
        setHex(`#${convertToHex(rValue)}${convertToHex(gValue)}${convertToHex(bValue)}`)
    }, [rValue, gValue, bValue])
    return(
        <>
            <Container>
                <Inputs>
                    <Des>
                        <h4>Color Converter</h4>
                        <p>Here, you can experiment with various color conversions, including RGB to Hex or Hex to RGB.</p>
                    </Des>
                    <PhoneCanvas
                        color={{ rValue, gValue, bValue, oValue }}/>
                    <Input
                        color
                        label={'Choose the color:'}
                        setR={setRvalue}
                        setG={setGvalue}
                        setB={setBvalue}
                        setO={setOvalue}
                        setRDisplay={setRDisplay}
                        setGDisplay={setGDisplay}
                        setBDisplay={setBDisplay}
                        setODisplay={setODisplay}
                        value={hex}/>
                    <Input
                        text
                        label={'Hex:'}
                        value={hex}
                        setHex={setHex}
                        r={rValue}
                        g={gValue}
                        b={bValue}
                        setR={setRvalue}
                        setG={setGvalue}
                        setB={setBvalue}
                        setO={setOvalue}
                        setRDisplay={setRDisplay}
                        setGDisplay={setGDisplay}
                        setBDisplay={setBDisplay}
                        setODisplay={setODisplay}
                        placeholder={`ex: ${hex}`}/>
                    <Input
                        min={0}
                        max={255}
                        label={'Red:'}
                        value={rDisplay}
                        set={setRvalue}
                        setDisplay={setRDisplay}/>
                    <Input
                        min={0}
                        max={255}
                        label={'Green:'}
                        value={gDisplay}
                        set={setGvalue}
                        setDisplay={setGDisplay}/>
                    <Input
                        min={0}
                        max={255}
                        label={'Blue:'}
                        value={bDisplay}
                        set={setBvalue}
                        setDisplay={setBDisplay}/>
                    <Input
                        min={0}
                        max={1}
                        step={0.1}
                        label={'Opacity:'}
                        value={oValue}
                        set={setOvalue}
                        setDisplay={setODisplay}/>
                </Inputs>
                <Inputs>
                    <CanvasContainer>
                        <Canvas
                            color={{ rValue, gValue, bValue, oValue }}/>
                    </CanvasContainer>
                    <Input text label={'Hex code:'} disabled={true} displayValue={hex}/>
                    <Input text label={'RGB code:'} disabled={true} displayValue={`rgb(${rValue}, ${gValue}, ${bValue})`}/>
                    <Input text label={'RGBA code:'} disabled={true} displayValue={`rgba(${rValue}, ${gValue}, ${bValue}, ${oValue})`}/>
                </Inputs>
            </Container>
        </>
    )
}