const flipCoin = () => {
  return new Promise((resolve, reject) => {
    let result = Math.random();
    if (result > 0.5) {
      resolve("You Win!");
    } else {
      reject("You Loose");
    }
  });
};

const coinFlipResult = async () => {
  try {
    const advice = await flipCoin();
    console.log(advice);
  } catch (error) {
    console.log(error);
  }
};

//coinFlipResult();

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
  } catch (error) {
    console.log("Error fetching the advice:", error);
  }
};

const flipCoinWithAdvice = async () => {
  try {
    const result = await flipCoin();
    if (result === "You Win!") {
      fetchAdvice();
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error(error);
  }
};

flipCoinWithAdvice();

//fetchAdvice();

//
/*
  .then((advice) => {
    console.log("Advice:", advice);
  })
  .catch((error) => {
    console.error(error);
  });

/*



const flipCoin = () => {
  return new Promise((resolve, reject) => {
    let result = Math.random();
    if (result > 0.5) {
      resolve("You Win!");
    } else {
      reject("You Loose");
    }
  });
};

flipCoin()


fetch= ('https://api.adviceslip.com/advice')
.then(response => response.json())
.then((data) => {
    console.log(data.slip.advice));
})
.catch(error => {
    console.error('Error fetching the advice:', error));
});



const flipCoin = () => {
  return new Promise((resolve, reject) => {
    const result = Math.random() < 0.5;
    if (result === true) {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          resolve(data.slip.advice);
        });
    } else {
      reject("No advice today. You have to learn life the hard way.");
    }
  });
};
*/
