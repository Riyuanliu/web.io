const background = document.querySelector(".background")

        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY

            if (scrollY !== 0) {
                background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
            }else{
                background.style.backgroundPosition = ''
            }
        })
window.addEventListener('scroll', function() {
    const button = document.querySelector('.coverpage button');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - windowHeight;
    const opacity = 0.3 + (scrollPosition / maxScroll) * 0.7; /* Change opacity based on scroll position */

    button.style.opacity = opacity.toString(); /* Set opacity dynamically */
});

const scrollButton = document.getElementById('scrollButton');

// Get the coverpage section element
const coverpageSection = document.getElementById('coverpage');

// Function to check if the user has scrolled to the bottom of the coverpage section
function checkScroll() {
    // Calculate the distance between the bottom of the coverpage section and the bottom of the viewport
    const distanceToBottom = coverpageSection.getBoundingClientRect().bottom - window.innerHeight;

    // If the distance is less than or equal to 0, the user has reached the end of the section
    if (distanceToBottom <= 0) {
        scrollButton.style.display = 'none'; // Hide the button
    } else {
        scrollButton.style.display = 'block'; // Show the button
    }
}

// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// Initially check the scroll position in case the user starts at the bottom of the section
checkScroll();  