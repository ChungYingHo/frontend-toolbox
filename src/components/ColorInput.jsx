import styled from "styled-components";
import * as styles from '../common/common.styled'
import { Form } from "react-bootstrap";
import Copy from './Copy'
import { copyText } from '../utils/copy'
import { convertToRGB } from "../utils/convert";

const Container = styled.div`
    margin-bottom: 1rem;
    height: fit-content;
    width: 100%;
    ${props => props.$color &&`
        display: flex;
        align-items: center;
    `}
`
const Label = styled(Form.Label)`
    margin-bottom: 0.5rem;
    ${props => props.$color &&`
        margin: 0 1rem 0 0;
    `}
`
const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NumberInput = styled(Form.Control)`
    width: 25%;
    margin-right: 5%;
`
const RangeInput = styled(Form.Range)`
    /* slide bar */
    &::-webkit-slider-runnable-track {
        background-color: darkgray;
        height: 1px;
    }
    /* slide circle */
    &::-webkit-slider-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-top: -10px;/* 置中 */
    }
`
const TextInput = styled(Form.Control)`
    /* outline: red solid 2px; */
`
const ColorInput = styled(Form.Control)`
    /* outline: red solid 2px; */
`

export default function Input({
    min,
    max,
    label,
    step,
    value,
    set,
    text,
    placeholder,
    setR,
    setG,
    setB,
    setO,
    disabled,
    displayValue,
    color,
    setDisplay,
    setRDisplay,
    setGDisplay,
    setBDisplay,
    setODisplay
}){
    // 連動拉條
    const handleNumber = (event) => {
        const newValue = parseFloat(event.target.value)
        if(isNaN(newValue)){
            set(0)
            setDisplay('')
        }else{
            if(newValue > 255){
                set(255)
                setDisplay(255)
            }else if(newValue < 0){
                set(0)
            }else{
                set(newValue)
                setDisplay(newValue)
            }
        }
    }

    const handleBlur = () => {
    if (value === '') {
        setDisplay(0)
    }
}

    const handleRange = (event) => {
        const newValue = parseFloat(event.target.value)
        set(newValue)
        setDisplay(newValue)
    }
    // 轉換hex to rgb
    const handleHex = (event) => {
        const inputHex = event.target.value
        console.log(inputHex)
        const newHex = convertToRGB(inputHex)
        console.log('new', newHex)
        if (newHex) {
            setR(parseFloat(newHex.updatedR))
            setG(parseFloat(newHex.updatedG))
            setB(parseFloat(newHex.updatedB))
            setO(1)
            setRDisplay(parseFloat(newHex.updatedR))
            setGDisplay(parseFloat(newHex.updatedG))
            setBDisplay(parseFloat(newHex.updatedB))
            setODisplay(1)
        }
        if(inputHex === ''){
            setR(0)
            setG(0)
            setB(0)
            setO(1)
            setRDisplay(0)
            setGDisplay(0)
            setBDisplay(0)
            setODisplay(1)
        }
    }
    return(
        <Container $color={color}>
            <Label $color={color}>{label}</Label>
            <Inputs>
                {color ?
                (<ColorInput
                    type="color"
                    onChange={handleHex}
                    value={value}/>)
                :
                    (text ?
                        (
                            <>
                                <TextInput
                                    type="text"
                                    placeholder={placeholder}
                                    onChange={handleHex}
                                    disabled={disabled}
                                    value={displayValue}/>
                                    {disabled && <Copy onClick={()=>copyText(displayValue)}/>}
                            </>
                        )
                        :
                        (
                            <>
                                <NumberInput
                                    type="number"
                                    min={min}
                                    max={max}
                                    step={step}
                                    value={value}
                                    onChange={handleNumber}
                                    onBlur={handleBlur}/>
                                <RangeInput
                                    min={min}
                                    max={max}
                                    step={step}
                                    value={value}
                                    onChange={handleRange}/>
                            </>
                        )
                    )
                }
            </Inputs>
        </Container>
    )
}