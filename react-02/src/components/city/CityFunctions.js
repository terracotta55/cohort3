class Functions {
  constructor() {
    // super();
    this.state = { cardCount: 0 };
  }
  createCardDiv() {
    let newCardDiv = document.createElement("div");
    this.cardCount++;
    newCardDiv.className = "card-div";
    newCardDiv.setAttribute("key", accountCards.cardCount);
    leftChild.appendChild(newCardDiv);
    accountCards.createCardBtns(newCardDiv);
    return newCardDiv;
  }
  createCardBtns(newCardDiv) {
    let pAcctName = document.createElement("p");
    pAcctName.className = "para-left-card-name";
    newCardDiv.appendChild(pAcctName);
    pAcctName.textContent = `${inputName.value}`;

    let cardInput = document.createElement("input");
    cardInput.className = "card-input";
    newCardDiv.appendChild(cardInput);

    newCardDiv.appendChild(document.createElement("br"));

    let buttonDeposit = document.createElement("button");
    buttonDeposit.className = "btn-card-dep";
    buttonDeposit.textContent = "Deposit";
    newCardDiv.appendChild(buttonDeposit);

    let buttonWithdraw = document.createElement("button");
    buttonWithdraw.className = "btn-card-wth";
    buttonWithdraw.textContent = "Withdraw";
    newCardDiv.appendChild(buttonWithdraw);

    let buttonBalance = document.createElement("button");
    buttonBalance.className = "btn-card-bal";
    buttonBalance.textContent = "Balance";
    newCardDiv.appendChild(buttonBalance);

    newCardDiv.appendChild(document.createElement("br"));

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "btn-card-del";
    buttonDelete.textContent = "Delete";
    newCardDiv.appendChild(buttonDelete);

    let pOutput = document.createElement("p");
    pOutput.className = "para-left-card-output";
    newCardDiv.appendChild(pOutput);
    pOutput.textContent = `Account Balance: $${inputBalance.value}`;
  }
  removeCurrentCard(currentCard, leftChild) {
    leftChild.removeChild(currentCard);
  }
  render() {
    return <Fragment>{newCardDiv}</Fragment>;
  }
}

export default Functions;
