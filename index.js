function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for (var i=0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[0]);
  }
  return myArray;
}
