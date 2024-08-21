function openTab(tabId) {
    var i, tabPane;
    tabPane = document.getElementsByClassName('tab-pane');
    for (i = 0; i < tabPane.length; i++) {
        tabPane[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');
}

function notifyChange(tabId) {
    var notification = new Notification("Zmiana w zakładce", {
        body: "W zakładce " + tabId + " dokonano zmiany.",
    });
}

if (Notification.permission !== 'granted') {
    Notification.requestPermission();
}

var inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        notifyChange(this.parentNode.id);
    });
});