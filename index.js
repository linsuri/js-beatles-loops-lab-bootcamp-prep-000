function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i = 0
  for (i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    num++
  } while (num < 15)
  return emptyArray
}