function realtimeClock() { 
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var second = rtClock.getSeconds();

    //bulan tanggal tahun 
    var year = rtClock.getFullYear();
    var month = rtClock.getMonth();
    var day = rtClock.getDay();
    var hari = rtClock.getUTCDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = ( hours < 12 ) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    second = ("0" + second).slice(-2);

    //Display the clock
    document.getElementById('clock').innerHTML =
    hours + "  :  " + minutes + "  :  " + second + " " + amPm;
    var  t =  setTimeout(realtimeClock, 500);


    //display  the month and day and years
    document.getElementById("hari").innerHTML =
    year + " " + months[month] + " " + hari + " " + days[day];
    

}