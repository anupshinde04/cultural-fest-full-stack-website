// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFi7vqhqN5cjgS_jtmsP96M_OEQcM33Oc",
  authDomain: "rhythm-ember.firebaseapp.com",
  projectId: "rhythm-ember",
  storageBucket: "rhythm-ember.appspot.com",
  messagingSenderId: "1035922542587",
  appId: "1:1035922542587:web:208d66b1c15d74fcbc455e",
  measurementId: "G-VF2EF5V3BG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const signInForm = document.getElementById('signInForm');
  const signUpFormFields = document.getElementById('signUpFormFields');
  const successPopup = document.getElementById('successPopup');
  const errorPopup = document.getElementById('errorPopup');
  const toggleForm = document.getElementById('toggleForm');
  
  // Show sign-up form and hide sign-in form
  function showSignUpForm() {
    signInForm.style.display = 'none';
    signUpFormFields.style.display = 'block';
  }
  
  // Show sign-in form and hide sign-up form
  function showSignInForm() {
    signInForm.style.display = 'block';
    signUpFormFields.style.display = 'none';
  }
  
  // Toggle between sign-up and sign-in forms
  toggleForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (signInForm.style.display === 'none') {
      showSignInForm();
    } else {
      showSignUpForm();
    }
  });
  
  // Sign up form submission
  signUpFormFields.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signUpFormFields['name'].value;
    const email = signUpFormFields['emailSignUp'].value;
    const password = signUpFormFields['passwordSignUp'].value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        successPopup.style.display = 'block';
        setTimeout(() => {
          successPopup.style.display = 'none';
          window.location.href = 'index.html'; // Redirect to index page
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Sign up error:', errorMessage);
        document.getElementById('errorPopupMessage').textContent = errorMessage;
        errorPopup.style.display = 'block';
      });
  });
  
  // Sign in form submission
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm['emailSignIn'].value;
    const password = signInForm['passwordSignIn'].value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        successPopup.style.display = 'block';
        setTimeout(() => {
          successPopup.style.display = 'none';
          window.location.href = 'index.html'; // Redirect to index page
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Sign in error:', errorMessage);
        document.getElementById('errorPopupMessage').textContent = errorMessage;
        errorPopup.style.display = 'block';
      });
  });
  