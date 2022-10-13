let fortunes = ["Will Smith",
  "Larry David",
  "John Ham",
  "Sandra Bullock",
  "Jennifer Connelly",
  "Jason Bateman",
  "Mark Ruffalo",
  "Ryan Renolds",
  "Julia Roberts",
  "Will Arnett",
  "Jamie Foxx",
  "Denzel Washington",
  "2Pac",
  "Martin Lawrence",
  "Vince Vaughn",
  "Benicio Del Toro",
  "Owen Wilson",
  "Susan Sherton",
  "Brad Pitt",
  "Jason Bateman",
  "Katherine Heigl",
  "Jimmy O. Yang",
  "Bobby Lee",
  "Tom Holland",
  "Timothee Chalamet",
  "Leonardo DiCaprio",
  "Val Kilmer",
  "Maya Erskine",
  "Dennis Quaid",
  "Natalie Portman",
  "Issa Rae",
  "Jay Ellis",
  "Jake Gyllenhaal",
  "Heath Ledger",
  "Anne Hathaway",
  "Nia Long",
  "Idris Alba",
  "Morris Chestnut",
  "Adam Sandler",
  "Regina Hall",
  "Adrian Grenier",
  "Marisa Tomei",
  "Emilio Estevez",
  "Charlie Sheen",
  "Luke Wilson",
  





  
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Next";
  button.style.cursor = "default";

  //add your code here

}

button.addEventListener('click', showFortune);
