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
    .matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      'Número de telefone inválido. Insira o DDD e o número com DDI.'
    )
    .required('Número de telefone é obrigatório'),
})

export default schema