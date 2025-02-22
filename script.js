const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const  amountEl_two= document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");


async function calculate(){
    const currency_one = currencyEl_one.value ;
    const currency_two = currencyEl_two.value;
    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`) 
        const data = await res.json()
        const rate = data.rates[currency_two] 
        rateEl.innerHTML = `1${currency_one} = ${rate} ${currency_two}`

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2) 

       
    } catch (error) {
        console.log(error);
    }   
}


currencyEl_one.addEventListener("change",calculate);
currencyEl_two.addEventListener("change",calculate);
amountEl_one.addEventListener("input",calculate);
amountEl_two.addEventListener("input",calculate);


swap.addEventListener("click",()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp 
    calculate()
})

