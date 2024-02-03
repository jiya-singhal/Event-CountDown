let alertShown = false;
let countdownInterval;

function startCountdown() {
    if (alertShown) {
        return; // If alert has already been shown, do nothing
    }

    const eventName = document.getElementById("event-name");
    const endDateElement = document.getElementById("end-date");
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const eventDateInput = document.getElementById("event-date");

    // Check if the provided date is valid
    const eventDate = new Date(eventDateInput.value);

    if (isNaN(eventDate.getTime())) {
        alert("Please select a valid date and time for your event.");
        return;
    }

    const now = new Date();
    const diff = (eventDate - now) / 1000;

    if (diff < 0) {
        alert("Please select a future date and time for your event.");
        return;
    }

    // Set the boolean variable to true to indicate that the alert has been shown
    alertShown = true;

    eventName.innerText = "Your Event";
    endDateElement.innerText = eventDateInput.value;

    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = (eventDate - now) / 1000;

        if (diff < 0) {
            clearInterval(countdownInterval);
            alert("Your event has started!");
            return;
        }

        daysInput.value = Math.floor(diff / 3600 / 24);
        hoursInput.value = Math.floor(diff / 3600) % 24;
        minutesInput.value = Math.floor(diff / 60) % 60;
        secondsInput.value = Math.floor(diff) % 60;
    }, 1000);
}
