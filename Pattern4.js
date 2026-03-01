
  function met(n) {
  let m = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <i+1; j++) {
      m = m+`${i+1}`;
    }
    console.log(m);
    m = '';
  }
}

met(5);
