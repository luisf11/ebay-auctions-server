const request = require('request');
const cheerio = require('cheerio');

function getEbay(item) {

	item = item.split(' ').join('+');
		
	const api = `https://www.ebay.com/sch/i.html?_from=R40&_sacat=0&LH_Auction=1&_nkw=${item}&_sop=1`;

	return new Promise((res, rej) => {
			
		request(api, (err, request, body) => {

			if(err) {
				rej(err);
			} else {
				res(body);
			}

		});

	});
}

const parseUtils = {
	name: $item => $item.find('.lvtitle a')
		.text()
		.trim(),

	href: $item => $item.find('.lvtitle a')
		.attr('href'),

	status: $item => $item.find('.lvsubtitle')
		.text()
		.trim(),

	time: $item => $item.find('.tme span')
		.attr('timems'),

	price: $item => $item.find('.lvprice span')
		.text()
		.split('$')
		.pop()
		.trim(),

	bidding: $item => $item.find('.lvformat span')
		.text()
		.split(' ')[0],

	shipping: $item => $item.find('.lvshipping span')
		.text()
		.trim()
}

function parseEbay(body) {

	const items = [];

	return new Promise((res, rej) => {

		const $ = cheerio.load(body, { ignoreWhitespace: true });

		const $sresult = $('.sresult');

		$sresult.each((i, item) => {
			
			const $item = $(item);

			item = {
				name: parseUtils.name($item),
				status: parseUtils.status($item),
				time: parseUtils.time($item),
				price: parseUtils.price($item),
				bidding: parseUtils.bidding($item),
				shipping: parseUtils.shipping($item),
				href: parseUtils.href($item)
			};

			console.log();

			items.push(item);

			if(items) {
				res(items);
			} else {
				rej('Coulnt parse the ebay items');
			}

		});

	});

}

setInterval(() => {

	getEbay('macbook pro')
	.then(parseEbay)
	.then(items => items.map(Object.values).forEach(console.log))
	.catch(e => console.log(e));

}, 60 * 60 * 2);