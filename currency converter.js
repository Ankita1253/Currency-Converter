console.log("currency converter");

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
console.log(BASE_URL);

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
// for(let code in countryList){
//   console.log(code, countryList[code]);
// } 

for (let select of dropdowns) {
  for (let currcode in countryList) {

    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;

    if (select.name === "from" && currcode === "USD") {
      newoption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newoption.selected = "selected";
    }

    select.append(newoption);

    // console.log(code, countryList[code]);
  }
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
};

const updateflag = (element) => {
//  console.log(element);
let currcode=element.value;
// console.log(currcode);
let countrycode=countryList[currcode];
// console.log(countrycode);
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src=newsrc;
};

btn.addEventListener("click", async(evt)=>{
  evt.preventDefault();  //preventDefault()"method" basically stops the dafult hting happening on page agter clickin on button. to aab agr different country ko select krke  exchange button pe click kiya to kuch bhi conversion libk pe show nahi karega.
  let amount=document.querySelector(".amount input");
  let amountval=amount.value;
  console.log(amountval);
  if(amountval==="" || amountval<1){
    amountval=1;
    amount.value=1;
  }

  // console.log(fromCurr.value,toCurr.value );
  const url=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  console.log(response);
});
