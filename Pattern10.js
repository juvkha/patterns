 function met(n) {
  let m = '';

  for (let i = 0; i < n; i++) {
   if(i<n/2){
       for(let j=0; j<i+1;j++){
           m = m+"*";
       }
   }
   else{
       for(let j=0; j< n-i; j++){
           m = m+'*';
       }
   }
  
      console.log(m);
      m="";
  }
}
met(10);

/************If you want to remove if-else and use ternary operator************/
//  function met(n) {
//   let m = '';

//   for (let i = 0; i < n; i++) {
//        for(let j=0; (i<n/2 ? j<i+1: j< n-i); j++){
//            m = m+'*';
//        }
//       console.log(m);
//       m="";
//   }
// }

//met(6);
