 function met(n) {
  let m = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <(n-i); j++) {
      m = m+`${j+1}`
    }
    console.log(m);
    m = '';
  }
}

met(5);
