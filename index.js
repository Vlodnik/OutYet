'use strict'

function getDataFromApi(userInput, callback) {
	const endpointURL = 'http://api.tvmaze.com/search/shows';

	const searchObject = {
		q: `${ userInput }`
	};

	$.getJSON(endpointURL, searchObject, callback)
}

function displayApiData(data) {
	console.log(data); // testing
	console.log(data[0].show._links.previousepisode.href); // testing

	const results = data.map(item => renderResults(item));

	const resultsDiv = $('#js-results');

	resultsDiv
		.html(results)
		.prop('hidden', false);
}

function renderResults(data) {
	const show = data.show;

	if(show.image) {
		return `
			<section class="result-show">
				<h2>${ show.name }</h2>
				<a href="${ show.officialSite }" target="_blank">
					<img src="${ show.image.medium }" alt="${ show.name }">
				</a>
				<button class="js-confirm" type="submit">Is this your show?</button>
			</section>
		`;
	} else {
		return `
			<section class="result-show">
				<h2>${ show.name }</h2>
				<a href="${ show.officialSite }" target="_blank">
					<img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="${ show.name }">
				</a>
				<button class="js-confirm" type="submit">Is this your show?</button>
			</section>
		`;
	}
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