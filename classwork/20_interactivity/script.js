var secretButton = document.querySelector('#secretButton');
var closeButton = document.querySelector('#closeButton');
var msg = document.querySelector('#secretMessage');

secretButton.addEventListener('click', function() {
    msg.showModal();
});

closeButton.addEventListener('click', function() {
    msg.close();
});
