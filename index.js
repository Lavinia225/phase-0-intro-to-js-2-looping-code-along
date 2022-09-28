// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
  }

  wrapGifts(gifts);

  function writeCards(array, event){
    const customMessages =[];
    for (let i = 0; i < array.length; i++){
        customMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return customMessages;
  }

  function countDown(number){
    for (number; 0 <= number; number--){
        console.log(number);
    }
  }