// Modal const
const openModal = document.getElementById('modalOpen');
const closeModal = document.getElementById('modalClose');
const modal = document.getElementById('modal');
// Test question const
const startTest = document.getElementById('startQuestion');
const modalStart = document.getElementById('modalStart');
const question = document.getElementById('question');
const checking = document.getElementById('checking');
const nextTest = document.getElementById('nextTest');
let selectedVerb;

const verbs = {
  be: ["was/were", "been", "być"],
  beat: ["beat", "beaten", "bić"],
  become: ["became", "become", "stać się"],
  begin: ["began", "begun", "rozpocząć"],
  bet: ["bet", "bet", "zakładać się"],
  bite: ["bit", "bitten", "gryźć"],
  break: ["broke", "broken", "łamać"],
  bring: ["brought", "brought", "przynosić"],
  build: ["built", "built", "budować"],
  burn: ["burned/burnt", "burned/burnt", "palić"],
  buy: ["bought", "bought", "kupić"],
  catch: ["caught", "caught", "łapać"],
  choose: ["chose", "chosen", "wybierać"],
  come: ["came", "come", "przyjść"],
  cost: ["cost", "cost", "kosztować"],
  cut: ["cut", "cut", "ciąć"],
  do: ["did", "done", "robić"],
  draw: ["drew", "drawn", "rysować"],
  dream: ["dreamed/dreamt", "dreamed/dreamt", "marzyć"],
  drink: ["drank", "drunk", "pić"],
  drive: ["drove", "driven", "prowadzić"],
  eat: ["ate", "eaten", "jeść"],
  fall: ["fell", "fallen", "spadać"],
  feel: ["felt", "felt", "czuć"],
  find: ["found", "found", "znaleźć"],
  fly: ["flew", "flown", "latać"],
  forbid: ["forbade", "forbidden", "zakazać"],
  forget: ["forgot", "forgotten", "zapominać"],
  forgive: ["forgave", "forgiven", "wybaczać"],
  get: ["got", "got/gotten", "dostawać"],
  give: ["gave", "given", "dawać"],
  go: ["went", "gone", "iść"]
};


// Modal code
openModal.onclick = function() {
  modal.style.display = "flex";
};

modal.addEventListener('click', (e) => {
  if (modal == e.target) {
    modal.style.display = "none";
  };
});

closeModal.onclick = function() {
  modal.style.display = "none";
};

// Question code
startTest.onclick = function() {
  modalStart.style.display = "none";

  testWord();
};

checking.addEventListener('click', ()=> {
  const answerSimplePast = document.getElementById('simplePast').value.trim().toLowerCase();
  const answerPastParticiple = document.getElementById('pastParticiple').value.trim().toLowerCase();
  const answerTranslate = document.getElementById('translate').value.trim().toLowerCase();

  if (selectedVerb[0] == answerSimplePast) {
    document.getElementById('simplePast').value = "Prawidlowo✅";
  } else {
    document.getElementById('simplePast').value = `Nie Prawidlowo❌, Prawidlowo [ ${selectedVerb[0]} ]`;
  };

  if (selectedVerb[1] == answerPastParticiple) {
    document.getElementById('pastParticiple').value = "Prawidlowo✅";
  } else {
    document.getElementById('pastParticiple').value = `Nie Prawidlowo❌, Prawidlowo [ ${selectedVerb[1]} ]`;
  };

  if (selectedVerb[2] == answerTranslate) {
    document.getElementById('translate').value = "Prawidlowo✅";
  } else {
    document.getElementById('translate').value = `Nie Prawidlowo❌, Prawidlowo [ ${selectedVerb[2]} ]`;
  };

  checking.style.display = "none";
  nextTest.style.display = "flex";
});

function testWord() {
  let verbsKeys = Object.keys(verbs);
  let keyRandom = Math.floor(Math.random() * verbsKeys.length);

  let randomVerbKey = verbsKeys[keyRandom];
  selectedVerb = verbs[randomVerbKey];

  question.innerHTML = `Zapytanie: ${randomVerbKey}`;
};

nextTest.onclick = function() {
  document.getElementById('simplePast').value = "";
  document.getElementById('pastParticiple').value = "";
  document.getElementById('translate').value = "";

  testWord();
  
  checking.style.display = "flex";
  nextTest.style.display = "none";
};