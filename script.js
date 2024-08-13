function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Check if the form exists before adding an event listener
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();
        let email = document.getElementById('email').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let eventDate = document.getElementById('eventDate').value.trim();
        let message = document.getElementById('message').value.trim();
        let warning = document.getElementById('warning');
        let confirmation = document.getElementById('confirmation');

        // Clear any previous messages
        warning.innerHTML = '';
        confirmation.innerHTML = '';

        // Simple validation
        if (!firstName || !lastName || !email || !phone || !eventDate) {
            warning.innerHTML = 'Please fill in all the required fields.';
            return;
        }

        // Email validation (simple regex)
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            warning.innerHTML = 'Please enter a valid email address.';
            return;
        }

        // Phone validation (simple regex for 10 digit number)
        let phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            warning.innerHTML = 'Please enter a valid 10-digit phone number.';
            return;
        }

        // If all validation passes
        confirmation.innerHTML = 'Thank you for your inquiry. We will get back to you soon!';

        // Reset the form
        bookingForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer'); // Get the audio element by its ID
    const playPauseBtn = document.getElementById('playPauseBtn'); // Get the play/pause button by its ID
    const seekBar = document.getElementById('seekBar'); // Get the seek bar by its ID

    if (audioPlayer && playPauseBtn && seekBar) { // Ensure the audio elements exist
        playPauseBtn.addEventListener('click', () => { // Add click event listener to the play/pause button
            if (audioPlayer.paused) { // Check if the audio is paused
                audioPlayer.play(); // Play the audio
                playPauseBtn.textContent = 'Pause'; // Change button text to 'Pause'
            } else {
                audioPlayer.pause(); // Pause the audio
                playPauseBtn.textContent = 'Play'; // Change button text to 'Play'
            }
            audioPlayer.volume = 1.0; // Set volume to maximum
        });

        audioPlayer.addEventListener('timeupdate', () => { // Add timeupdate event listener to the audio element
            seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100; // Update seek bar value based on audio progress
        });

        seekBar.addEventListener('input', () => { // Add input event listener to the seek bar
            audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration; // Update audio current time based on seek bar value
        });
    }
});

// Variation of truth questions
var truths = [
    "What's the last lie you told?",
    "What food do you dislike?",
    "What is your phobia",
    "What food do you dislike the most",
    "Where would you like to go on vacation",
    "Do you have a crush on someone right now?",
    "What high school did you go to?",
    "What's your biggest fear?",
    "What's your biggest fantasy?",
];

// Variation of dares
var dares = [
    "Sing twinkle twinkle little star, backwards",
    "Jog in place for 1 hour?",
    "Grab a piece of gum from under the desk and chew it for 15 seconds",
    "Drink tap water",
    "Roll on the ground for 10 feet",
    "Do 10 pushups.",
    "Sing the chorus of your favorite song.",
    "Do a silly dance for 30 seconds.",
];

// Function to display a random truth question
function showTruth() {
  var randomIndex = Math.floor(Math.random() * truths.length);
  document.getElementById('result').textContent = "Truth: " + truths[randomIndex];
}

// Function to display a random dare question
function showDare() {
  var randomIndex = Math.floor(Math.random() * dares.length);
  document.getElementById('result').textContent = "Dare: " + dares[randomIndex];
}



