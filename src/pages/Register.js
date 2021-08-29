import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Schema from "../components/Schema/Schema";
import "./register.css";

export default function Register() {
  function onSubmit(values, actions) {
    
  }

  function onBlurCep(e, setFieldValue) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
    console.log();
  }

  return (
    <div className="Register">
      <h1>Registro</h1>
      <Formik
        validationSchema={Schema}
        validateOnMount
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          email: "",
        }}
        render={({ values, errors, touched, isValid, setFieldValue }) => (
          <Form>
            <div className="formControlGroup">
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div className="formControlGroup">
              <label>Nome</label>
              <Field name="birth" type="date" />
              <ErrorMessage name="name" />
            </div>
            <div className="formControlGroup">
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <div className="formControlGroup">
              <label>CEP</label>
              <Field
                name="cep"
                type="text"
                onBlur={(e) => onBlurCep(e, setFieldValue)}
              />
            </div>
            <div className="formControlGroup">
              <label>Logradouro</label>
              <Field name="logradouro" type="text" />
            </div>
            <div className="formControlGroup">
              <label>Número</label>
              <Field name="numero" type="text" />
            </div>
            <div className="formControlGroup">
              <label>Complemento</label>
              <Field name="complemento" type="text" />
            </div>
            <div className="formControlGroup">
              <label>Bairro</label>
              <Field name="bairro" type="text" />
            </div>
            <div className="formControlGroup">
              <label>Cidade</label>
              <Field name="cidade" type="text" />
            </div>
            <div className="formControlGroup">
              <label>Estado</label>
              <Field component="select" name="uf">
                <option value={null}>Selecione o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Field>
            </div>
            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      />
    </div>
  );
}
