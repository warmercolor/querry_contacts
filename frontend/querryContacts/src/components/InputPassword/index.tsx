import { useState } from 'react'
import { StyleDivPassword, StyleInputPassword } from './style'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { colors } from './../../styles/themes/defaultTheme';

export interface IProps{
    label: string
    name?: string
    error?: string
    register: Function
    [rest: string]:any
}

export function InputPassword({ label, register, name, error, ...rest }: IProps ) {

  const [ showPassword, setShowPassword ] = useState(true)

    return (
    <StyleDivPassword>
        <StyleInputPassword>
        <input
            type={showPassword ? 'password' : 'text'}
            {...register(name)}
            {...rest}
            >
        </input>
                {showPassword ?
                (<AiFillEyeInvisible style={{color: `${colors.primary.colorPrimary}`}} onClick={() => setShowPassword(false)} /> ) :
                (<AiFillEye style={{color: `${colors.primary.colorLight}`}} onClick={() => setShowPassword(true)} />)}
        </StyleInputPassword>
    </StyleDivPassword>
    )
}