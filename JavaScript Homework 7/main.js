function mySetTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  console.log("Toy Shop");
  mySetTimeout(3000).then(() => {
    console.log("It takes 3 seconds to make a toy");
  });
  

  console.log ("Delivery service"); 
  mySetTimeout(2000).then (() => {
    console.log("Estimated time arrival 2 seconds")
  });
  

  console.log ("Toy selling"); 
  mySetTimeout(1000).then (() => {
    console.log("It takes 1 second to sell a toy")
  });

  