const _initTime = Date.now();
let main = document.querySelector("main");
let sectionList = main.children[2]

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

// const clickOnSquare = (e) => {
//   console.log(e.target.classList[1]);
//   console.log(getElapsedTime());
// };

const clickOnSquare = (e) => {
  // console.log(`[${getElapsedTime()}] Created a new ${e.target.classList[1]} square sir.`);
  let listeSquare = sectionList.children[1]
  const listSquareElement = document.createElement("li");
  listSquareElement.textContent = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square sir.`;
  listeSquare.appendChild(listSquareElement);
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
};

