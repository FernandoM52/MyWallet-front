import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import apiAuth from "../services/apiAuth";
import { useState } from "react";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    apiAuth.login(form)
      .then(res => {
        console.log(res.data);
        navigate("/home");
      })
      .catch(err => alert(err.response.data.message))
  }
  return (
    <SingInContainer>
      <form onSubmit={handleLogin}>
        <MyWalletLogo />
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
          value={form.password}
          onChange={handleForm}
          autoComplete="new-password" />
        <button type="submit">Entrar</button>
      </form>

      <Link to={"/cadastro"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
