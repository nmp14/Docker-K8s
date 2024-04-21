const connectToDatabase = () => {
  const dummyPractice = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return dummyPractice;
}

module.exports = connectToDatabase;