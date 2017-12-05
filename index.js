'use strict'

function getDataFromTVMaze(endpointURL, userInput, callback) {
	const searchObject = {
		q: `${ userInput }`
	};

	$.getJSON(endpointURL, searchObject, callback);
}

function getDataFromTasteDive(endpointURL, userInput, callback) {
	const searchObject = {
		url: endpointURL,
		jsonp: 'callback',
		dataType: 'jsonp',
		data: {
			k: 'dev key',
			q: userInput,
			type: 'shows',
			info: 1,
			limit: 5
		},
		success: callback
	}

	$.ajax(searchObject);
}

function displaySearchData(data) {
	console.log(data); // testing

	const results = data.map(item => renderSearchResults(item));

	const resultsDiv = $('#js-results');

	const noResult = `
		<section class="result-show">
			<h2>We couldn't find that show...</h2>
			<img alt="Ben from Parks & Rec shrugging." src="https://media1.tenor.com/images/cb6500ab807240b061b9f1211a8751ab/tenor.gif?itemid=5743623">
			<button id="js-retry" type="submit">Try again.</button>
		</section>
	`;

	if(data.length) {
		resultsDiv
			.html(results)
			.prop('hidden', false);
	} else {
		resultsDiv
			.html(noResult)
			.prop('hidden', false);
	}
}

function renderSearchResults(data) {
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
	} else if (show._links.previousepisode) {
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

function findShowData(data) {
	const endpointHTTP = `${ data[0].show._links.previousepisode.href }`;
	let URLArray = endpointHTTP.split('');
	URLArray.splice(4, 0, 's');

	const endpointHTTPS = URLArray.join('');

	$.getJSON(endpointHTTPS, displayShowData);
}

function displayShowData(data) {
	console.log('displayShowData ran'); // testing
	console.log(data); // testing

	const {name, number, season, airdate} = data;

	const results = `
		<p>The last episode was ${ name }!</p>
		<p>It was episode ${ number } of season ${ season }.</p>
		<p>It aired ${ airdate }.</p>
		<button id="js-recs" type="submit" hidden>Get recommendations?</button>
	`;

	const resultsDiv = $('#js-results');

	resultsDiv.append(results);
	resultsDiv.addClass('flex-direction-column');
}

function displayRecsData(data) {
	console.log('displayRecsData ran') // testing
	console.log(data);
	// this function needs to add the suggested
	// tv shows to the DOM. it should add the 
	// name of each show

}

function handleSubmitButton() {
	$('#js-search').click(function(event) {
		event.preventDefault();

		console.log('handleSubmitButton ran'); // testing

		$('#js-results').removeClass('flex-direction-column');

		const endpointURL = 'https://api.tvmaze.com/search/shows';

		const searchField = $(this).siblings('#js-input');
		const userInput = searchField.val();

		searchField.val('');

		getDataFromTVMaze(endpointURL, userInput, displaySearchData);
	});
}

function handleConfirmButton() {
	$('#js-results').on('click', '.js-confirm', function(event) {
		event.preventDefault();

		console.log('handleConfirmButton ran'); // testing

		const endpointURL = 'https://api.tvmaze.com/search/shows';

		const userInput = $(this).siblings('h2').text();

		const parentSection = $(this).closest('section');

		parentSection.siblings('section').remove();
		$(this).remove();

		getDataFromTVMaze(endpointURL, userInput, findShowData);
	});
}

function handleRetryButton() {
	$('#js-results').on('click', '#js-retry', function(event) {
		event.preventDefault();

		$('#js-results').html('');
	});
}

function handleRecsButton() {
	$('#js-results').on('click', '#js-recs', function(event) {
		event.preventDefault();

		console.log('handleRecsButton ran'); // testing

		const endpointURL = 'https://tastedive.com/api/similar';

		const parentSection = $(this).siblings('section');
		const userInput = parentSection.find('h2').text();
		console.log(userInput);

		getDataFromTasteDive(endpointURL, userInput, displayRecsData);
	});
}
 
function handleButtons() {
	handleSubmitButton();
	handleConfirmButton();
	handleRetryButton();
	handleRecsButton();
}

handleButtons();