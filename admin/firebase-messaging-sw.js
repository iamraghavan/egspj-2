
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyC7EsiaYH-tJj-wNEQl8ZrrmdvKCWS7ztY",
            authDomain: "egspj-bumblebees.firebaseapp.com",
            databaseURL: "https://egspj-bumblebees-default-rtdb.firebaseio.com",
            projectId: "egspj-bumblebees",
            storageBucket: "egspj-bumblebees.appspot.com",
            messagingSenderId: "3531307553",
            appId: "1:3531307553:web:162f525f3ed82d7830c160",
            measurementId: "G-6W931XY0SQ"
        };

        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        

        const messaging = firebase.messaging();

// Request permission for receiving notifications

messaging.setBackgroundMessageHandler(function(payload) {
  // Handle background messages and show notifications
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'http://egspschools.in/images/EGSPJ-International-School-Nagapattinam-Logo.png',
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

