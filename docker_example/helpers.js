const connectToDatabase = () => {
  const dummyPractice = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Database successfully connected.');
      resolve();
    }, 2000);
  });

  return dummyPractice;
}

module.exports = connectToDatabase;