import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Card from "./Components/Card";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [screen, setScreen] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
    confirmPassword: yup.string().required("confirmação Obrigatória"),
    cellphone: yup.string().required("Telefone Obrigatório"),
    address: yup.string().required("Endereço Obrigatório"),
    momName: yup.string().required("Nome da Mãe Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setUser(data);
    setScreen(false);
    console.log("objeto", data);
  };

  // console.log(errors);

  return (
    <div className="app">
      {screen ? (
        <div className="container">
          <h1>Formulário</h1>
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <input type="text" placeholder="Nome" {...register("name")} />
            {errors.name?.message}
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email?.message}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password?.message}
            <input
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}
            <input
              type="text"
              placeholder="Telefone/Celular"
              {...register("cellphone")}
            />
            {errors.cellphone?.message}
            <input
              type="text"
              placeholder="Endereço"
              {...register("address")}
            />
            {errors.address?.message}
            <input
              type="text"
              placeholder="Nome Da Mãe"
              {...register("momName")}
            />
            {errors.momName?.message}
            <button type="submit" id="botao">
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <Card user={user} />
      )}
    </div>
  );
}

export default App;
