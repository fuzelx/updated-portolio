// function startTime(){
//     let hours = new Date().getHours();
//     let minutes = new Date().getMinutes();
//     let seconds = new Date().getSeconds();

//     minutes = checkTime(minutes);
//     seconds = checkTime(seconds);


// }

// function checkTime(i){
//     if(i < 10){i = "0" + i}

//     return i;
// }

let time = document.getElementById("time");


function formatAMPM(date){
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let ampm = hrs >= 12 ? 'pm' : 'am';

    hrs = hrs % 12;
 hrs = hrs ? hrs : 12;
     mins = mins <10 ? '0' + mins : mins;

      let strTime = hrs + ':' + mins + ' ' + ampm;

      return strTime;
}

time.innerHTML = '{'  +formatAMPM( new Date) + '}';




