
var localname = localStorage.getItem('Name')
if (localname && localname.length > 10) {
    localname = localname.slice(0, 8) + "..."
}
else {
    localname = localname
}
if (localStorage.getItem('logged') == 'true') {
    document.getElementById('na').innerText = localname || "My Account";
    document.getElementById('n').setAttribute('onclick', 'window.location.href="myDetails.html"')
}
else {
    document.getElementById('na').innerText = "My Account"
    document.getElementById('n').setAttribute('onclick', 'window.location.href="login.html"')
}
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
        else{
            setTimeout(()=>{
                document.getElementById('i').style.opacity = '0';
                document.getElementById('i').style.visibility = 'hidden';
                document.getElementById('ii').style.bottom = '-150px';
                document.getElementById('ii').style.transform = 'rotate(0deg)';
            },1000)
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