'use strict'

function handleSubmitButton() {
	$('#js-search').click(function(event) {
		event.preventDefault();

		const searchField = $(this).siblings('#js-input');
		const userInput = searchField.val();

		searchField.val('');

		getDataFromApi(userInput, displayApiData);
	});
}

handleSubmitButton();