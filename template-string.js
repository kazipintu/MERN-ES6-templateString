
const singer = "Hero Alam";
const song = "moye moye moye moye";
const kobita = "kobita tumi swapno charini hoye";

{/*  ~ EC6 way by using template strings ~  */
  const newMultiLine = `Amaar sonar Bangla.
Ami tomay bhalobasi.
Chirodini tomar akash.`
  console.log(newMultiLine);


  /*  ~ Convetional way of multilines ~  */
  const multiLine = "Amaar sonar Bangla. \n" +
    "Ami tomay bhalobasi. \n" +
    "Chirodini tomar akash.";
  console.log(multiLine);
}

{
  const friends = ['abul', 'babul', 'habul', 'kabul', 'tabul', 'mabul', 'dabul'];
  const phoneNumber = +919876453210;

  /*  ~ EC6 New System to create tags of writing multilines ~  */
  const newMethod = `<h1 class="design"> This is the designer's number - +${phoneNumber} </h1> `
  console.log(newMethod);

  const newFriend = `<h3> My total number of friends are - ${friends.length} </h3>`
  console.log(newFriend);

  /*  ~ Old System to create tags of writing multilines ~  */
  const oldMethod = "<h1 class='design'> This is the designer's number - " + "+" + phoneNumber + " </h1>"
  console.log(oldMethod);

  /*  ~ Older System to create tags of writing multilines ~  */
  const olderMethod = "<h1 class = 'design'> This is the designer's number - +919876453210 </h1>";
  console.log(olderMethod);

}


{
  const first = "Prince Majnu";
  const second = "Princess Laila";

  //by updated EC6
  const bothNamesNewSystem = `They are ${first} and ${second}, they are listening ${song} of ${singer} and also ${kobita}`
  console.log(bothNamesNewSystem);

  //by Older version of JS
  const bothNamesOlderSystem = "They are " + first + " and " + second;
  console.log(bothNamesOlderSystem);

}