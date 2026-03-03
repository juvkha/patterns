let m='';
let char=65;
function pattern(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<i+1; j++){
            m=m+" "+`${String.fromCharCode(char++)}`;
        }
        console.log(m);
        m="";
        char=65;
    }
}
pattern(5);

/**********Pattern**********/
 A
 A B
 A B C
 A B C D
 A B C D E
