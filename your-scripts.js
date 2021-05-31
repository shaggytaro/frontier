//Problem 1 - changes in css only 

// Problem 2 

document.getElementById("p2-nav").classList.add("dropdown-content");

const dropdownBtn = document.getElementById("p2-button");
dropdownBtn.addEventListener("click", displayDropdown);

function displayDropdown() {
	document.getElementById("p2-nav").classList.toggle("show");

};



//Problem 3 

document.getElementById('p3-button').onclick = function() {
    this.textContent = 'clicked!';
    this.style.backgroundColor = "#eee";
    this.style.color = "black";
};


//Problem 4 - solved in css

//Problem 5

const loadFacts = async () => {
    try {
       const res = await fetch('https://cat-fact.herokuapp.com/facts'); //made an api call using fetch
       facts = await res.json();
       displayFacts(facts) // called the function to display facts
  } catch (err) {
       console.error(err);
  }

};

loadFacts()

var factsBox = document.getElementById("cat-fact-container"); //targeted the box 
const displayFacts = (facts) => {
	const factsList = facts.map((fact)=>{
		return `
		<ul> <strong>Fact</strong> : <i>${fact.text}</i></ul>`; //created an unordered list to display facts
	})
	.join("");

factsBox.innerHTML = factsList;

}


//Problem 6 

var ONES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
var THOUSANDS = ['M', 'MM', 'MMM', 'MMMM'];

function convertToRoman(num) {
  var ones = num % 10;
  var tens = Math.floor(num / 10) % 10;
  var hundreds = Math.floor(num / 100) % 10;
  var thousands = Math.floor(num / 1000) % 10;
  var largest = 1;
  var s = '';
  if (thousands > 0) {
    s += THOUSANDS[thousands - 1];
  }
  if (hundreds > 0) {
    s += HUNDREDS[hundreds - 1];
  }
  if (tens > 0) {
    s += TENS[tens - 1];
  }
  if (ones > 0) {
    s += ONES[ones - 1];
  }
  return s;
}

function onSubmit(e) {
  e.preventDefault();
  var val = document.querySelector('#number-input').value;
  val = parseInt(val);
  var result = '';
  if (isNaN(val)) {
    result = 'Invalid Input';
  } else if (val < 0) {
    result = 'This doesn\'t work for negative numbers.';
  } else if (val === 0) {
    result = 'Invalid Input';
  } else if (val >= 4000) {
    result = 'Only numbers up to 4000 are supported.';
  } else {
    result = convertToRoman(val);
  }
  document.querySelector('#p6-text-container').innerHTML = result;
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#translate-number').addEventListener('click', onSubmit);
});


