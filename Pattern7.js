function met(n) {
  let m = '';
    
    for(let i=0; i<n; i++){
        for(let j=0;j<(n-i-1);j++){
            m = m + " ";
        }
        for(let k=0;k<((2*i)+1);k++){
                m = m + "*";
        }
        console.log(m);
        m= '';
    }
}
met(4);
