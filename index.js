function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for (var i=0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;

}
function johnLennonFacts(facts){
  var i;
    while (i < facts.length) {
      facts[i] = facts[i] + "!!!"
      i++
    }
    return facts
}