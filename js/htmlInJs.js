
  function test() {
    const text = "name:mike;age:16;gender:male";
    //const text = "name:mira;age:16";
    let raw_array = text.split(';')
    //return('<strong>' + arr + '</strong>');
    let res = '';
    for (i in raw_array){
      let arr = raw_array[i].split(':') ;
      res = res.concat('<strong>' + arr[0]+ ':</strong>' + ' ' + arr[1] + '</br>');
    }
    return res;
  }

  function trigger() {
      document.querySelector('.txt').innerHTML = test();
  }
