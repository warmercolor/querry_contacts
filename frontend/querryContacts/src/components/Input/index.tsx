import { StyleDiv, StyleInput } from './style'

export interface IProps{
    label: string
    name?: string
    error?: string
    register: Function
    [rest: string]:any
}

export function Input({ label, register, name, error, ...rest }: IProps ) {
    return (
    <StyleDiv>


        <StyleInput>
        <input
            {...register(name)}
            {...rest}
            >
        </input>
        </StyleInput>
    </StyleDiv>
    )
}