function countChocolates(totalMoneyString, costOfChocolateString) {
    const totalMoneyMatch = totalMoneyString.match(/\d+/); 
    const costOfChocolateMatch = costOfChocolateString.match(/\d+/); 
  
    if (!totalMoneyMatch || !costOfChocolateMatch) {
      return "Invalid Input";
    }
  
    const totalMoney = parseInt(totalMoneyMatch[0], 10); 
    const costOfChocolate = parseInt(costOfChocolateMatch[0], 10); 
  
    if (totalMoney < 0 || costOfChocolate <= 0) {
      return "Invalid Input";
    }
  
    let chocolates = Math.floor(totalMoney / costOfChocolate); 
    let wrappers = chocolates; 
  
    while (wrappers >= 3) {
      const exchangedChocolates = Math.floor(wrappers / 3); 
      chocolates += exchangedChocolates; 
      wrappers = wrappers % 3 + exchangedChocolates; 
    }
  
    return chocolates;
  }
  console.log(countChocolates("4$", "1$")); 
  console.log(countChocolates("55 $", "5$")); 
  console.log(countChocolates("I have 68$", "2$")); 
  console.log(countChocolates("I got -68$ from my mom ", "2$")); 