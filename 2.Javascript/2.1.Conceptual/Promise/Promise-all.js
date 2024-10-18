const myPromiseAll = function (taskList) {
  const results = [];

  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;

          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

function taskOne(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [taskOne(1000), taskOne(5000), taskOne(3000)];

myPromiseAll(taskList)
  .then((results) => {
    console.log("results", results);
  })
  .catch(console.error);

function taskTwo(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject("rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskListTwo = [taskTwo(1100), taskTwo(2111), taskTwo(5000)];

myPromiseAll(taskListTwo)
  .then((results) => {
    console.log("results", results);
  })
  .catch(console.error);
