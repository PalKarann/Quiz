// console.log('question')
let  a = [
  {
    // id:1,
    question: "What is the largest ocean on Earth?",
    Option: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3,
    userAnswer:null
  },
  {
    // id:2,
    question: "Which planet is known as the 'Evening Star' or 'Morning Star'?",
    Option: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:3,
    question: "Who wrote the play 'Hamlet'?",
    Option: ["William Shakespeare", "Charles Dickens", "George Orwell", "Leo Tolstoy"],
    answer: 0,
    userAnswer:null
  },
  {
    // id:4,
    question: "Which planet in the solar system is known as the 'Red Planet'?",
    Option: ["Venus", "Earth", "Mars", "Jupiter"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:5,
    question: "What is the largest lake in the world?",
    Option: ["Caspian Sea", "Baikal", "Lake Superior", "Ontario"],
    answer: 0,
    userAnswer:null
  },
  {
    // id:6,
    question: "Which of the following planets is not a gas giant?",
    Option: ["Mars", "Jupiter", "Saturn", "Uranus"],
    answer: 0,
    userAnswer:null
  },
  {
    // id:7,
    question: "Who wrote the novel 'War and Peace'?",
    Option: ["Anton Chekhov", "Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:8,
    question: "What is the capital of Japan?",
    Option: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    answer: 1,
    userAnswer:null
  },
  {
    // id:9,
    question: "Hitler's party is known as?",
    Option: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
    answer: 1,
    userAnswer:null
  },
  {
    // id:10,
    question: "Which is the longest river in the world?",
    Option: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:11,
    question: "What is the capital of Australia?",
    Option: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:12,
    question: "Who developed the theory of relativity?",
    Option: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    answer: 1,
    userAnswer:null
  },
  {
    // id:13,
    question: "Which gas do plants absorb from the atmosphere?",
    Option: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:14,
    question: "What is the hardest natural substance on Earth?",
    Option: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2,
    userAnswer:null
  },
  {
    // id:15,
    question: "Which country is known as the Land of the Rising Sun?",
    Option: ["China", "Japan", "Korea", "Vietnam"],
    answer: 1,
    userAnswer:null
  },
  {
    // id:16,
    question: "Who is the author of 'Pride and Prejudice'?",
    Option: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "George Eliot"],
    answer: 0,
    userAnswer:null
  },
  {
    // id:17,
    question: "Which is the largest continent on Earth?",
    Option: ["Africa", "Asia", "North America", "Europe"],
    answer: 1,
    userAnswer:null
  },
  {
    // id:18,
    question: "What is the chemical symbol for water?",
    Option: ["H2O", "O2", "CO2", "NaCl"],
    answer: 0,
    userAnswer:null
  },
  {
    // id:19,
    question: "Which planet is known as the 'Blue Planet'?",
    Option: ["Earth", "Neptune", "Uranus", "Saturn"],
    answer: 0,
    userAnswer:null
  },
  {
    // id:20,
    question: "Who was the first man to step on the moon?",
    Option: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    answer: 2,
    userAnswer:null
  }
];



// let count = 0 ;

// let proBar=document.getElementsByClassName('progressBar')[0];

// // console.log(a);
  
// // index, question id
// let newArr = [];    
// // for (let i = 0; i < 10; i++) {    
// //     let randomIndex = Math.floor(Math.random() * a.length);
// //     console.log(randomIndex.question)
// //     if (!newArr.includes(randomIndex)) {  
// //         newArr.push(a[randomIndex].question);         
// //         console.log(newArr)
// //     }
// // }
  

//   let randomIndex = Math.floor(Math.random() * a.length);
//   console.log(randomIndex)
//   a[randomIndex].question
//   a[randomIndex].Option.forEach((called)=>{
//     console.log(called)
//   })
  

//   localStorage.setItem("viewQuestion", JSON.stringify(newArr));  /*to store the randomly selected  */
//   let showQuestion=JSON.parse(localStorage.getItem("viewQuestion"));

//   let abc= document.getElementById("displayQuestion");
//   abc.innerHTML =  a[randomIndex].question

//   let options = document.querySelectorAll("#options li")

//   options.forEach((answer, index)=> {
//     if (a[randomIndex].Option[index]) { // Check if the option exists to avoid errors
//       answer.textContent = a[randomIndex].Option[index]; // Set the text content
//   }
//   })

//   let duplicateArray=[]
//   function generateRandomQuestions(){
//     // take an array to store already generated random index
//     duplicateArray.forEach(i=> i==randomIndex)
//     // after every generation of random index check if it already exists in the array, if yes->generate random index again, if no -> then move forward
//     duplicateArray.push(randomIndex)

//     let randomIndex = Math.floor(Math.random() * a.length);
//    console.log(randomIndex)
//    a[randomIndex].question
//    a[randomIndex].Option.forEach((called)=>{
//      console.log(called)
//    })
//   }


//   function nextButton(){
//     // if(count >= 0 && count < 8){
//     //   proBar.style.width=(parseFloat(proBar.style.width)||10)+10+"%";

//     // }
//     // if(count=a.length-1){
//     //   // show submit option
//     //   // ranking
//     // }
//     let percentage= (count/a.length)* 100
//     proBar.style.width=percentage
//     // (current question number/ total) * 100 -> count/total * 100
//     // 1/10 * 100 =10
//     // 1->10, 2->10....
    

//     // dry -> do not repeat yourself
//     let randomIndex = Math.floor(Math.random() * a.length);
//    console.log(randomIndex)
//    a[randomIndex].question
//    a[randomIndex].Option.forEach((called)=>{
//      console.log(called)
//    })
  
  
    
//     localStorage.setItem("viewQuestion", JSON.stringify(newArr));  /*to store the randomly selected  */
//     let showQuestion=JSON.parse(localStorage.getItem("viewQuestion"));
//     // console.log(showQuestion);
  
//     let abc= document.getElementById("displayQuestion");
//     abc.innerHTML =  a[randomIndex].question
  
//     let options = document.querySelectorAll("#options li")
  
//     options.forEach((answer, index)=> {
//       if (a[randomIndex].Option[index]) { // Check if the option exists to avoid errors
//         answer.textContent = a[randomIndex].Option[index]; // Set the text content
//     }
//     })
//     count++
//   }
  

  localStorage.setItem("viewQuestion", JSON.stringify(a));
  const presentQuestion = JSON.parse(localStorage.getItem("viewQuestion"));
  console.log(presentQuestion);

  let shuffelquestion=presentQuestion.sort(()=>0.5-Math.random());
  const tenQuest=shuffelquestion.slice(0,10);

  localStorage.setItem("tenQuestion",JSON.stringify(tenQuest));


  
  // function getrandomQuestion(a){
  //   return a.sort(()=> 0.5 - Math.random()).slice(0,10);
  // }
  // // console.log (getrandomQuestion(a))

   const item=JSON.parse(localStorage.getItem("tenQuestion"));
   

let randomIndex=item[index];
console.log(randomIndex)
let randomQuestion=randomIndex[quest];


  
  
  let count = 0;
  let score = 0;
  let selectedAnswres = [];

  const progressStatus =[
    "Question 1 of 10", "Question 2 of 10" , "Question 3 of 10" , "Question 4 of 10" , "Question 5 of 10" , "Question 6 of 10" ,
     "Question 7 of 10", "Question 8 of 10", "Last 2 questions left", "Last Question",

  ];
  
   


  const progressBar = document.getElementsByClassName("progressBar");
  const questionTitle = document.getElementById("newQuestion");
   document.getElementById("displayQuestion").innerText=randomQuestion;


  // let option = []
  // for (i =1; i<=4; i++) {
  //   option.push(document.getElementById("options" +1));
  // }
  // // console.log(option)
  // function showQuestion(){
  //   const quest =randomQuestion[count];
  //   questionTitle.innerText = progressStatus[count];
  //   questionText.innerText =quest.question;


  //   options.forEach((opt, index) =>{
  //     opt.textContent = quest.options[index];
  //     opt.classList.remove("selected");
  //     if (selectedAnswres[count]===quest.options[index]){
  //       opt.classList.add("selected");
  //     }
  //     opt.onclick = () => selectAnswer(quest.options[index],opt);
  //   })

  //   updateProgressBar();
  // }

  // function selectAnswer(selectedOption, element) {
  //   selectedAnswres[count]=selectedOption;

  //   options.forEach(opt => opt.classList.remove("selected"));
  //   element.classList.add("selected");
  // }

  // function updateProgressBar(){
  //   const percent = ((count + 1) / randomQuestion.length)*100;
  //   progressBar.style.width=`${percent}%`;
  // }
  
  // function nextQuestion(){
  //   if (!selectedAnswres[count]){
  //     alert("please select an option!");
  //     return;
  //   }

  //   if (selectedAnswres[count]===randomQuestion[count].rightAnswer){
  //     score++;
  //   }

    
  // }


  



// //   getting quest
//   const quiz = a[0].question;
// //   console.log(a[0].Option)
// function displayOptions() {
//     const optionDiv = document.getElementById("displayQuestion");
//     optionDiv.innerHTML = ""; // Clear previous content

//     a.forEach((questionObj, index) => {
//         let questionTitle = document.createElement("h3");
//         questionTitle.textContent = `Q${index + 1}: ${questionObj.question}`;
//         optionDiv.appendChild(questionTitle);

//         let optionsContainer = document.createElement("div");
//         optionsContainer.classList.add("option-container");

//         questionObj.Option.forEach((optionText) => {
//             let optionElement = document.createElement("div");
//             optionElement.classList.add("option");
//             optionElement.textContent = optionText;
//             optionElement.addEventListener("click", () => checkAnswer(index, i));
//             optionsContainer.appendChild(optionElement);
//         });

//         optionDiv.appendChild(optionsContainer);
//     });
// }


// // Function to check the selected answer
// function checkAnswer(questionIndex, selectedIndex) {
//   const correctAnswerIndex = a[questionIndex].answer;
//   if (selectedIndex === correctAnswerIndex) {
//       alert("Correct answer!");
//   } else {
//       alert("Incorrect answer.");
//   }
// }

// // Initialize the quiz and display the first question and its options
// displayOptions();
  