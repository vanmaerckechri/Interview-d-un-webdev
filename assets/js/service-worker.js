const version = '01';

self.addEventListener('install', event => {
  console.log('First service worker log')
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', { scope: '/' })
        .then(function(reg) {
            mainMessage('notify', 'Service worker is started');
        }).catch(function(error) {
            mainMessage('alert', 'Service worker registration failed with ' + error);
        });
} else {
    mainMessage('alert', 'Your browser do not support Service Worker');
}


