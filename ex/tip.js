const money = bill;
const tip = option;
const people = split;

function Calculate() {
  money + (money * tip) / people;
  {
    return;
  }
}

document.querySelector("#bill").addEventListener("change", function () {
  Bill = parseInt(bill.value);
});

document.querySelector("#option").addEventListener("select", function () {
  option = parseInt(option.value);
});

document.querySelector("#split").addEventListener("select", function () {
  split = parseInt(split.value);
});

document.querySelector("#CaButton").addEventListener("click", function () {
  Calculate();
});
