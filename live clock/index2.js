function updateClock() {
    const now = new Date();
    let Hours = now.getHours();
    const meridiem = Hours >= 12 ? "pm" : "am";
    Hours = Hours % 12 || 12;
    Hours = Hours.toString().padStart(2, 0);
    const Minutes = now.getMinutes().toString().padStart(2, 0);
    const Seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${Hours}:${Minutes}:${Seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);