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

flipCoin()
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
*/
