
// Start  Digital Clock

(function Clock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let format = h >= 12 ? 'PM' : 'AM';
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;
  h = (h > 12) ? h - 12 : h = h;
  h = (h < 10) ? '0' + h : h;
  h = (h == 0) ? h = 12 : h;

  document.querySelector('.hour').innerHTML = h;
  document.querySelector('.minute').innerHTML = m;
  document.querySelector('.secent').innerHTML = s;
  document.querySelector('#formating').innerHTML = format;

  setTimeout(Clock, 1000)
})();

// End Digital Clock
// ================================================= *** ================================================//
// Start Light On Off Apps

// Selection
let lightStatus = true;
const lightchil = document.querySelectorAll('.light_01 img');
const lightButton = document.querySelector('.lightOn');
// End Selection

// Add Light on image
function lightons() {
  lightchil.forEach((e) => {
    e.setAttribute('src', './Photo/Light on.png');
    lightStatus = false;
  })
}
// End adding

// Change button effects
function beforvaluess() {

  window.getComputedStyle(lightButton, '::before');
  window.getComputedStyle(lightButton, '::after')
  document.querySelector('.lightOn').setAttribute('style', 'box-shadow: -1px 0px 12px 0px #f4433670;');

  lightButton.style.setProperty('--left', '5px');
  lightButton.style.setProperty('--backgr', '#f4433670');
};
// End button effects

// Add click function
lightButton.addEventListener('click', () => {
  if (lightStatus == true) {
    lightons()
    beforvaluess()
  } else {
    lightoffss()
    lightoff()
  }
});
//  End click function

//   light off function
function lightoffss() {
  lightchil.forEach((e) => {
    e.setAttribute('src', './Photo/Light off.png');
  })
}
function lightoff() {
  window.getComputedStyle(lightButton, '::after')
  window.getComputedStyle(lightButton, '::before');
  lightButton.style.setProperty('--left', '100px');
  lightButton.style.setProperty('--backgr', '#413f3f96');
  lightButton.style.setProperty('--content', 'OFF');
  document.querySelector('.lightOn').setAttribute('style', 'box-shadow: -1px 0px 12px 0px #14131370');
  lightStatus = true;
};
// End light On Off Apps
// ================================================= *** ================================================//
// Start Stopwatch Apps
let counter = true;
const hour = document.querySelector('.hur')
const minute = document.querySelector('.min')
const secent = document.querySelector('.Sec')
const counte = document.querySelector('.Count')
const pause = document.querySelector('.Paus')
const start = document.querySelector('.Star')
const reset = document.querySelector('.Rese')
let count = 0;
let hou = 0;
let min = 0;
let sec = 0;

// End Selection

function Stopwatch() {
  if (counter == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hou = hou + 1;
      min = 0;
    }
    let sece = document.querySelector('.Sec').innerHTML = sec;
    let mine = document.querySelector('.min').innerHTML = min;
    let houe = document.querySelector('.hur').innerHTML = hou;
    let countes = document.querySelector('.Count').innerHTML = count;

    sece = (sece < 10) ? '0' + sece : sece;
    mine = (mine < 10) ? '0' + mine : mine;
    houe = (houe < 10) ? '0' + houe : houe;
    countes = (countes < 10) ? '0' + countes : countes;

    document.querySelector('.Sec').innerHTML = sece;
    document.querySelector('.min').innerHTML = mine;
    document.querySelector('.hur').innerHTML = houe;
    document.querySelector('.Count').innerHTML = countes;

    setTimeout('Stopwatch()', 10)
  }
}

start.addEventListener('click', () => {
  counter = true;
  Stopwatch()
  start.disabled = true
  start.setAttribute('style', 'cursor: pointer;')

})

pause.addEventListener('click', () => {
  counter = false;
  start.disabled = false;
})

reset.addEventListener('click', () => {
  counter = false;
  start.disabled = false;
  document.querySelector('.Sec').innerHTML = '00';
  document.querySelector('.min').innerHTML = '00';
  document.querySelector('.hur').innerHTML = '00';
  document.querySelector('.Count').innerHTML = '00';
})
// End Stopwatch Apps
// ================================================= *** ================================================//
// Start Quiz Application

//  Quiz Array
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",

    'a': "Random Access Memory",
    'b': "Electronic Mail",
    'c': "Run Aceapt Memory",
    'd': "None of these"
  },
  {
    id: 2,
    question: "What is the full form of CPU ?",
    answer: "Central Processing Unit",

    'a': "Central Program Unit",
    'b': "Central Processing Unit",
    'c': "Central Preload Unit",
    'd': "None of these"
  },
  {
    id: 3,
    question: "What is the full form of E-mail ?",
    answer: "Electronic Mail",

    'a': "Electronic Mail",
    'b': "Electric Mail",
    'c': "Engine Mail",
    'd': "None of these"
  },
  {
    id: 4,
    question: "what is JavaScript ?",
    answer: "Programming language",

    'a': "Cascading Style Sheets",
    'b': "Hypertext Markup Language",
    'c': "Programming language",
    'd': "None of these"
  }];

//  Quiz Selection

