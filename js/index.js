document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    networkState = navigator.connection.type;
    if (networkState != 'none') {
        navigator.vibrate(1000);
        var win = window.open("https://www.onecardservicios.mx/Extranet/AppOneCardTest/");
    } else {
        navigator.notification.alert('Intentelo de nuevo conectado cuando tenga acceso a Internet', function() {
            navigator.app.exitApp();
        }, 'OneCard', 'Ok');
    }
}
