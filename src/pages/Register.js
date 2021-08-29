import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Schema from "../components/Schema/Schema";
import { toast } from "react-toastify";
import "./register.css";

export default function Register() {
  function onSubmit(values, onSubmitProps) {
    const data = values;
    if (data) {
      toast.success("Registro salvo com sucesso.");
    }
    const minhaLista = localStorage.getItem("users");
    let savesUsers = JSON.parse(minhaLista) || [];
    savesUsers.push(data);
    localStorage.setItem("users", JSON.stringify(savesUsers));

    onSubmitProps.resetForm();
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
  }

  return (
    <>
      <div className="Register">
        <div className="logoHome">
          <Link to="/">Healthy Food</Link>
        </div>
        <Formik
          validationSchema={Schema}
          validateOnMount
          onSubmit={onSubmit}
          initialValues={{
            name: "",
            birth: "",
            cpf: "",
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: "",
          }}
          render={({ values, errors, touched, isValid, setFieldValue }) => (
            <Form>
              <div className="formControlGroup">
                <Field name="name" type="text" placeholder="Nome" />
                <ErrorMessage name="name" />
              </div>
              <div className="formControlGroup">
                <Field
                  name="birth"
                  type="date"
                  placeholder="Data de Nascimento"
                />
                <ErrorMessage name="birth" />
              </div>
              <div className="formControlGroup">
                <Field
                  name="cpf"
                  type="number"
                  placeholder="Digite o CPF"
                  maxLength="11"
                />
                <ErrorMessage name="cpf" />
              </div>
              <div className="formControlGroup">
                <Field
                  name="cep"
                  type="text"
                  maxLength="8"
                  onBlur={(e) => onBlurCep(e, setFieldValue)}
                  placeholder="Digite o CEP. Somente Números."
                />
                <ErrorMessage name="cep" />
              </div>
              <div className="formControlGroup">
                <Field name="logradouro" type="text" placeholder="Logradouro" />
              </div>
              <div className="formControlGroup">
                <Field name="numero" type="text" placeholder="Número" />
              </div>
              <div className="formControlGroup">
                <Field
                  name="complemento"
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div className="formControlGroup">
                <Field name="bairro" type="text" placeholder="Bairro" />
              </div>
              <div className="formControlGroup">
                <Field name="cidade" type="text" placeholder="Cidade" />
                <ErrorMessage name="cidade" />
              </div>
              <div className="formControlGroup">
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
                <ErrorMessage name="uf" />
              </div>
              <div className="buttonsNav">
                <button type="submit" disabled={!isValid}>
                  Enviar
                </button>
                <button className="Cancel">
                  <Link to="/">Cancelar</Link>
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </>
  );
}
