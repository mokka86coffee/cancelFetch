//<div><button class="download btn m-2">download</button><button class="abort btn m-2">abort</button></div>

var controller = new AbortController();
var signal = controller.signal;


var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
});

function fetchVideo() {
  let url = 'https://api1.remontista.ru/tools/all_work_type';

  fetch(url, {method: 'get', signal})
	  .then( res => res.json() )
	  .then( r => r )
	  .catch( err => console.log(err.message))
}
