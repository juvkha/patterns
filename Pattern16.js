let m='';
let char=65;
function pattern(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<i+1; j++){
            m=m+" "+`${String.fromCharCode(char)}`;
        }
        console.log(m);
        m="";
        char++;
    }
}
pattern(5);

/********Pattern 16
 A
 B B
 C C C
 D D D D
 E E E E E

************/
