// var searchHotels = document.querySelector(".search-hotels");
var formSearch = document.querySelector(".search-form");
var btnSearch = document.getElementById("search-button-call");
// Если включен JS, то скрываем форму
if (formSearch) {
	formSearch.classList.add("js-form-close");
}
if (btnSearch) {
	// Клик произошёл по кнопке поиска гостиницы
	btnSearch.addEventListener("click", function(event) {
		formSearch.classList.toggle("js-form-close");
		formSearch.classList.toggle("js-form-show");
	});
}
