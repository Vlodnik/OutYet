'use strict'

function getDataFromApi(userInput, callback) {
	const endpointURL = 'http://api.tvmaze.com/search/shows';

	const searchObject = {
		q: `${userInput}`
	};

	$.getJSON(endpointURL, searchObject, callback)
}

function displayApiData(data) {
	console.log(data);
}

function handleSubmitButton() {
	$('#js-search').click(function(event) {
		event.preventDefault();

		console.log('handleSubmitButton ran');

		const searchField = $(this).siblings('#js-input');
		const userInput = searchField.val();

		searchField.val('');

		getDataFromApi(userInput, displayApiData);
	});
}

handleSubmitButton();