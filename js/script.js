function calcRemainYearsToEighteen(ageInput) {
	let differenceAge = 18 - ageInput;
	if (ageInput <= 18) {
		document.getElementById("box-eighteen-age").innerHTML = differenceAge;
	} else {
		document.getElementById("box-eighteen-age").innerHTML = "Hai piú di 18";
	}
}

// const calcRemainYearsToEighteen = (ageInput) => {}

function calcRemainYearsToFifty(ageInput) {
	let differenceAge = 50 - ageInput;
	if (ageInput <= 50) {
		document.getElementById("box-fifty-age").innerHTML = differenceAge;
	} else {
		document.getElementById("box-fifty-age").innerHTML = "Hai piú di 50";
	}
}

function calcRemainYearsToHundred(ageInput) {
	let differenceAge = 100 - ageInput;

	ageInput <= 100
		? (document.getElementById("box-hundred-age").innerHTML = differenceAge)
		: (document.getElementById("box-hundred-age").innerHTML =
				"Impossibile");
}

function getAgeFromInput() {
	let inputValue = document.getElementById("age").value;

	console.log(inputValue);

	calcRemainYearsToFifty(inputValue);
	calcRemainYearsToEighteen(inputValue);
	calcRemainYearsToHundred(inputValue);
}
