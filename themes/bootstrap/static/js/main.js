const button = document.getElementById('btnMain');

// Add a click event listener to the button
button.addEventListener('click', function () {
    eventGoogleAnalytics('click', {
        'app_name': 'myAppName',
        'event_name': 'btn_home'
    });
});


function eventGoogleAnalytics(eventName = 'screen_view', eventParams = {
    'app_name': 'myAppName',
    'screen_name': 'Home'
}) {
    gtag('event', eventName, eventParams);
}