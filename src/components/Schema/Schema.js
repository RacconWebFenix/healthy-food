import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().min(3).required(),
  birth: Yup.string().required(),
  cpf: Yup.number().min(11).required(),
  cep: Yup.string().required(),
  logradouro: Yup.string(),
  numero: Yup.string(),
  complemento: Yup.string(),
  bairro: Yup.string(),
  cidade: Yup.string().required(),
  uf: Yup.string().required(),
});