const nextButton = document.querySelector('.twoNext')
const ulList = document.querySelector('.quiz_quitoin');
const rightanswer = '<i class="bi bi-check-circle"></i>';
const wronganswer = '<i class="bi bi-x-circle-fill"></i>';
const quizstart = document.querySelector('.Start');
const quizbody = document.querySelector('.SecTow');
//  End selection

quizstart.addEventListener('click',()=>{
  let quizbody = document.querySelector('.SecTow');
window.getComputedStyle(quizbody,'::before');
quizbody.style.setProperty('--display','none');
quizstart.setAttribute('style', 'display:none');


});

// set Array values
nextButton.addEventListener('click', () => {
  nextButton.disabled = true;
  document.querySelector('.quiz_quitoin').classList.remove('dise')
});

let poient = 0;
let sendvelue = 0;
nextButton.disabled = true;
function quizfan() {
  let indix = 0;
  indix = sendvelue;
  let data = questions[indix]
  correct = data.answer;
  
  // Set Values in document

  (function setquestions() {

    document.querySelector('.quitonTitle').innerHTML = `${data.id} ) ${data.question}`;
    document.querySelector('.quiz_quitoin').children[0].innerHTML = data.a;
    document.querySelector('.quiz_quitoin').children[1].innerHTML = data.b;
    document.querySelector('.quiz_quitoin').children[2].innerHTML = data.c;
    document.querySelector('.quiz_quitoin').children[3].innerHTML = data.d;
    document.querySelector('.quizNo').children[0].innerHTML = data.id;
  })();
};

document.querySelector('.quizNo').children[2].innerHTML = questions.length;

//  get answer from user

let lilist = document.querySelector('.quiz_quitoin').children;
for (let i = 0; i < lilist.length; i++) {
  lilist[i].addEventListener('click', (e) => {
    let userans = e.target.innerHTML;
    useranswer = userans;
    clearTime()
    document.querySelector('.quiz_quitoin').classList.add('dise')
    

  });
};
// checking quiz answers and correct answers

function checkAnswer() {

  if (correct == useranswer) {
    console.log('you are correct answer')
    document.querySelector('.quizResults').innerHTML ='You Are Right';
    document.querySelector('.scoreCount').innerHTML = poient+=5;
   
  } else {
    console.log('you are wrong answer')
    document.querySelector('.quizResults').innerHTML ='You Are wrong';
  }
}

// final results 

let results = document.querySelector('.quiz_quitoin').children;
for (let i = 0; i < results.length; i++) {
  quizfan()
  results[i].addEventListener('click', () => {
    checkAnswer()
    nextButton.disabled = false;
});

}

// Start the click function

nextButton.addEventListener('click', () => {
  sendvelue += 1
  document.querySelector('.quizResults').innerHTML ='See Your Result';
if(questions.length > sendvelue ){
  quizfan()
}else{
  console.log('Quiz is End Thank you for participate ')
  document.querySelector('.quizResults').innerHTML ='Thank you for play';
  setTimeout(()=>{clearTime()},0);
  document.querySelector('.quiz_quitoin').classList.add('dise')
 }});

// console.log(newsec)
const  totalTime = 2;
let convart = totalTime *60;

let minet = document.querySelector('.towMin');
let seces = document.querySelector('.towSec');

//  set time time function

function quizTime () {
  const min = Math.floor(convart / 60);
  let sece = convart % 60;
  
   minet.innerHTML= '0'+ min;
   seces.innerHTML =  sece;
  convart--;
 
  
  };

(function setTime () {
quizstart.addEventListener('click', () => { let stop = setInterval(quizTime,1000);
stopint = stop;
 });

nextButton.addEventListener('click', () => { let stop = setInterval(quizTime,1000);
stopint = stop;
   });
})();

function clearTime(){
  clearInterval(stopint)
  minet.innerHTML= '00';
  seces.innerHTML ='00';
}
// end the quiz app

// Start bookList app

const Title = document.querySelector('.Title');
const Author = document.querySelector('.Author');
const Year = document.querySelector('.Year');
const button = document.querySelector('#addList')
const tableBody = document.querySelector('.bookTable');
const input = document.querySelectorAll('.labelInput input');


// End Selection


function inputValu () {
  const creatTr = document.createElement('tr')

  const creatTd = document.createElement('th') 
    creatTd.innerHTML= Title.value[0].toUpperCase() + Title.value.slice(1);
    creatTr.appendChild(creatTd);

    const Authors = document.createElement('th') 
    Authors.innerHTML= Author.value[0].toUpperCase() + Title.value.slice(1);
    creatTr.appendChild(Authors);

    const Years = document.createElement('th')
    Years.innerHTML = Year.value;
    creatTr.appendChild (Years)
tableBody.appendChild(creatTr)


function tastingbook () {

  

}
tastingbook()



};

function chackingtabil () {
if(Title.value =='' || Author.value == '' || Year.value == '' ){
  
    alert('Please fill The all data')
  }else{
    inputValu()
  }
}

// const allTr = document.querySelector('.bookTable').children;
const allInput = document.querySelectorAll('.cleare') 

function IpmutClick() {
  allInput.forEach((valu) => {
    valu.value = "";
  })
};

button.addEventListener('click', () => {
  chackingtabil ()
  IpmutClick()


});





