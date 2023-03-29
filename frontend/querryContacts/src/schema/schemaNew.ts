import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup
    .string()
    .required('Adicione um nome'),
    lastname: yup
    .string()
    .required('Adicione um sobrenome'),
    email: yup
    .string()
    .email('E-mail inválido')
    .required('Adicione um email'),
    phone: yup
    .string()
    .required('Número de telefone é obrigatório'),
})

export default schema