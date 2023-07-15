import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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
const db = getFirestore(app);
// var localname = localStorage.getItem('Name')
// if (localname && localname.length > 10) {
//     localname = localname.slice(0, 8) + "..."
// }
// else {
//     localname = localname
// }
if (localStorage.getItem('logged') == 'true') {
    // document.getElementById('na').innerText = localname || "My Account";
    document.getElementById('n').setAttribute('onclick', 'window.location.href="myDetails.html"')
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                if (doc.id == uid) {
                    console.log(`${doc.id} => ${JSON.stringify(doc.data().name)}`);
                    if (doc.data().name.length > 10) {
                        document.getElementById('na').innerHTML = (doc.data().name).slice(0, 8) + " ..."
                    }
                    else {
                        document.getElementById('na').innerHTML = doc.data().name
                    }
                }
            });
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}
else {
    document.getElementById('na').innerText = "My Account"
    document.getElementById('n').setAttribute('onclick', 'window.location.href="login.html"')
}





var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        for (var i = 0; i < 9; i++) {
            p1.innerHTML += `
            <div class="mainProduct">
            <div class="img">
            <img
                src="${res.products[i].images[0]}">
            <span>NEW</span>
            </div>
            <p class="detailMain"><b>${(res.products[i].title).slice(0,27)+"..."}</b> <hr/ style='margin:10px 0; background-color: white; opacity: 0.4'> <p>${(res.products[i].description).slice(0,50)+  ' ...'}</p></p>
            <div class="price">
            <h1>$ ${((res.products[i].price) * (res.products[i].discountPercentage) / 100).toFixed(3)}</h1><small>$ ${res.products[i].price}</small>
            </div>
            <button>ORDER NOW</button>
                         </div>
            `
        }
        for (var i = 9; i < 20; i++) {
            p2.innerHTML += `
            <div class="mainProduct oo">
            <div class="img">
            <img
                src="${res.products[i].images[0]}">
            <span>NEW</span>
            </div>
            <p class="detailMain"><b>${(res.products[i].title).slice(0,27)+"..."}</b> <hr/ style='margin:10px 0; background-color: white; opacity: 0.4'> <p>${(res.products[i].description).slice(0,50)+  ' ...'}</p></p>
            <div class="price">
            <h1>$ ${((res.products[i].price) * (res.products[i].discountPercentage) / 100).toFixed(3)}</h1><small>$ ${res.products[i].price}</small>
            </div>
            <button>ORDER NOW</button>
                             </div>
            `
        }
        for (var i = 20; i < 29; i++) {
            p3.innerHTML += `
            <div class="mainProduct tt">
            <div class="img">
            <img
                src="${res.products[i].images[0]}">
            <span>NEW</span>
            </div>
            <p class="detailMain"><b>${(res.products[i].title).slice(0,27)+"..."}</b> <hr/ style='margin:10px 0; background-color: white; opacity: 0.4'> <p>${(res.products[i].description).slice(0,50)+  ' ...'}</p></p>
            <div class="price">
            <h1>$ ${((res.products[i].price) * (res.products[i].discountPercentage) / 100).toFixed(3)}</h1><small>$ ${res.products[i].price}</small>
            </div>
            <button>ORDER NOW</button>
                         </div>
            `
        }
        for (var i = 15; i < res.products.length; i++) {
            p4.innerHTML += `
            <div class="mainProduct ff">
            <div class="img">
            <img
                src="${res.products[i].images[0]}">
            <span>NEW</span>
            </div>
            <p class="detailMain"><b>${(res.products[i].title).slice(0,23)+"..."}</b> <hr/ style='margin:10px 0; background-color: white; opacity: 0.4'> <p>${(res.products[i].description).slice(0,50)+  ' ...'}</p></p>
            <div class="price">
            <h1>$ ${((res.products[i].price) * (res.products[i].discountPercentage) / 100).toFixed(3)}</h1><small>$ ${res.products[i].price}</small>
            </div>
            <button>ORDER NOW</button>
                                 </div>
                                 `
        }
    }
    );


// Product Card Template
// < div class="mainProduct ff" >
//                         <div class="img">
//                             <img
//                                 src="./img/gaba-national-gns-1819m-15-ton-split-air-conditioner-with-official-warranty-image1-600x600__07857_zoom.jpg">
//                             <span>NEW</span>
//                         </div>
//                         <p class="detailMain">Gaba National GNS-1819M Non-Inverter Split Ai..</p>
//                         <div class="price">
//                             <h1>Rs.148,499</h1><small>155,899</small>
//                         </div>
//                         <button>ORDER NOW</button>
//                     </div >

