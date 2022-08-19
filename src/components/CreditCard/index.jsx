import "./CreditCard.css";

function CreditCard(props) {
  const cardLogo = "./images/card-logo.svg";
  const isSide = props.side ? "back" : "front";
  const background = `./images/bg-card-${isSide}.png`;

  //making my inputs prettier
  const name = props.name || "Jane Appleseed";
  const month = props.month?.slice(0, 2).padStart(2, "0");
  const year = props.year?.slice(0, 2).padStart(2, "0");
  const cvc = props.cvc
    ?.trim()
    .slice(0, 3)
    .padStart(3, "0");
  const number = props.number
    ?.trim()
    .slice(0, 16)
    .padEnd(16, "0");

  return (
    <div
      className={`card ${isSide}`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {props.side ? (
        <label htmlFor="cvc">
          <h2 className="card__cvc">{cvc}</h2>
        </label>
      ) : (
        <>
          <img src={cardLogo} alt="" />
          <label htmlFor="number">
            <h2 htmlFor="number" className="card__number">
              {number.split("").map((e, index) => (
                <span key={index}>{e}</span>
              ))}
            </h2>
          </label>

          <label htmlFor="name">
            <h3 className="card__name">{name}</h3>
          </label>
          <small className="card__date">
            <label htmlFor="month">{month}</label>/
            <label htmlFor="year">{year}</label>
          </small>
        </>
      )}
    </div>
  );
}

export default CreditCard;
