import "./Card.css";

function Card({ user }) {
  return (
    <div id="cardBox">
      <div id="card">
        <h1>{user.name}</h1>
        <div id="info">
          <div className="carac">
            <h4>
              <p>Email:</p>
              <p>{user.email} </p>
            </h4>
          </div>
          <div className="carac">
            <h4>
              <p>Senha:</p> {user.password}{" "}
            </h4>
          </div>
          <div className="carac">
            <h4>
              <p>Confirmação de Senha:</p>
              {user.confirmPassword}
            </h4>
          </div>
          <div className="carac">
            <h4>
              <p>Celular:</p>
              {user.cellphone}
            </h4>
          </div>
          <div className="carac">
            <h4>
              <p>Endereço:</p>
              {user.address}
            </h4>
          </div>
          <div className="carac">
            <h4>
              <p>Nome da Mãe:</p> {user.momName}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
