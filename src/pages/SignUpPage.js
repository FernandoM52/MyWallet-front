import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react";
import apiAuth from "../services/apiAuth";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) return alert("As senhas não coincidem. Os valores de senha precisam ser idênticos.");
    const body = { name: form.name, email: form.email, password: form.password }

    apiAuth.signup(body)
      .then(res => {
        alert(res.data);
        navigate("/");
      })
      .catch(err => alert("Preencha os campos corretamente: nome, email e uma senha com mínimo de 3 caracteres."));
  }

  return (
    <SingUpContainer>
      <form onSubmit={handleSignUp}>
        <MyWalletLogo />
        <input
          name="name"
          placeholder="Nome"
          type="text"
          required
          value={form.name}
          onChange={handleForm}
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          value={form.email}
          onChange={handleForm}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          required
          autoComplete="new-password"
          value={form.password}
          onChange={handleForm}
        />
        <input
          name="confirmPassword"
          placeholder="Confirme a senha"
          type="password"
          required
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
