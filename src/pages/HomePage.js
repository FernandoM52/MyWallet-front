import { BiExit } from "react-icons/bi"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/userContext"
import apiTransaction from "../services/apiTransactions"
import TransactionItem from "../components/TransactionItem"
import styled from "styled-components"

export default function HomePage() {
  const [extract, setExtract] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(getExtractList, []);

  function getExtractList() {
    apiTransaction.getExtract(user.token)
      .then(res => {
        console.log(res.data)
        setExtract(res.data);
      })
      .catch(err => {
        if (!user.token) {
          alert("Faça login.");
        } else {
          alert(err.response.data);
        }
      })
  }

  const handleLogoff = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <HomeContainer>
      <Header>
        <h1>{user.name}</h1>
        <BiExit onClick={handleLogoff} />
      </Header>

      <TransactionsContainer>
        <ul>
          {extract.length === 0 ? (
            <p>Não há registros de
              entrada ou saída</p>
          ) : (
            extract.map(transaction => (
              <TransactionItem
                key={transaction._id}
                date={transaction.date}
                description={transaction.description}
                type={transaction.type}
                value={transaction.value}
              />
            ))
          )}
        </ul>

        <article>
          <strong>Saldo</strong>
          <Value color={"positivo"}>2880,00</Value>
        </article>
      </TransactionsContainer>


      <ButtonsContainer>
        <button onClick={() => navigate("/nova-transacao/entrada")}>
          <AiOutlinePlusCircle />
          <p>Nova <br /> entrada</p>
        </button>
        <button onClick={() => navigate("/nova-transacao/saida")}>
          <AiOutlineMinusCircle />
          <p>Nova <br />saída</p>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
  ion-icon{
    cursor: pointer;
  }
`
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`;