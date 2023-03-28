import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup
    .string()
    .required('Campo obrigatório: Nome'),
    lastname: yup
    .string()
    .required('Campo obrigatório: Sobrenome'),
    email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigátorio: E-mail'),
    password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,'A senha deve conter símbolo, número e letras')
    .min(6, 'Necessário ter no mínimo 6 digitos')
    .required('Campo obrigátorio: Senha'),
    phone: yup
    .string()
    .required('Campo obrigátorio: Telefone'),
})