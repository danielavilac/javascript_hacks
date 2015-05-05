var bubble = document.createElement('div');
bubble.className = "hack_log";
$('body').insertBefore(bubble, $('body').childNodes[0]);
bubble = document.createElement('div');
bubble.className = "log";
bubble.innerHTML = "Logs";
bubble.onclick ="toggleLogs()";
// bubble.setAttribute("src", "javascript:toggleLogs()");
$('.hack_log').appendChild(bubble);
$('.log').setAttribute('onclick', 'toggleLogs()');


bubble = document.createElement('div');
bubble.className = "logs";
$('.hack_log').appendChild(bubble);
var hack_log = $('.logs');
hack_log.style.visibility = "hidden";

var s = document.createElement("style");
s.type = "text/css";
s.innerHTML = ".app-wrapper {" + // wrapper
    "position: absolute;" +
    "z-index: 0; }" +
    ".hack_log {" + // hack_log
    "height: 0;" +
    "position: absolute;" +
    "z-index: 10;" +
    "right: 10px;" +
    "top: 10px; }" +
    ".log {" + // log
    "background-color: white;" +
    "padding: 10px;" +
    "border-radius: 30px; }" + 
    ".logs {" + // log
    "position: absolute;" +
    "right: 67px;" +
    "width: 500px;" +
    "top: 10px;" +
    "background-color: black;" +
    "color: white;" +
    "font-family: 'Courier New', Courier, monospace;" +
    "font-size: 12px;" +
    "padding: 10px; }";

document.head.appendChild(s);

function addLog(log) {
    p = document.createElement('p');
    p.innerHTML = log;
    hack_log.appendChild(p);
}

// Information footer
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "a { color: ;position: absolute; bottom: 2px; font-size: 11px; left: 3px; }";
document.head.appendChild(css);

var t = document.createElement('a');
var css = "position: absolute; bottom: 2px; font-size: 11px; left: 3px;";
t.innerHTML = "Hacked by Daniel Ávila";
t.href = "http://www.danielavila.me";
t.target = "_blank";
$('.app-wrapper').appendChild(t);

function formatDate(date) {
    var d = date ? new Date(date) : new Date;
    var dt = [d.getFullYear(), d.getMonth(), d.getDay()].join("/"),
        tm = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
    return dt + " " + tm;
}

var status = "";

rep = window.setInterval(function(){
    if ($('h2.chat-title') == null) {
        if (status != "connecting") {
            addLog("Please select a conversation");
            status = "connecting";
        }
        return;
    }

    var online = $('.ellipsify[title=online]');
    var typing = $('.ellipsify[title=typing…]');
    var name = $('h2.chat-title').childNodes[0].title;

    if (online != null && status != "online") {
        addLog(name + " is online (" + formatDate(Date.now()) + ")");
        status = "online";
    } else if (typing != null && status != "typing") {
        addLog(name + " is typing (" + formatDate(Date.now()) + ")");
        status = "typing";
    } else if (online == null && typing == null && status != "offline") {
        addLog(name + " is offline (" + formatDate(Date.now()) + ")");
        status = "offline";
    }
}, 100);

function end() {
    clearInterval(rep);
}

function toggleLogs() {
    if (hack_log.style.visibility == "hidden") {
        hack_log.style.visibility = "visible";
    } else {
        hack_log.style.visibility = "hidden";
    }
}


// Replace button

$('[contenteditable=true]').innerHTML = "algo asi";

var button = document.createElement('button');
button.className = "icon btn-icon icon-send";
button.setAttribute('data-reactid', '.0.1:$main.$5218119066640@c-us.2.1.2');

a = $('[data-reactid=".0.1:$main.$5218180298752@c-us.2.1.$ptt"]')
a.parentNode.replaceChild(button, a);

//emojis

var emojis = $('.icon-smiley');
var emoji = $('span.emoji');
var btn = $('.btn-icon');

function sendFace() {
    emojis.click();
    emoji.click();
    btn.click();
}

$('.icon-smiley').click();
$('span.emoji').click();
// $('[contenteditable=true]').innerHTML = "ya!!";
$('span.emoji').click();
