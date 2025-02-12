
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

const button = document.getElementById('btnMain');

// Add a click event listener to the button
button.addEventListener('click', function () {
    fbq('track', 'Main click');
    gtag('event', 'Main click', {
        'app_name': 'myAppName',
        'event_name': 'btn_home'
    });
});