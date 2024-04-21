const connectToDatabase = () => {
  const dummyPractice = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Database successfully connected.');
      resolve();
    }, 1200);
  });

  return dummyPractice;
}

export default connectToDatabase;