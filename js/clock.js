function getDate() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    return [hours, minutes, seconds]
}

function parse(hours, minutes, seconds) {
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    text = "#" + hours + minutes + seconds;
    code = hours + minutes + seconds;
    return [text, code]
}

function update(text, code) {
    document.getElementById("clock").textContent = text;
    document.getElementById("background").style.backgroundColor = code;
}

function timing() {
    time = getDate()
    output = parse(time[0], time[1], time[2])
    update(output[0], output[1])
}

function clock() {
    timing()
    setInterval("timing()", 1000);
}

clock();
