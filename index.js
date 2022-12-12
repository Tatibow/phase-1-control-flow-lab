function scuberGreetingForFeet(someVal) {
  if (someVal <= 400) {
    return 'This one is on me!';
  } else if (someVal >= 400 && someVal <= 2000) {
    return 'That will be twenty bucks.';
  } else if (someVal > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if(someVal > 2500) {
    return "No can do.";
  }
}
scuberGreetingForFeet(199)
scuberGreetingForFeet(1500)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

ternaryCheckCity('Pittsburgh')
ternaryCheckCity("NYC")

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
    return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
     return "Bye.";
  }
}

switchOnCharmFromTip("generous")
switchOnCharmFromTip("not as generous")
switchOnCharmFromTip("thanks for eveything")
