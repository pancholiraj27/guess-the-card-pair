import React, { useEffect, useState } from "react";
import data from "../data.json";
import "./Cards.css";
const Cards = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");
  const [checkCard, setCheckCard] = useState(false);
  const [newArr, setNewArr] = useState([]);
  const [count, setCount] = useState(0);

  // for loading random number and push to arr
  useEffect(() => {
    randomArr();
  }, []);

  function randomArr() {
    let arr = [];
    while (arr.length < data.length) {
      let randomNumber = Math.floor(Math.random() * data.length);
      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
      }
      setNewArr(arr);
    }
    if (isTrue) {
      firstCard.classList.remove("show");
      secondCard.classList.remove("show");
      setIsTrue(false);
      setCheckCard(false);
    }
  }

  // when the user clicks two cards
  useEffect(() => {
    const cards = document.querySelectorAll(".dynamic");
    if (checkCard) {
      for (let card of cards) {
        card.classList.add("pointerNone");
      }
      if (firstCard.src === secondCard.src) {
        console.log("You won");
        setTimeout(() => {
          alert(`You Won. Total attempt ${count}`);
          randomArr();
        }, 100);
        setCount(0);
      } else {
        console.log("you loose. Better luck next time");
        setTimeout(() => {
          firstCard.classList.remove("show");
          secondCard.classList.remove("show");
          setIsTrue(false);
          setCheckCard(false);
        }, 1000);
      }
    } else {
      for (let card of cards) {
        card.classList.remove("pointerNone");
      }
    }
  }, [checkCard]);

  // when user clicks on the card
  const onCardClick = (e) => {
    if (!isTrue) {
      setIsTrue(true);
      e.target.firstChild.classList.add("show");
      setFirstCard(e.target.firstChild);
    } else {
      e.target.firstChild.classList.add("show");
      setSecondCard(e.target.firstChild);
      setCheckCard(true);
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      {newArr.length > 0 ? (
        data.map((item, index) => {
          let randomItem = data[newArr[index]];
          return (
            <div
              className="dynamic"
              key={randomItem.heading}
              onClick={onCardClick}
            >
              <img
                className="img "
                src={`/IMG/${randomItem.image}`}
                alt="NOt FOUnd"
              />
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Cards;
