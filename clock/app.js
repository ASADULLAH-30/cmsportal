var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var ampm = document.getElementById('ampm');
var day = document.getElementById('day');

var monthName = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

var clock = setInterval(function time() {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var min = String(today.getMinutes()).padStart(2, '0');
    var sec = String(today.getSeconds()).padStart(2, '0');

    // Convert to 12-hour format and determine AM/PM
    var ampmValue = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? String(h).padStart(2, '0') : '12'; // the hour '0' should be '12'

    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h;
    minute.innerText = min;
    second.innerText = sec;
    ampm.textContent = ampmValue;
}, 1000);
