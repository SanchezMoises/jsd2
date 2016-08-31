



var newsKey    = '5650db7851ef4895b2f40e5366fac400';
var newsSource = 'bbc-sport';
var sourceJson;


var home                = document.querySelector('.home');
var popUp               = document.querySelector('#popUp');
var closePopUp          = document.querySelector('.closePopUp');
var articles            = document.querySelector('#main');
var articleTitle        = document.querySelector('.articleContent a');
var articleTemplate     = document.querySelector('#article-template');
var articlePreviewTitle = document.querySelector('#popUp h1');
var articlePreviewDesc  = document.querySelector('#popUp p');
var articlePreviewLink  = document.querySelector('#popUp .popUpAction');
var currentSource       = document.querySelector('.current-source');
var sourcesDropdown     = document.querySelector('.news-sources');
var sources = [
	{
		name: 'BBC',
		code: 'bbc-sport'
	},
	{
		name: 'TIME',
		code: 'time'
	},
	{
		name: 'CNN',
		code: 'cnn'
	},
	{
	    name: 'ESPN',
		code: 'espn'	
	},
	{
	    name: 'IGN',
		code: 'ign'	
	},
	{
	    name: 'WIRED',
		code: 'wired-de'	
	},
];


window.addEventListener('load', getArticles)
closePopUp.addEventListener('click', togglePopUp);
articles.addEventListener('click', articlePreview);
sourcesDropdown.addEventListener('click', selectSource);


function getArticles() {
	var url = 'https://newsapi.org/v1/articles?source=' + newsSource + '&apiKey=' + newsKey;
	$.getJSON(url, displayArticles);
}




function togglePopUp(e) {
	e.preventDefault();
	popUp.classList.add('hidden');
}

function articlePreview(e) {
	e.preventDefault();
	popUp.classList.remove('loader');
	popUp.classList.remove('hidden');
	articlePreviewContent(e);
}

function selectSource(e) {
	e.preventDefault();
	var target = e.target.closest('li');
	var i = 0;

	while (target = target.previousElementSibling) {
		i++;
	}

	newsSource = sources[i].code;
	currentSource.innerHTML = sources[i].name;
	popUp.classList.remove('hidden');
	popUp.classList.add('loader');
	getArticles();
}

function showDefaultSource(e) {
	e.preventDefault();
	newsSource = sources[0].code;j
	currentSource.innerHTML = sources[0].name;
	getArticles();
}








function displayArticles(json) {
	main.innerHTML = '';

	var template = Handlebars.compile(articleTemplate.innerHTML);
	var articleHTML = template(json.articles);
	main.innerHTML = articleHTML;

	popUp.classList.add('hidden');


	sourceJson = json;
}

function articlePreviewContent(e) {

	var target = e.target.closest('article');
	var i = 0;

	while (target = target.previousElementSibling) {
		i++;
	}

	
	articlePreviewTitle.innerHTML = sourceJson.articles[i].title;
	articlePreviewDesc.innerHTML = sourceJson.articles[i].description;
	articlePreviewLink.setAttribute('href', sourceJson.articles[i].url);
}

