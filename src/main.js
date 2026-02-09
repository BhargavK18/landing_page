import './style.css'

// Timer Logic
const targetDate = new Date("2026-02-22T10:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Name Cycling Logic
const names = ["Ramya", "Suresh", "Priya", "Rahul", "Anjali", "Vikram", "Sneha", "Karthik", "Divya", "Arjun"];
let nameIndex = 0;

function cycleNames() {
    nameIndex = (nameIndex + 1) % names.length;
    const nameElement = document.getElementById("dynamic-name");
    nameElement.style.opacity = 0; // Fade out

    setTimeout(() => {
        nameElement.innerText = names[nameIndex];
        nameElement.style.opacity = 1; // Fade in
    }, 500);
}

setInterval(cycleNames, 3000);
// Add transition style dynamically
const style = document.createElement('style');
style.innerHTML = `
  #dynamic-name {
    transition: opacity 0.5s ease-in-out;
  }
`;
document.head.appendChild(style);
