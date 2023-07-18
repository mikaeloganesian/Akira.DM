function ChooseInfo(infoLabel, clickedElemID, ChoosenText) {
	var label = document.getElementById("info-label");
	label.style.opacity = "0";
	label.style.transition = "0.3s";
	setTimeout(() => {
		label.innerHTML = infoLabel;
		label.style.opacity = "1";
	}, 600);

	var choosedCategory = document.querySelector(".choosen");
	choosedCategory.classList.remove("choosen");

	var choosenCategory = document.getElementById(clickedElemID);
	choosenCategory.classList.add("choosen");

	//

	var text = document.querySelector(".info-text");
	text.style.opacity = "0";
	text.style.transition = "0.3s";
	setTimeout(() => {
		text.style.opacity = "1";
		text.innerHTML = ChoosenText;
	}, 1000);
}
