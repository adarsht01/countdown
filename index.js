const second=1000,minute=60*second,hour=60*minute,day=24*hour;
const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes");
const secondsElement=document.querySelector(".seconds");
const heading=document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");
const countdown=()=>{
    let now=new Date();
    let dd=String(now.getDate()).padStart(2,"0");
    let mm=String(now.getMonth()+1).padStart(2,"0");
    let yyyy=now.getFullYear();

    // const enteredDay=prompt("Enter Day").padStart(2,"0");
    const enteredDay=prompt("Enter Day").padStart(2,"0");

    const enteredMonth=prompt("Enter Month").padStart(2,"0");
    if((enteredDay>=1 && enteredDay<=31) && (enteredMonth=>1 && enteredMonth<=12) ){
        let targetdate = `${enteredMonth}/${enteredDay}/${yyyy}`;
   }
   else{
       alert("Enter Valid Day and month");
       const func1=()=>{location.reload();return;}
       func1();
   }
    let targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`;
    now=`${mm}/${dd}/${yyyy}`;
    if(now>targetDate)
    {
        targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`;
    }

    const intervalId=setInterval(() => { 
        const targetTime=new Date(targetDate).getTime();
        const currentTime=new Date().getTime();
        let difference=targetTime-currentTime;
        const leftDay=Math.floor(difference/day);
        const leftHour=Math.floor((difference%day)/hour);
        const leftMinute=Math.floor((difference%hour)/minute);
        const leftSecond=Math.floor((difference%minute)/second);
        const h2=document.getElementsByClassName("h2");
        daysElement.innerText=leftDay;
        hoursElement.innerText=leftHour;
        minutesElement.innerText=leftMinute;
        secondsElement.innerText=leftSecond;

        if(difference<0)
        {
            counterTimer.style.display="none";
            heading.innerText="Time's Up";
            clearInterval(intervalId);
        }
    }, 0);
}
countdown();
