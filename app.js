// bar bar function chalty rehty hain aur use kafi zaiyda hoty hain

// 1)setInterval = > repeatively running
// 2)setTimeOut  = > after sometime


// var count = 0;
// var interval;

// function timer(){

//     count++;
//     console.log(count)
// }

// interval = setInterval(timer, 1000)

// setTimeout(function(){

//     clearInterval(interval);

// },10000)

// function timeOut(){

//     console.log("running...")
// }

// setTimeout(timeOut, 3000)






 var min = 0;
 var msec = 0;
 var sec = 0;
 var minHeading = document.getElementById('min')
 var secHeading = document.getElementById('sec')
 var msecHeading = document.getElementById('msec')
 var interval;

 function timer(){
    msec++;
    msecHeading.innerHTML = msec;
  if(msec >= 100){
    sec++
    secHeading.innerHTML = sec
    msec = 0;
    }
    else if(sec >= 60){
    min++;
    minHeading.innerHTML = min;
    sec = 0
    }
 }

 function start()
  {
    interval = setInterval(timer,10)
    var simpleButton = document.getElementById('button')
    simpleButton.disabled = true ;
  }

 function stop()
 {
    clearInterval(interval)
    var simpleButton = document.getElementById('button')
    simpleButton.disabled = false ;
    
 }

 function reset()
 {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
    var simpleButton = document.getElementById('button')
    simpleButton.disabled = false ;
 
 }



// var b = arr.indexOf('Osama',2)
// document.write(b)
// var arr = ['Saad','Khadija','Osama','Umar','Erum','Osama','Khadija']
// var b = arr.lastIndexOf('Taha')
// document.write(b)

// var para = 'Mohammad Saad Ali Mohammad'
// var b = para.replace(/Mohammad/g,'Muzaffar')
// document.write(b)

// var exam = 74.99999
// // var b = Math.round(exam)
// // document.write(b)
// // var b = Math.ceil(exam)
// // document.write(b)
// var b = Math.floor(exam)
// document.write(b)


// // console.log(Math.random()*9)
// var heads = prompt('Enter heads value')
// var tails = prompt('Enter tails value')
// var toss = Math.random()*2
// var convert = Math.floor(toss)
// // console.log(convert)
// if(convert == 0){
//     console.log(heads+ " wins")
// }
// else{
//     console.log(tails+ " wins")
// }
