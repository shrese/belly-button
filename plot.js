
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});


researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];

d3.json("samples.json").then(function(data){
    researcher1.forEach(([first, second]) => console.log(first + ": " + second));
});