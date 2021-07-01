
  function test() {
    const text = "name:mike;age:16;gender:male";
    //const text = "name:mira;age:16";
    let raw_array = text.split(';')
    //return('<strong>' + arr + '</strong>');
    for (let i in raw_array){
      let arr = raw_array[i].split(':');
      return('<strong>' + arr[0] + ':</strong>' + ' ' +arr[1] + '\n');
    }
  }

  function trigger() {
      document.querySelector('.txt').innerHTML = test();
      console.log(test());
  }
