// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//din kode må ikke indholde 'hard-code' værdier
	//det kan blive svært at vedligeholde kodebasen, hvis maksimumværdien fx skal ændres til 15.
	//og du manuelt skal finde alle de steder, hvor værdien 10 skal ændres til 15
	//forstil dig, at det stod mange steder..
	//operet variable til de tre værdier
	//erstat de 'hard-code' værdier i koden med variablene, så kodebasen bliver nemmere at vedligeholde.
	// skriv din kode her...
	const buttonUp = document.querySelector("#btn-count-increase");
	const buttonDown = document.querySelector("#btn-count-decrease");
	const texFinder = document.querySelector("#text-count");
	let countUp = 5;
	let maxValue = 15;
	let minValue = 0;
	texFinder.textContent = countUp + "🕺";
	buttonUp.addEventListener("click", count);
	buttonDown.addEventListener("click", countNed);
	function updateNumber() {
		texFinder.textContent = countUp;
	}
	function count() {
		if (countUp < maxValue) {
			countUp += 1;
			updateNumber();
		}
	}
	function countNed() {
		if (countUp > minValue) {
			countUp -= 1;
			updateNumber();
		}
	}
}); // Afslutter: DOMContentLoaded
