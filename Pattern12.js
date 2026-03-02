function met(n) {
  let m = '';
  for (let i = 0; i < n; i++) {
       for(let j=0; j<i+1; j++){
           m= m+`${j+1}`;
       }
       for(let k=0; k < 2*(n-i+1); k++ ){
           m=m+" "
       }
       for(let l=i+1; l>0; l--){
           m= m+`${l+0}`;
       }
      console.log(m);
      m="";
  }
}
met(4);

//************pattern*********/
// 1          1
// 12        21
// 123      321
// 1234    4321

//*****************/
