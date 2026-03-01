 function met(n) {
  let m = '';

  for (let i = 0; i < n; i++) {
       for(let j = 0; j < i+1; j++){
           if(j==0){
                m = m+ `${i%2 == 0 ? 1 : 0}`
           }
           else{
               m = m + `${m[m.length-1] == 0 ? 1 : 0}`;
           }
       }
      console.log(m);
      m="";
  }
}

met(6);
