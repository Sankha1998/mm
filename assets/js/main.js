/**
 * Preloader
 */

let preloader = document.querySelector('#preloader')
if (preloader) {

setTimeout(function(){
    // window.addEventListener('load', () => {
        preloader.remove()
    //   });
},2000)
    


}

/**
 * Summary
 */

setTimeout(function(){


    let score  = parseInt(document.querySelector('.score').innerHTML);
document.querySelector('.score').innerHTML = '';

 
let i = 0;
setInterval(function(){

    if(i<=score){

        document.querySelector('.score').innerHTML = `<b>${i}</b>`;
        i+=1;
    }
   
},100)

    
let latesubmit  = parseInt(document.querySelector('.late-submit').innerHTML);
document.querySelector('.late-submit').innerHTML = '';



let j = 0;
setInterval(function(){

    if(j<=latesubmit){

        document.querySelector('.late-submit').innerHTML = `<b>${j}</b>`;
        j+=1;
    }
   
},100)



let taskwon  = parseInt(document.querySelector('.task-won').innerHTML);
document.querySelector('.task-won').innerHTML = '';



let z = 0;
setInterval(function(){

    if(z<=taskwon){

        document.querySelector('.task-won').innerHTML = `<b>${z}</b>`;
        z+=1;
    }
   
},100)



let rank  = parseInt(document.querySelector('.rank').innerHTML);
document.querySelector('.rank').innerHTML = '';



let k = 0;
setInterval(function(){

    if(k<=rank){

        document.querySelector('.rank').innerHTML = `<b>${k}</b>`;
        k+=1;
    }
   
},100)

},2500)