window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2000) {
        document.getElementById('i').style.opacity = '1';
        document.getElementById('i').style.visibility = 'visible';
        document.getElementById('ii').style.bottom = '20px';
        document.getElementById('ii').style.transform = 'rotate(360deg)';
    } else {
        if (document.getElementById('innerii').classList.contains('open')) {
            document.getElementById('innerii').classList.toggle('open')
        }
        else {
            setTimeout(() => {
                document.getElementById('i').style.opacity = '0';
                document.getElementById('i').style.visibility = 'hidden';
                document.getElementById('ii').style.bottom = '-150px';
                document.getElementById('ii').style.transform = 'rotate(0deg)';
            }, 1000)
        }
    }
});
const mainLatestContainer = document.querySelector('.mainLatest');
const mainProductWidth = document.querySelector('.mainProduct').offsetWidth;
const scrollSpeed = 2000;

// Function to handle the scroll event
function handleScroll() {
    // Calculate the current scroll position
    const scrollLeft = mainLatestContainer.scrollLeft;

    // Check if we have reached the end of the container
    if (scrollLeft + mainLatestContainer.clientWidth >= mainLatestContainer.scrollWidth) {
        // Scroll back to the beginning with smooth behavior
        setTimeout(() => {
            mainLatestContainer.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }, scrollSpeed)
    }
}


// Add the scroll event listener
mainLatestContainer.addEventListener('scroll', handleScroll);

// Start the scrolling animation
setInterval(() => {
    // Scroll to the next position with a smooth behavior
    mainLatestContainer.scrollTo({
        left: mainLatestContainer.scrollLeft + mainProductWidth,
        behavior: 'smooth'
    });
}, scrollSpeed);
const mainLatestContainer2 = document.querySelector('.o');
const mainProductWidth2 = document.querySelector('.oo').offsetWidth;
const scrollSpeed2 = 2000;

// Function to handle the scroll event
function handleScroll2() {
    // Calculate the current scroll position
    const scrollLeft = mainLatestContainer2.scrollLeft;

    // Check if we have reached the end of the container
    if (scrollLeft + mainLatestContainer2.clientWidth >= mainLatestContainer2.scrollWidth) {
        // Scroll back to the beginning with smooth behavior
        setTimeout(() => {
            mainLatestContainer2.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }, scrollSpeed2)
    }
}

// Add the scroll event listener
mainLatestContainer2.addEventListener('scroll', handleScroll2);

// Start the scrolling animation
setInterval(() => {
    // Scroll to the next position with a smooth behavior
    mainLatestContainer2.scrollTo({
        left: mainLatestContainer2.scrollLeft + mainProductWidth2,
        behavior: 'smooth'
    });
}, scrollSpeed2);


const mainLatestContainer3 = document.querySelector('.t');
const mainProductWidth3 = document.querySelector('.tt').offsetWidth;
const scrollSpeed3 = 2000;

// Function to handle the scroll event
function handleScroll3() {
    // Calculate the current scroll position
    const scrollLeft = mainLatestContainer3.scrollLeft;

    // Check if we have reached the end of the container
    if (scrollLeft + mainLatestContainer3.clientWidth >= mainLatestContainer3.scrollWidth) {
        // Scroll back to the beginning with smooth behavior
        setTimeout(() => {
            mainLatestContainer3.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }, scrollSpeed3)
    }
}


// Add the scroll event listener
mainLatestContainer3.addEventListener('scroll', handleScroll3);

// Start the scrolling animation
setInterval(() => {
    // Scroll to the next position with a smooth behavior
    mainLatestContainer3.scrollTo({
        left: mainLatestContainer3.scrollLeft + mainProductWidth3,
        behavior: 'smooth'
    });
}, scrollSpeed3);


const mainLatestContainer4 = document.querySelector('.f');
const mainProductWidth4 = document.querySelector('.ff').offsetWidth;
const scrollSpeed4 = 2000;

// Function to handle the scroll event
function handleScroll4() {
    // Calculate the current scroll position
    const scrollLeft = mainLatestContainer4.scrollLeft;

    // Check if we have reached the end of the container
    if (scrollLeft + mainLatestContainer4.clientWidth >= mainLatestContainer4.scrollWidth) {
        // Scroll back to the beginning with smooth behavior
        setTimeout(() => {
            mainLatestContainer4.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }, scrollSpeed4)
    }
}


// Add the scroll event listener
mainLatestContainer4.addEventListener('scroll', handleScroll4);

// Start the scrolling animation
setInterval(() => {
    // Scroll to the next position with a smooth behavior
    mainLatestContainer4.scrollTo({
        left: mainLatestContainer4.scrollLeft + mainProductWidth4,
        behavior: 'smooth'
    });
}, scrollSpeed4);


document.getElementById('ii').addEventListener('click', () => {
    document.getElementById('innerii').classList.toggle('open')
})