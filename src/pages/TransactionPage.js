import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

import axios from "axios";
import styled from "styled-components";

export default function TransactionsPage() {
  const [form, setForm] = useState({ value: "", description: "", type: "" });
  const { user, setUser } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentToken = localStorage.getItem("sessions");
    if (currentToken) {
      setUser(JSON.parse(currentToken));
    } else {
      navigate("/");
    }
  }, [navigate, setUser])

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleTransaction(e) {
    e.preventDefault();

    const body = {
      ...form, value: (Number(parseFloat(form.value).toFixed(2)) * 100),
      type: params.type
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    axios.post(`${process.env.REACT_APP_API_URL}/transaction`, body, config)
      .then(res => {
        alert(res.data);
        navigate("/home");
      })
      .catch(err => alert(err.response.data));
  }

  return (
    <TransactionsContainer>
      <h1>Nova TRANSAÇÃO</h1>
      <form onSubmit={handleTransaction}>
        <input
          name="value"
          placeholder="Valor"
          type="text"
          required
          value={form.value}
          onChange={handleForm}
        />
        <input
          name="description"
          placeholder="Descrição"
          type="text"
          required
          value={form.description}
          onChange={handleForm}
        />
        <button type="submit">Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
};

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`;