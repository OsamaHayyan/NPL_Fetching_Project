function checkForName(data) {
  alert("The Process succeed!");
  console.log(data);
  document.getElementById(
    "results1"
  ).innerHTML = `text 1 is: ${data.sentence_list[0].text}  ,
  the score is: ${data.score_tag}`;
  document.getElementById(
    "results2"
  ).innerHTML = `text 2 is: ${data.sentence_list[1].text}  ,
  the agreement is: ${data.agreement}`;
  document.getElementById(
    "results3"
  ).innerHTML = `text 3 is: ${data.sentence_list[3].text}  ,
  the confidence is: ${data.confidence}`;
  document.getElementById(
    "results4"
  ).innerHTML = `text 4 is: ${data.sentence_list[4].text}  ,
  the irony is: ${data.irony}`;
}

export { checkForName };
