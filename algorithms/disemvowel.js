// Disemvowel 


const disenvowel2 = (str) => {
   let lettersToAvoid = 'aAeEiIoOuU';
   let output = "";
   for (let char of str) {
       if (!lettersToAvoid.includes(char)) {
           output = output + char;
       }
   }
   return output
}