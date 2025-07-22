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
  be: ["was/were", "been", "być", "(бі)", "(воз / вер)", "(бін)"],
  beat: ["beat", "beaten", "bić", "(біт)", "(біт)", "(бітен)"],
  become: ["became", "become", "stać się", "(біком)", "(бікейм)", "(біком)"],
  begin: ["began", "begun", "rozpocząć", "(беґін)", "(беґан)", "(беґан)"],
  bet: ["bet", "bet", "zakładać się", "(бет)", "(бет)", "(бет)"],
  bite: ["bit", "bitten", "gryźć", "(байт)", "(біт)", "(бітен)"],
  break: ["broke", "broken", "łamać", "(брейк)", "(брок)", "(брокен)"],
  bring: ["brought", "brought", "przynosić", "(брінґ)", "(брот)", "(брот)"],
  build: ["built", "built", "budować", "(білд)", "(білт)", "(білт)"],
  burn: ["burned/burnt", "burned/burnt", "palić", "(берн)", "(барнд / барнт)", "(барнд / барнт)"],
  buy: ["bought", "bought", "kupić", "(бай)", "(бот)", "(бот)"],
  catch: ["caught", "caught", "łapać", "(кетч)", "(кот)", "(кот)"],
  choose: ["chose", "chosen", "wybierać", "(чуз)", "(чоуз)", "(чоузен)"],
  come: ["came", "come", "przyjść", "(ком)", "(кейм)", "(ком)"],
  cost: ["cost", "cost", "kosztować", "(кост)", "(кост)", "(кост)"],
  cut: ["cut", "cut", "ciąć", "(кат)", "(кат)", "(кат)"],
  do: ["did", "done", "robić", "(ду)", "(дід)", "(дан)"],
  draw: ["drew", "drawn", "rysować", "(дро)", "(дру)", "(дрон)"],
  dream: ["dreamed/dreamt", "dreamed/dreamt", "marzyć", "(дрім)", "(дрімд / дремт)", "(дрімд / дремт)"],
  drink: ["drank", "drunk", "pić", "(дрінк)", "(дранк)", "(дранк)"],
  drive: ["drove", "driven", "prowadzić", "(драйв)", "(дроув)", "(дрівен)"],
  eat: ["ate", "eaten", "jeść", "(іт)", "(ейт)", "(ітен)"],
  fall: ["fell", "fallen", "spadać", "(фол)", "(фел)", "(фолен)"],
  feel: ["felt", "felt", "czuć", "(філ)", "(фелт)", "(фелт)"],
  find: ["found", "found", "znaleźć", "(файнд)", "(фаунд)", "(фаунд)"],
  fly: ["flew", "flown", "latać", "(флай)", "(флу)", "(фловн)"],
  forbid: ["forbade", "forbidden", "zakazać", "(форбід)", "(форбейд)", "(форбиден)"],
  forget: ["forgot", "forgotten", "zapominać", "(форґет)", "(форґот)", "(форґотен)"],
  forgive: ["forgave", "forgiven", "wybaczać", "(форґів)", "(форґейв)", "(форґівен)"],
  get: ["got", "got/gotten", "dostawać", "(ґет)", "(ґот)", "(ґот / ґотен)"],
  give: ["gave", "given", "dawać", "(ґів)", "(ґейв)", "(ґівен)"],
  go: ["went", "gone", "iść", "(ґоу)", "(вент)", "(ґон)"],
  hang: ["hung", "hung", "wisieć", "(хенґ)", "(ханґ)", "(ханґ)"],
  have: ["had", "had", "mieć", "(хев)", "(хед)", "(хед)"],
  hear: ["heard", "heard", "słyszeć", "(хір)", "(херд)", "(херд)"],
  hide: ["hid", "hidden", "ukrywać", "(хайд)", "(хід)", "(хіден)"],
  hit: ["hit", "hit", "uderzać", "(хіт)", "(хіт)", "(хіт)"],
  hold: ["held", "held", "trzymać", "(холд)", "(хелд)", "(хелд)"]
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
    document.getElementById('simplePast').value = `Prawidlowo✅, ${selectedVerb[0]} ${selectedVerb[4]}`;
  } else {
    document.getElementById('simplePast').value = `Nie Prawidlowo❌, Prawidlowo [ ${selectedVerb[0]} ]`;
  };

  if (selectedVerb[1] == answerPastParticiple) {
    document.getElementById('pastParticiple').value = `Prawidlowo✅, ${selectedVerb[1]} ${selectedVerb[5]}`;
  } else {
    document.getElementById('pastParticiple').value = `Nie Prawidlowo❌, Prawidlowo [ ${selectedVerb[1]} ]`;
  };

  if (selectedVerb[2] == answerTranslate) {
    document.getElementById('translate').value = `Prawidlowo✅, ${selectedVerb[2]}`;
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

  question.innerHTML = `Zapytanie: ${randomVerbKey} <i style="font-size: 30px;">${selectedVerb[3]}</i>`;
};

nextTest.onclick = function() {
  document.getElementById('simplePast').value = "";
  document.getElementById('pastParticiple').value = "";
  document.getElementById('translate').value = "";

  testWord();
  
  checking.style.display = "flex";
  nextTest.style.display = "none";
};