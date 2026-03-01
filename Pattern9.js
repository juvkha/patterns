
  function met(n) {
  let mu = '';
  let ml = '';
        
    for(let i=0; i<n; i++){
        for(let j=0;j<(n-i-1);j++){
            ml = ml + " ";
        }
        for(let k=0;k<((2*i)+1);k++){
                ml = ml + "*";
        }
        console.log(ml);
        ml= '';
    }
     for(let i=0; i<n; i++){
       for(let j=0;j<i;j++){
            mu = mu + " ";
        }
        for(let k=0;k<2*(n-i)-1;k++){
                mu = mu + "*";
        }
        console.log(mu);
        mu= '';
    }
}

met(4);
