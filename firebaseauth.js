var firebaseConfig = {
    apiKey: "AIzaSyBZVbWdPV3GOKgLKKniLnq7xLzi31O1OJo",
    authDomain: "the-final-e7c07.firebaseapp.com",
    projectId: "the-final-e7c07",
    storageBucket: "the-final-e7c07.appspot.com",
    messagingSenderId: "878766702868",
    appId: "1:878766702868:web:8e162d753f301e94dcc201"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('USER ID').value;
    const password = document.getElementById('PASSWORD').value;
  console.log(email, password);
    // Check if email and password match the ones stored in the database
    const database = firebase.database();

    const usersRef = database.ref('users');
    usersRef.once('value', (data) => {
      const users = data.val();
      const user = users[email];
      console.log(email,user)

      if (users[email] === password) {

        // User authenticated, redirect to client page
        window.location.href = 'Calendar Client side.html';
      } else {
        console.error('Invalid email or password');
      }
    });
  });
