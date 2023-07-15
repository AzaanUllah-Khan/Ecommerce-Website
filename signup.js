import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzZTOJPWdD_1-aA73_WJyxYOEjthJwxP4",
    authDomain: "ecommerce-website-3d42f.firebaseapp.com",
    projectId: "ecommerce-website-3d42f",
    storageBucket: "ecommerce-website-3d42f.appspot.com",
    messagingSenderId: "952174919940",
    appId: "1:952174919940:web:c7bcfc4d3663592dc7d051",
    measurementId: "G-X9HDJQ3PS0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

const btn = document.getElementById('signBtn')
btn.addEventListener('click', () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value  
    const name = document.getElementById('name').value  
    const country = document.getElementById('country').value  
    const phone = document.getElementById('phone').value  
    const address = document.getElementById('address').value  
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
        try {
            const docRef = await setDoc(doc(db, "users", user.uid), {
              name,
              country,
              phone,
              address,
              email,
              uid: user.uid
            });
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        // localStorage.setItem('Name', name)
        // localStorage.setItem('Country', country)
        // localStorage.setItem('Phone', phone)
        // localStorage.setItem('Address', address)
        console.log(user);
        window.location.href = 'login.html'
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
})