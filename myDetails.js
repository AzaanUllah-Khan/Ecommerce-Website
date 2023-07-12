import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


document.getElementById('name').value = localStorage.getItem('Name')
document.getElementById('country').value = localStorage.getItem('Country')
document.getElementById('phone').value = localStorage.getItem('Phone')
document.getElementById('address').value = localStorage.getItem('Address')

const btnAccount = document.getElementById('BtnAccount')
btnAccount.addEventListener('click', () => {
    localStorage.setItem('Name', document.getElementById('name').value)
    localStorage.setItem('Country', document.getElementById('country').value)
    localStorage.setItem('Phone', document.getElementById('phone').value)
    localStorage.setItem('Address', document.getElementById('address').value)
    alert('Account details updated')

})



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
const auth = getAuth();
const btn = document.getElementById("logout");
btn.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out Successfully.");
        localStorage.setItem('logged', false)
        window.location.href = 'index.html';

        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        alert('Cant logout The Account')
    });
})