const quotes_count = 3;
let quotes;

try {
	const quotes_response = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes/${quotes_count}`);
	quotes = await quotes_response.json();
} catch (error) {
	alert(error);
}

quotes.forEach((quote, index) => {
	const new_item = document.querySelector('#item-template').content.firstElementChild.cloneNode(true);

	const indicator_button = document.createElement('button');
	indicator_button.dataset.bsTarget = '#carouselIndicators';
	indicator_button.dataset.bsSlideTo = index;
	indicator_button.type = 'button';
	indicator_button.setAttribute('aria-label', `Quote ${index}`);

	if (index == 0) {
		new_item.classList.add('active');
		indicator_button.classList.add('active');
	}

	new_item.querySelector('[name=paragraph]').textContent = quote.quote;
	new_item.querySelector('cite').textContent = `— ${quote.author}`;

	document.querySelector('.carousel-inner').appendChild(new_item);
	document.querySelector('.carousel-indicators').appendChild(indicator_button);
});