
function pattern(n){
    let m='';
    let char=65+n;
    for(let i=0; i<n+1; i++){
        char = 65+n-i;
        for(let j=0; j<i+1;j++){
            m= m+' '+String.fromCharCode(char++)
        }
        
    console.log(m);
    m="";
    //char=65+n;
    }
}
pattern(4);

/******Pattern 
 F
 E F
 D E F
 C D E F
 B C D E F
 A B C D E F
******************/
