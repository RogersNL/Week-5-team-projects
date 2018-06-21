//Constructors
var Person = function(name, age, astrological, occupation, hobby, profileImage, score, aboutMe) {
  this.name = name;
  this.age = age;
  this.astrological = astrological;
  this.occupation = occupation;
  this.hobby = hobby;
  this.profileImage = profileImage;
  this.likeScore = score;
  this.aboutMe= aboutMe;
}

var Messages = function(name, localLikeScore) {
  this.name = name;
  this.localLikeScore = localLikeScore;
}

//Prototype Methods
Person.prototype.firstName = function() {
  var splitName = this.name.split(" ");
  return splitName[0];
}

//Global variables
var Player = new Person ()
var messageDutchess = false;
var messageSupul = false;
var messageBrenda = false;
var personResponse = 0;
var dutchessScore = 5;
var supulScore = 5;
var brendaScore = 5;

//Functions
function messengingSequence (name, messageNumber, arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  $("#" + name + "-form-" + messageNumber).submit(function(event) {
    event.preventDefault();
    $(".initial-show-" + name).hide();
    var message = parseInt($("#" + name + "-options-" + messageNumber).val());
    personResponse = message;
    var messageNum = messageNumber;
    if (messageNumber === 0 && message === 3) {
      $(".message-area-" + name).append('<div><span class="player-message-multiple">HI</span></div>')
      setTimeout(function(){$(".message-area-" + name).append('<div><span class="player-message-multiple">HEY</span></div>')}, 500);
      setTimeout(function(){$(".message-area-" + name).append('<div><span class="player-message-multiple">HEEELLLOOOOO???</span></div>')}, 1000);
    } else {
    $(".message-area-" + name).append('<div><span class="player-message">' + arrayOfResponses[messageNumber][message] + '</span></div>');
    }
    messageDutchess = false;
    messageSupul = false;
    messageBrenda = false;
    if (name === "Dutchess") {
      messageDutchess = true;
      $(".newMessageDutchess").hide();
    } else if (name === "Supul") {
      messageSupul = true;
      $(".newMessageSupul").hide();
    } else if (name === "Brenda") {
      messageBrenda = true;
      $(".newMessageBrenda").hide();
    }
    $("#" + name + "-form-" + messageNumber).hide();
    setTimeout(function(){$("#" + name + "-form-" + (messageNumber + 1)).show()}, 2000);
    allResponses (messageNum, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
    if (messageNumber === 5)
      if (name === "Dutchess") {
        $("#" + name + "-form-" + messageNumber).hide();
        setTimeout(function(){$("#message-options-Dutchess").append('<button type="button" id="date-Dutchess" class="btn btn-primary btn-block">Go On Date with Dutchess</button>')}, 3000);
      } else if (name === "Supul") {
        $("#" + name + "-form-" + messageNumber).hide();
        setTimeout(function(){$("#message-options-Supul").append('<button type="button" id="date-Supul" class="btn btn-primary btn-block">Go On Date with Supul</button>')}, 3000);
      } else if (name === "Brenda") {
        $("#" + name + "-form-" + messageNumber).hide();
        setTimeout(function(){$("#message-options-Brenda").append('<button type="button" id="date-Brenda" class="btn btn-primary btn-block">Go On Date with Brenda</button>')}, 3000);
      }
  });
}
function allResponses (messageNumber) {
  if (messageNumber === 0) {
    messengingResponse0 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 1) {
    messengingResponse1 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 2) {
    messengingResponse2 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 3) {
    messengingResponse3 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 4) {
    messengingResponse4 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
  if (messageNumber === 5) {
    messengingResponse5 (profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
  }
}
function messengingResponse0(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  //Dark person Dutchess
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;
  } else if (messageDutchess === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 2;
  } else if (messageDutchess === true && personResponse === 2) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][2] + '</span></div>')}, 2000);
    $(".entered-name").text(Player.name);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 2;
  } else if (messageDutchess === true && personResponse === 3) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 1;
    //Crazy person Supul
  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 0;
  } else if (messageSupul === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 2;
  } else if (messageSupul === true && personResponse === 2) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 1;
  } else if (messageSupul === true && personResponse === 3) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 2;
    //Normal Person Brenda
  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 1;
  } else if (messageBrenda === true && personResponse=== 1) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  } else if (messageBrenda === true && personResponse === 2) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  } else if (messageBrenda === true && personResponse === 3) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  }
}
function messengingResponse1(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;
  } else if(messageDutchess === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 2;
  } else if(messageDutchess === true && personResponse  === 2){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 2;
  } else if(messageDutchess === true && personResponse  === 3){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;

  } else if (messageSupul  === true && personResponse  === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 0;
  } else if(messageSupul  === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 2;
  } else if(messageSupul === true && personResponse  === 2){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 1;
  } else if(messageSupul === true && personResponse  === 3){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 2;

  } else if (messageBrenda === true && personResponse  === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 2;
  } else if(messageBrenda  === true && personResponse  === 1){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  } else if(messageBrenda === true && personResponse  === 2){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  } else if(messageBrenda === true && personResponse  === 3){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 0;
  }
}
function messengingResponse2(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[2][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[2][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[2][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  }
}
function messengingResponse3(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[3][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 1;
  } else if (messageDutchess === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[3][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);

  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[3][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 1;
  } else if (messageSupul === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[3][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);

  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[3][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  } else if (messageBrenda === true && personResponse === 1) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[3][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  }
}
function messengingResponse4(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 1;
  } else if (messageDutchess === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore -= 2;
  } else if (messageDutchess=== true && personResponse === 2){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 2;
  } else if (messageDutchess=== true && personResponse === 3){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
    dutchessScore += 0;

  } else if (messageSupul === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore -= 1;
  } else if(messageSupul === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 0;
  } else if(messageSupul === true && personResponse === 2){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 1;
  } else if(messageSupul === true && personResponse === 3){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
    supulScore += 2;

  } else if (messageBrenda === true && personResponse === 0) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 2;
  } else if(messageBrenda === true && personResponse === 1){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore += 0;
  } else if(messageBrenda === true && personResponse === 2){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][2] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 1;
  } else if(messageBrenda === true && personResponse === 3){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][3] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
    brendaScore -= 2;
  }
}
function messengingResponse5(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && dutchessScore >= 5) {
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[5][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);
  } else if (messageDutchess === true && dutchessScore < 5){
    setTimeout(function(){$(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[5][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageDutchess").show()}, 2000);

  } else if (messageSupul === true && supulScore >= 5) {
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[5][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);
  } else if(messageSupul === true && supulScore < 5){
    setTimeout(function(){$(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[5][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageSupul").show()}, 2000);

  } else if (messageBrenda === true && brendaScore >= 5) {
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[5][0] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  } else if(messageBrenda === true && brendaScore < 5){
    setTimeout(function(){$(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[5][1] + '</span></div>')}, 2000);
    setTimeout(function(){$(".newMessageBrenda").show()}, 2000);
  }
}
function dateResonse0(){  //only one option
  if (profileDark === true) {
    $("#date-text-output").text(arrayOfDutchessDateResponse[0]);
  ///CRAZY PROFILE
  } else if (profileCrazy === true) {
    $("#date-text-output").text(arrayOfsupulDateResponse[0]);
  ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[0]);
  }
}
function dateResponse1(){  //only one option
  if (profileDark === true) {
    $("#date-text-output").text(arrayOfDutchessDateResponse[1]);
    ///CRAZY PROFILE
  } else if (profileCrazy === true) {
    $("#date-text-output").text(arrayOfsupulDateResponse[1]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[1]);
  }
}
function dateResponse2(){  //only one option
  if (profileDark === true) {
    $("#date-text-output").text(arrayOfDutchessDateResponse[2]);
    ///CRAZY PROFILE
  } else if (profileCrazy === true) {
    $("#date-text-output").text(arrayOfsupulDateResponse[2]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[2]);
  }
}
function dateResponse3(){  //only one option
   if (profileDark === true){
    $("#date-text-output").text(arrayOfDutchessDateResponse[3]);
    ///CRAZY PROFILE
  } else if(profileCrazy === true){
    $("#date-text-output").text(arrayOfsupulDateResponse[3]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[3]);
  }
}
function dateResponse4(){  //only one option
   if (profileDark === true){
    $("#date-text-output").text(arrayOfDutchessDateResponse[4]);
  ///CRAZY PROFILE
  } else if(profileCrazy === true){
    $("#date-text-output").text(arrayOfsupulDateResponse[4]);
    ///NORMAL PROFILE
  } else if (profileNormal === true){
    $("#date-text-output").text(arrayOfbrendaDateResponse[4]);
  }
}


//Profile Information
var profileNames = ["Dutchess Capreanu", "Supul Sinac", "Brenda Smith"];
var profileAges = [30, 27, 25];
var profileAboutMes = [
                        "Just moved to the area from Transylvania. Back in the market for love after a misunderstanding with the locals. No garlic please.",

                        "On the prowl for that special someone who can respect my space when I need it (regular monthly trips).",

                        "Vegan.  Not really sure what I am doing on here, my friends made me set up a profile. Must love dogs."

                      ];
var profileAstrologicals = ["Capricorn","Leo","Virgo"];
var profileOccupations = ["Night Shift", "Bartender", "Wage Slave"];
var profileHobbies = ["Candelabra", "Hunting", "Netflix"];
var profileImages = ["vampire", "wolf", "basic"];
var profileLikeScore = [10, 10, 10];

//Player Response Messages

var playerResponses0 = ["Hello", "Sup Honey Bo Bo", "Greetings, M'lady of the night", "HI // HEY // HEEELLLOOOOO???"];
var playerResponses1 = ["I'm going to Wholefoods later, can I pick you up anything?", "Heaven must be missing an Angel", "You so spooky my skeleton is shakin'", "You look like you wanna get WILD!"];
var playerResponses2 = ["Tell me more about yourself."];
var playerResponses3 = ["The Dark Lord's Kingdom... Yeah, I really love it here, great place! How do you feel about it?", "The Dark Lord's Kingdom... Mmmm yeah idk this place is kinda weird... How do you feel about it?"];
var playerResponses4 = ["Oh you know the usual, I work as a programmer, I enjoy watching Netflix, taking the occasional walk, and eating.", "#chillaxin at the beach with some brewskis, workin on my tan and hangin out with the bros at the gym #gymlyfe #beachbrews", "Midnight graveyard walks, fog dancing, hula-hooping, and watching movies.", "Huntin, fishin, muddin, rock crawlin, and sleepin."];
var playerResponses5 = ["Would you like to go out?"]
var arrayOfResponses = [playerResponses0, playerResponses1, playerResponses2, playerResponses3, playerResponses4, playerResponses5];

//Dutchess Response Messages
var dutchessResponse0 = ["...", "... ugh", "Greetings morta... er <span class='entered-name'></span>", "um... hello?"];
var dutchessResponse1 = ["Oh, no... they don't have anything I could eat", "Speak not of the accursed ones!", "Oh my, well let us hope it doesn't rattle right out of you haha ;)", "Eh, on occasion I suppose..."];
var dutchessResponse2 = ["First you should know, as my profile mentioned, I am a widow and a recent immigrant to this fine kingdom. Second, I am, due to my work of course, a creature of the night and must spend my days sleeping. I've not yet seen everything the Dark Lord's Kingdom has to offer, but so far I feel right at home."];
var dutchessResponse3 = ["Yeah, I really love it here, great place!  Tell me more about yourself.", "How unfortunate.  Tell me more about yourself."];
var dutchessResponse4 = ["How... pedantic.", "In... in the sun?", "How delightful", "Well, I do love to feed"];
var dutchessResponse5 = ["Absolutely, darling.", "I suppose I have the time..."];
var arrayOfDutchessResponses = [dutchessResponse0, dutchessResponse1, dutchessResponse2, dutchessResponse3, dutchessResponse4, dutchessResponse5];

//Supul Response Messages
var supulResponse0 = ["Huh? WhaT? You talking to MEEE?", "HONEY WHAT???", "WHAT?? WHO TOLD YOU???", "HEEEEEEEEEEEEEEEEYYYY!!!!"];
var supulResponse1 = ["Bah, where's the fun if the food's just sitting there waitin' for ya?", "REEEEEEEE", "Look, this hair is impossible OK?", "AAAWWWWOOOOOOOOOOOOOOOOO!!!!"];
var supulResponse2 = ["Where to start, where to start??? I am a fulltime bartender/athletics instructor/hunter (damn site would only let me put in one job). I loooove being out in the wild, the smell of the grass, the scent of the prey... ooooh and the Dark Lord's Kingdom as THE best places to hunt!!!"];
var supulResponse3 = ["YA, it's AMAZING! Tell me more about you.", "You wrong but ok.  Tell me more about you."];
var supulResponse4 = ["BO-RING", "Mmmm fresh meat", "Did you say... HULA-HOOPING??", "Yeeeeah! Yes! YES! YESS!"];
var supulResponse5 = ["YAYAYAYAYAYA!", "What have I got to lose?"];
var arrayOfSupulResponses = [supulResponse0, supulResponse1, supulResponse2, supulResponse3, supulResponse4, supulResponse5];

//Brenda Response Messages
var brendaResponse0 = ["Sup", "Ew", "EW", "Ugh"];
var brendaResponse1 = ["OOOMG can you pick me up some chai??", "Ew", "What?? How am I spooky???", "Wow ok slow down there..."];
var brendaResponse2 = ["Let's see... I moved to the Dark Lord's Kingdom on a student visa 8 years ago. After school I already had lots of wage slave offers and so I decided to stay and apply for a work visa. I think maybe it was the seclution in college, but I never realized until afterwards how... strange this country is, and I'm not sure I really fit in..."];
var brendaResponse3 = ["Mmmm yeah idk this place is kinda weird... What do you do anyway?", "I know right??? It's totally wack. What do you do, like for work or something?"];
var brendaResponse4 = ["OMG I luv Netflix!!!!!!!!!!!!!!!! I've watched every episode of The Office 7 times!", "Uuuuuh... cooooooool?", "You kinda sound like a creeper.", "I'm a Vegan."];
var brendaResponse5 = ["Uh sure.", "Sigh, I guess."];
var arrayOfBrendaResponses = [brendaResponse0, brendaResponse1, brendaResponse2, brendaResponse3, brendaResponse4, brendaResponse5];

//Date Dialogue

var dutchessDateResponse0 = ["Of course darling, even before I moved to the Dark Lord's Kingdom I was a creature of the night. I'm currently haunting the Old Farm Hotel between 11pm and sunrise. I don't see many people these days but that is ok with me, I only need a few to survive. You should stay a night if you haven't already, the decor is to die for!"];
var dutchessDateResponse1 = ["Just another glass of wine for me, I'm on a all liquid diet."];
var dutchessDateResponse2 = ["Well, I have a great penchant for candelabra, and they have let me do some interior decorating at the hotel when the nights are slow. I am also a collector of fine -red- wines, although unlike most I prefer a younger blend… [she gazes off into the distance apparently lost in this thought]"];
var dutchessDateResponse3 = ["Ten years? The blink of an eye... Why I may be still sitting here in ten years..."];
var dutchessDateResponse4 = ["[Dutchess gazes up at the sky as a colony of bats swoops by] I must go darling, my apologies"];
var arrayOfDutchessDateResponse = [dutchessDateResponse0, dutchessDateResponse1, dutchessDateResponse2, dutchessDateResponse3, dutchessDateResponse4];

var supulDateResponse0 = ["Aaaah what's to tell?? I flip bottles and bounce drunks most of the time, but I also make a good deal with all the fresh meat I bring in from my hunts! The bartending is just to fill in the gaps. I live for the hunt!"];
var supulDateResponse1 = ["Raw steak, as much blood as possible."];
var supulDateResponse2 = ["YOU BETCHA! Did I mention that I love hunting? I am also a master taxidermist and decorated marathon runner!!! THINK YOU CAN KEEP UP?!?!"];
var supulDateResponse3 = ["What?? Ten years? Time flys, who knows. One day you are the apex preditor, the next BLAMO!!!"];
var supulDateResponse4 = ["[Supul looks towards the sky as the clouds lazily part, revealing a full moon] OH! UUUUUHH, GOTTA GO! Sorry!!"];
var arrayOfsupulDateResponse = [supulDateResponse0, supulDateResponse1, supulDateResponse2,supulDateResponse3, supulDateResponse4];

var brendaDateResponse0 = ["Oooooh you knooooow, I just work a boring nine to five over at the Wage Slave Industries. I got my degree in Wage Slavery, and the Dark Lord's Kingdom has world class Wage Slavery! The work is fine, it's the weirdos that get to me…"];
var brendaDateResponse1 = ["Salad, no croutons."];
var brendaDateResponse2 = ["Ooooh well you know, everyone and everything in this place so so strange and foreign, I basically just watch Netflix these days. Have you seen the Office??"];
var brendaDateResponse3 = ["Well, I'm kinda hoping to get out of this town... maybe the way I got in, a masters abroad. Oh and kids, I want lots of kids."];
var brendaDateResponse4 = ["[Brenda trips on the sidewalk and falls directly into a puddle in the street]"];
var arrayOfbrendaDateResponse = [brendaDateResponse0, brendaDateResponse1, brendaDateResponse2, brendaDateResponse3, brendaDateResponse4];



$(document).ready(function(){
  $("#sign-up").click(function() {
    $(".header").hide();
    $("#sign-up").hide();
    $("#create-profile").fadeIn();
  })
  $("#form-match").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#user-name").val();
    var inputtedAge = $("#user-age").val();
    var inputtedAstrological = $("#astrological-sign").val();
    var inputtedOccupation = $("#user-occupation").val();
    var inputtedHobby = $("input:radio[name=hobby]:checked").val();
    if (inputtedHobby === "user-input-hobby") {
      inputtedHobby = $("#user-input-hobby").val();
    }
    Player = new Person (inputtedName, inputtedAge, inputtedAstrological, inputtedOccupation, inputtedHobby);
    if (Player.name === "" || Player.occupation === "" || Player.hobby === "") {
      $("#blank-form").show();
    } else {
      //Create Profile Panels
      for (i = 0; i < profileNames.length; i++) {
        var newPerson = new Person (profileNames[i], profileAges[i], profileAstrologicals[i], profileOccupations[i], profileHobbies[i], profileImages[i], profileLikeScore[i], profileAboutMes[i]);
        $("#profiles").append(
                              '<div class="col-md-4">' +
                                '<div class="panel panel-danger" style="background: rgba(60,60,60,0.7);">' +
                                  '<h2 class = "panel-heading profile-h2"><span class = "profile-name" >' + newPerson.name + '</span></h2>' +
                                  '<div class="panel-body profile-panels">' +
                                    '<div class="row">' +
                                      '<div class="col-md-6">' +
                                        '<strong>Age:</strong> <span class = "profile-age" >' + newPerson.age + '</span>' +
                                      '</div>' +
                                      '<div class="col-md-6">' +
                                        '<strong>Interested In:</strong> <span class = "gender-interests">Male</span>' +
                                      '</div>' +
                                    '</div>' +
                                    '<img src="img/' + newPerson.profileImage + '.jpg" alt="">' +
                                    '<div class="">' +
                                      '<p><strong>Astrological Sign:</strong> <span class ="profile-astrological">' + newPerson.astrological + '</span></p>' +
                                      '<p><strong>Occupation:</strong> <span class = "profile-occupation">' + newPerson.occupation + '</span></p>' +
                                      '<p><strong>Hobby:</strong> <span class = "profile-hobby">' + newPerson.hobby + '</span></p>' +
                                      '<div class="about-box">' +
                                        '<strong>About me:</strong> <span class = "profile-about-me">' + newPerson.aboutMe + '</span>' +
                                      '</div>' +
                                    '</div>' +
                                    '<div class="panel-body row">' +
                                      '<button type="button" class="btn btn-primary inline-button" id="message-' + newPerson.firstName() + '">Message Me!</button>' +
                                      '<div class="newMessage' + newPerson.firstName() + '">' +
                                        '<p><strong>1 New Message</strong></p>' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                                '<div class="panel panel-primary initial-hidden message-box-' + newPerson.firstName() + '">' +
                                  '<div class="panel-heading">' +
                                    newPerson.firstName() + ' is Online' +
                                  '</div>' +
                                  '<div class="panel-body" id="response-' + newPerson.firstName() + '">' +
                                    '<div class="text-window message-area-' + newPerson.firstName() + '">' +
                                      '<p class="initial-show-' + newPerson.firstName() + '"><strong>*Send ' + newPerson.firstName() + ' a message*</strong></p>' +
                                    '</div>' +
                                    '<div id="message-options-' + newPerson.firstName() + '">' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>'
                            );

        for (b = 0; b < arrayOfResponses.length; b++) {
          $("#message-options-" + newPerson.firstName()).append('<form id="' + newPerson.firstName() + '-form-' + b + '" class="form-inline message-hide' + b + '">' +
                                         '<select class="resize-input form-group input-sm" id="' + newPerson.firstName() + '-options-' + b + '">' +
                                         '</select>' +
                                         '<div class="messageButton">' +
                                           '<button type="submit" class="btn btn-primary btn-sm">Send Message</button>' +
                                         '</div>' +
                                       '</form>'
         );
          for (c = 0; c < arrayOfResponses[b].length; c++) {
            $("#" + newPerson.firstName() + "-options-" + b).append(
              '<option value="' + c + '">' + arrayOfResponses[b][c] + '</option>'
            );
          }
        }
      }
      // //Fill in blanks
      // $(".entered-occupation").append(Player.occupation);
      // $(".entered-hobby").append(Player.hobby);
      //Hide sign up, show profiles
      $("#create-profile").hide();
      $("#profiles").fadeIn();
    }

    //Messenger toggles
    $("#message-Dutchess").click(function(){
      $(".message-box-Dutchess").slideToggle();
    });
    $("#message-Supul").click(function(){
      $(".message-box-Supul").slideToggle();
    });
    $("#message-Brenda").click(function(){
      $(".message-box-Brenda").slideToggle();
    });


    //Messenging Forms
      //Dutchess Messenger
      messengingSequence("Dutchess", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Dutchess", 5, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

      //Supul Messenger
      messengingSequence("Supul", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 5, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

      //Brenda Messenger
      messengingSequence("Brenda", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 5, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

    //Choose a date
    $("#date-Dutchess").click(function(){
      Player.likeScore = dutchessScore;
      console.log(Player);
      $("#profiles").empty();
    });
    $("#date-Supul").click(function(){
      Player.likeScore = supulScore;
      console.log(Player);
      $("#profiles").empty();
    });
    $("#date-Brenda").click(function(){
      Player.likeScore = brendaScore;
      console.log(Player);
      $("#profiles").empty();
    });
  });
});
