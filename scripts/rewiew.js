var db = [
	[
		"Илья Осипов",
		"Одностраничный сайт-визитка",
		"Обратился к Akir’е в 2021 году, необходимо было сделать небольшой сайт-визитку для нашего стартапа. <br><br>С самого начала помогли разобраться и скорректировать тех-задание. Назначили сроки, договорились о цене. Работа была сделана раньше на 2 рабочих дня. Правок не потребовалось.",
	],
	[
		"Андрей Мартынченков",
		"Интернет-магазин",
		"Все просто отлично! Классно сработались с командой разработчиков. Отдельная благодарность UI/UX Дизайнеру, помог грамотно доработать интерфейс сайта. <br><br> После начала работы держали связь 24/7. Работой доволен по всем фронтам! Обязательно обращусь еще раз.",
	],
	[
		"Артур Самойлов",
		"Сведение трека",
		"Итоговым результатом был доволен. Сроки поджимали, так что необходимо было выполнить работу в кратчайшее время. <br><br> Обговорили условия. Во время работы появлялись правки и новые предложения, которые были красиво внедрены в итоговый результат. Все супер.",
	],
	[
		"Арарат Авопян",
		"Чат-бот для магазина одежды",
		"Появилась необходимость внедрить на сайт и в телеграм бота, который позволял пользователям отслеживать статус заказа и быстро связываться с тех. поддержкой. <br><br> Обратились к Akira.DM. Работа была выполнена качественно. Спасибо!",
	],
	[
		"Анастасия Филатова",
		"Личный блог",
		"Решила запустить свой блог про новости из мира технологий. Кроме инстаграмма и телеграмма был выбран формат личной страницы с блогом. <br><br> Все было супер! Результатом довольна со всех сторон. При необходимости, буду обращаться снова!",
	],
	[
		"Григорий Носов",
		"Консультации по веб-программированию",
		"Разработал небольшой проект, но оставалось пара вопросов по безопасности и оптимизации. <br><br> Akira.DM назначила онлайн-встречу, на ней задал все интересующие вопросы, получил развернутые ответы и советы. Все понравилось.",
	],
];
var clicker = 0;
var index = 0;
function getRewiewNext() {
	index += 1;
	clicker += 1;
	if (index >= 6) {
		index = 0;
	}

	var label = document.getElementById("rewiewLabel");
	label.style.opacity = "0";
	label.style.transition = "0.3s";
	setTimeout(() => {
		label.innerHTML = db[index][0];
		label.style.opacity = "1";
	}, 600);

	var area = document.getElementById("rewiewArea");
	area.style.opacity = "0";
	area.style.transition = "0.3s";
	setTimeout(() => {
		area.innerHTML = db[index][1];
		area.style.opacity = "1";
	}, 800);

	var text = document.getElementById("rewiewText");
	text.style.opacity = "0";
	text.style.transition = "0.3s";
	setTimeout(() => {
		text.innerHTML = db[index][2];
		text.style.opacity = "1";
	}, 1000);
}

function getRewiewAuto() {
	index += 1;

	if (index >= 6) {
		index = 0;
	}

	var label = document.getElementById("rewiewLabel");
	label.style.opacity = "0";
	label.style.transition = "0.3s";
	setTimeout(() => {
		label.innerHTML = db[index][0];
		label.style.opacity = "1";
	}, 600);

	var area = document.getElementById("rewiewArea");
	area.style.opacity = "0";
	area.style.transition = "0.3s";
	setTimeout(() => {
		area.innerHTML = db[index][1];
		area.style.opacity = "1";
	}, 800);

	var text = document.getElementById("rewiewText");
	text.style.opacity = "0";
	text.style.transition = "0.3s";
	setTimeout(() => {
		text.innerHTML = db[index][2];
		text.style.opacity = "1";
	}, 1000);
}

function getRewiewBack() {
	clicker += 1;
	index -= 1;

	if (index < 0) {
		index = 5;
	}

	var label = document.getElementById("rewiewLabel");
	label.style.opacity = "0";
	label.style.transition = "0.3s";
	setTimeout(() => {
		label.innerHTML = db[index][0];
		label.style.opacity = "1";
	}, 600);

	var area = document.getElementById("rewiewArea");
	area.style.opacity = "0";
	area.style.transition = "0.3s";
	setTimeout(() => {
		area.innerHTML = db[index][1];
		area.style.opacity = "1";
	}, 800);

	var text = document.getElementById("rewiewText");
	text.style.opacity = "0";
	text.style.transition = "0.3s";
	setTimeout(() => {
		text.innerHTML = db[index][2];
		text.style.opacity = "1";
	}, 1000);
}

setInterval(() => {
	if (clicker == 0) {
		getRewiewAuto();
	}
}, 6000);
