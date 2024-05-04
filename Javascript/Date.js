console.log("Date JS Loaded");

const updateDateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let year = now.getFullYear();
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    document.getElementById("date-time").innerHTML = `${hours}<span style="color: #00ff41">:</span>${minutes}`;
    
    document.getElementById("year-time").innerHTML = `<span style="color: #00ff41">${year}</span>`;
}

updateDateTime();

setInterval(updateDateTime, 60000);