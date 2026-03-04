let m='';
let char=65;
function pattern(n){
    for(let i=0; i<n; i++){
        for(let k =0; k<n-i; k++){
            m= m+" ";
        }
        let texts = 2*i+1;
        for(let j=0; j<texts; j++){
            if(j<=Math.floor(texts/2)){
                m=m+`${String.fromCharCode(char++)}`;
                }
            if(j==Math.floor(texts/2)){
                char = char-1;
            }
            if(j>Math.floor(texts/2)){
                m=m+`${String.fromCharCode(--char)}`;
            }
        }
        console.log(m);
        m="";
        char=65;
    }
}
pattern(4);

/*******Pattern
    A
   ABA
  ABCBA
 ABCDCBA
*************************/
