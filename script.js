const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const tipDecrement = document.getElementById("tip-decrement");
const tipIncrement = document.getElementById("tip-increment");
const peopleDecrement = document.getElementById("people-decrement");
const peopleIncrement = document.getElementById("people-increment");
const perPerson = document.querySelectorAll(".per-person");
const result = document.getElementById("result");

function calculate() {
  let tipValue = tip.value;
  let tipPercentage = tipValue.slice(0, tipValue.length - 1);
  let tipAmountValue = (bill.value * tipPercentage) / 100;
  let totalValue = Number(bill.value) + Number(tipAmountValue);
  let tipAmountPerPerson = tipAmountValue / people.value;
  let totalPerPerson = totalValue / people.value;

  if (tipPercentage === "" || bill.value === "" || people.value === "") {
    alert("Please fill all the fields");
  }
  else if(bill.value === "0.00"){
    alert("Bill cannot be zero");
  }
  else if (people.value > 1) {
    tipAmount.innerHTML = `₹${tipAmountPerPerson.toFixed(2)}`;
    total.innerHTML = `₹${totalPerPerson.toFixed(2)}`;
    perPerson.forEach((person) => {
      person.classList.remove("hidden");
    });
    result.classList.add("animate");

    setTimeout(() => {
      result.classList.remove("animate");
    }, 500);
  } else {
    tipAmount.innerHTML = `₹${tipAmountValue.toFixed(2)}`;
    total.innerHTML = `₹${totalValue.toFixed(2)}`;
    perPerson.forEach((person) => {
      person.classList.add("hidden");
    });
    result.classList.add("animate");

    setTimeout(() => {
      result.classList.remove("animate");
    }, 500);
  }

}

tipDecrement.addEventListener("click", () => {
  let tipValue = tip.value;
  let tipPercentage = tipValue.slice(0, tipValue.length - 1);
  if (tipPercentage > 0) {
    tipPercentage--;
    tip.value = `${tipPercentage}%`;
  }
});

tipIncrement.addEventListener("click", () => {
  let tipValue = tip.value;
  let tipPercentage = tipValue.slice(0, tipValue.length - 1);
  if (tipPercentage < 100) {
    tipPercentage++;
    tip.value = `${tipPercentage}%`;
  }
});

peopleDecrement.addEventListener("click", () => {
  if (people.value > 1) {
    people.value--;
  }
});

peopleIncrement.addEventListener("click", () => {
  people.value++;
});

bill.addEventListener("input", () => {
  calculate();
});

tip.addEventListener("input", () => {
  calculate();
});

people.addEventListener("input", () => {
  calculate();
});

tipDecrement.addEventListener("click", () => {
  calculate();
});

tipIncrement.addEventListener("click", () => {
  calculate();
});

peopleDecrement.addEventListener("click", () => {
  calculate();
});

peopleIncrement.addEventListener("click", () => {
  calculate();
});