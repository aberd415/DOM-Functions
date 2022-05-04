
var paragraph = document.createElement(paragraph);

paragraph.textContent = 'The DOM is the bomb!';

document.body.appendChild(paragraph);


var div = document.createElement('DIV');

div.style.height = '100vh';

document.body.appendChild(div);

div.addEventListener('mousemove', function(event) {
    console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + ', ' + y;
    div.style.backgroundColor = 'rgb('+ x + ', ' + y + ', 100)';
});