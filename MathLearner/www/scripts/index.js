// Основные сведения о пустом шаблоне см. в следующей документации:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Для отладки кода при загрузке страницы в Ripple, а также на устройства или в эмуляторы Android запустите приложение, задайте точки останова, 
// , а затем запустите "window.location.reload()" в консоли JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Обработка событий приостановки и возобновления Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Платформа Cordova загружена. Выполните здесь инициализацию, которая требуется Cordova.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: Это приложение приостановлено. Сохраните здесь состояние приложения.
    };

    function onResume() {
        // TODO: Это приложение активировано повторно. Восстановите здесь состояние приложения.
    };
})();

function randomColor() {
    var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += colors[Math.round(Math.random() * 15)];
    }
    return result;
}

function randomNumber() {
    var results = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'x'];
    return results[Math.round(Math.random() * 10)];
}

var sign = ['+', '-'];

var termsCount = Math.ceil(Math.random() * 10);
var terms = [];
for (var i = 0; i < termsCount; i++) {
    var factor = new Factor(randomNumber(), sign[Math.round(Math.random())]);
    terms.push(new Term([factor]));
}

var poly = new Polynom(terms);
poly.show();