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
const CheckInput = styled(Form.Check)`
    /* outline: red solid 2px; */
`

export default function Input(
    {min,
    max,
    step,
    value,
    label,
    color,
    set,
    setDisplay,
    setR,
    setG,
    setB,
    setO,
    disabled,
    displayValue,
    text,
    placeholder,
    shadow,
    opacity,
    check}
){
    const handleShadowNumber = (event) => {
        const newValue = parseFloat(event.target.value)
        if(isNaN(newValue)){
            set(0)
            setDisplay('')
        }else{
            if(newValue > 150){
                set(150)
                setDisplay(150)
            }else if(newValue < -150){
                set(-150)
            }else{
                set(newValue)
                setDisplay(newValue)
            }
        }
    }
    const handleOtherNumber = (event) => {
        const newValue = parseFloat(event.target.value)
        if(isNaN(newValue)){
            set(0)
            setDisplay('')
        }else{
            if(newValue > 150){
                set(150)
                setDisplay(150)
            }else if(newValue < 0){
                set(0)
            }else{
                set(newValue)
                setDisplay(newValue)
            }
        }
    }
    const handleOpacityNumber = (event) => {
        const newValue = parseFloat(event.target.value)
        if(isNaN(newValue)){
            set(1)
            setDisplay('')
        }else{
            if(newValue > 1){
                set(1)
                setDisplay(1)
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
    const handleBlurOpacity = () => {
        if (value === '') {
            setDisplay(1)
            set(1)
        }
    }

    const handleRange = (event) => {
        const newValue = parseFloat(event.target.value)
        set(newValue)
        setDisplay(newValue)
    }

    const handleHex = (event) => {
        const inputHex = event.target.value
        const newHex = convertToRGB(inputHex)
        if (newHex) {
            setR(parseFloat(newHex.updatedR))
            setG(parseFloat(newHex.updatedG))
            setB(parseFloat(newHex.updatedB))
        }
        if(inputHex === ''){
            setR(0)
            setG(0)
            setB(0)
        }
    }

    const handleCheck = (event)=>{
        const inputChecked = event.target.checked
        set(inputChecked)
    }
    return(
        <Container $color={color}>
            <Label $color={color}>{label}</Label>
            <Inputs>
                {color ?
                (<ColorInput
                    type="color"
                    onChange={handleHex}/>)
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
                        (check ?
                            (
                                <CheckInput type="switch" label='Inset' onChange={handleCheck}/>
                            )
                            :
                            (<>
                                <NumberInput
                                    type="number"
                                    min={min}
                                    max={max}
                                    step={step}
                                    value={value}
                                    onChange={shadow ? handleShadowNumber :
                                        (opacity ? handleOpacityNumber : handleOtherNumber)}
                                    onBlur={opacity ? handleBlurOpacity : handleBlur}/>
                                <RangeInput
                                    min={min}
                                    max={max}
                                    step={step}
                                    value={value}
                                    onChange={handleRange}/>
                            </>)
                        )
                    )
                }
            </Inputs>
        </Container>
    )
}