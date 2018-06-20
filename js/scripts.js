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

//Functions
function messengingSequence (name, messageNumber, arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  $("#" + name + "-form-" + messageNumber).submit(function(event) {
    event.preventDefault();
    console.log(Player);
    $(".initial-show-" + name).hide();
    $(".newMessageDutchess").hide();
    $(".newMessageSupul").hide();
    $(".newMessageBrenda").hide();
    var message = parseInt($("#" + name + "-options-" + messageNumber).val());
    personResponse = message;
    var messageNum = messageNumber;
    if (messageNumber === 0 && message === 3) {
      $(".message-area-" + name).append('<div><span class="player-message-multiple">HI</span></div>');
      $(".message-area-" + name).append('<div><span class="player-message-multiple">HEY</span></div>');
      $(".message-area-" + name).append('<div><span class="player-message">HEEELLLOOOOO???</span></div>');
    } else {
    $(".message-area-" + name).append('<div><span class="player-message">' + arrayOfResponses[messageNumber][message] + '</span></div>');
    }
    messageDutchess = false;
    messageSupul = false;
    messageBrenda = false;
    if (name === "Dutchess") {
      messageDutchess = true;
    } else if (name === "Supul") {
      messageSupul = true;
    } else if (name === "Brenda") {
      messageBrenda = true;
    }
    $("#" + name + "-form-" + messageNumber).hide();
    $("#" + name + "-form-" + (messageNumber + 1)).show();
    allResponses (messageNum, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
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
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][0] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageDutchess === true && personResponse === 1) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][1] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageDutchess === true && personResponse === 2) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][2] + '</span></div>');
    $(".entered-name").text(Player.name);
    $(".newMessageDutchess").show();
  } else if (messageDutchess === true && personResponse === 3) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[0][3] + '</span></div>');
    $(".newMessageDutchess").show();
    //Crazy person Supul
  } else if (messageSupul === true && personResponse === 0) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][0] + '</span></div>');
    $(".newMessageSupul").show();
  } else if (messageSupul === true && personResponse === 1) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][1] + '</span></div>');
    $(".newMessageSupul").show();
  } else if (messageSupul === true && personResponse === 2) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][2] + '</span></div>');
    $(".newMessageSupul").show();
  } else if (messageSupul === true && personResponse === 3) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[0][3] + '</span></div>');
    $(".newMessageSupul").show();
    //Normal Person Brenda
  } else if (messageBrenda === true && personResponse === 0) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][0] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if (messageBrenda === true && personResponse=== 1) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][1] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if (messageBrenda === true && personResponse === 2) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][2] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if (messageBrenda === true && personResponse === 3) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[0][3] + '</span></div>');
    $(".newMessageBrenda").show();
  }
}
function messengingResponse1(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][0] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if(messageDutchess === true && personResponse === 1){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][1] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if(messageDutchess === true && personResponse  === 2){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][2] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if(messageDutchess === true && personResponse  === 3){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[1][3] + '</span></div>');
    $(".newMessageDutchess").show();

  } else if (messageSupul  === true && personResponse  === 0) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][0] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul  === true && personResponse === 1){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][1] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul === true && personResponse  === 2){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][2] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul === true && personResponse  === 3){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[1][3] + '</span></div>');
    $(".newMessageSupul").show();

  } else if (messageBrenda === true && personResponse  === 0) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][0] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda  === true && personResponse  === 1){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][1] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda === true && personResponse  === 2){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][2] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda === true && personResponse  === 3){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[1][3] + '</span></div>');
    $(".newMessageBrenda").show();
  }
}
function messengingResponse2(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[2][0] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageSupul === true && personResponse === 0) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[2][0] + '</span></div>');
    $(".newMessageSupul").show();
  } else if (messageBrenda === true && personResponse === 0) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[2][0] + '</span></div>');
    $(".newMessageBrenda").show();
  }
}
function messengingResponse3(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[3][0] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageSupul === true && personResponse === 0) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[3][0] + '</span></div>');
    $(".newMessageSupul").show();
  } else if (messageBrenda === true && personResponse === 0) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[3][0] + '</span></div>');
    $(".newMessageBrenda").show();
  }
}
function messengingResponse4(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][0] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageDutchess === true && personResponse === 1){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][1] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageDutchess=== true && personResponse === 2){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][2] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageDutchess=== true && personResponse === 3){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[4][3] + '</span></div>');
    $(".newMessageDutchess").show();

  } else if (messageSupul === true && personResponse === 0) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][0] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul === true && personResponse === 1){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][1] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul === true && personResponse === 2){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][2] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul === true && personResponse === 3){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[4][3] + '</span></div>');
    $(".newMessageSupul").show();

  } else if (messageBrenda === true && personResponse === 0) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][0] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda === true && personResponse === 1){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][1] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda === true && personResponse === 2){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][2] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda === true && personResponse === 3){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[4][3] + '</span></div>');
    $(".newMessageBrenda").show();
  }
}
function messengingResponse5(arrayNames, arrayPerson0, arrayPerson1, arrayPerson2) {
  if (messageDutchess === true && personResponse === 0) {
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[5][0] + '</span></div>');
    $(".newMessageDutchess").show();
  } else if (messageDutchess === true && personResponse === 1){
    $(".message-area-Dutchess").append('<div><span class="person-message">' + arrayPerson0[5][1] + '</span></div>');
    $(".newMessageDutchess").show();

  } else if (messageSupul === true && personResponse  === 0) {
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[5][0] + '</span></div>');
    $(".newMessageSupul").show();
  } else if(messageSupul === true && personResponse === 1){
    $(".message-area-Supul").append('<div><span class="person-message">' + arrayPerson1[5][1] + '</span></div>');
    $(".newMessageSupul").show();

  } else if (messageBrenda === true && personResponse === 0) {
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[5][0] + '</span></div>');
    $(".newMessageBrenda").show();
  } else if(messageBrenda === true && personResponse === 1){
    $(".message-area-Brenda").append('<div><span class="person-message">' + arrayPerson2[5][1] + '</span></div>');
    $(".newMessageBrenda").show();
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
var playerResponses3 = ["Yeah, I really love it here, great place!", "Mmmm yeah idk this place is kinda weird..."];
var playerResponses4 = ["Oh you know the usual, I work as a programmer, I enjoy watching Netflix, taking the occasional walk, and eating.", "#chillaxin at the beach with some brewskis, workin on my tan and hangin out with the bros at the gym #gymlyfe #beachbrews", "Midnight graveyard walks, fog dancing, hula-hooping, and watching movies.", "Huntin, fishin, muddin, rock crawlin, and sleepin."];
var playerResponses5 = ["Would you like to go out?"]
var arrayOfResponses = [playerResponses0, playerResponses1, playerResponses2, playerResponses3, playerResponses4, playerResponses5];

//Dutchess Response Messages
var dutchessResponse0 = ["...", "... ugh", "Greetings morta... er <span class='entered-name'></span>", "um... hello?"];
var dutchessResponse1 = ["Oh, no... they don't have anything I could eat", "Speak not of the accursed ones!", "Oh my, well let us hope it doesn't rattle right out of you haha ;)", "Eh, on occasion I suppose..."];
var dutchessResponse2 = ["First you should know, as my profile mentioned, I am a widow and a recent immigrant to this fine kingdom. Second, I am, due to my work of course, a creature of the night and must spend my days sleeping. I've not yet seen everything the Dark Lord's Kingdom has to offer, but so far I feel right at home."];
var dutchessResponse3 = ["Yeah, I really love it here, great place!"];
var dutchessResponse4 = ["How... pedantic.", "In... in the sun?", "How delightful", "Well, I do love to feed"];
var dutchessResponse5 = ["Absolutely, darling.", "I suppose I have the time..."];
var arrayOfDutchessResponses = [dutchessResponse0, dutchessResponse1, dutchessResponse2, dutchessResponse3, dutchessResponse4, dutchessResponse5];

//Supul Response Messages
var supulResponse0 = ["Huh? WhaT? You talking to MEEE?", "HONEY WHAT???", "WHAT?? WHO TOLD YOU???", "HEEEEEEEEEEEEEEEEYYYY!!!!"];
var supulResponse1 = ["Bah, where's the fun if the food's just sitting there waitin' for ya?", "REEEEEEEE", "Look, this hair is impossible OK?", "AAAWWWWOOOOOOOOOOOOOOOOO!!!!"];
var supulResponse2 = ["Where to start, where to start??? I am a fulltime bartender/athletics instructor/hunter (damn site would only let me put in one job). I loooove being out in the wild, the smell of the grass, the scent of the prey... ooooh and the Dark Lord's Kingdom as THE best places to hunt!!!"];
var supulResponse3 = ["Yeah, I really love it here, great place!"];
var supulResponse4 = ["BO-RING", "Mmmm fresh meat", "Did you say... HULA-HOOPING??", "Yeeeeah! Yes! YES! YESS!"];
var supulResponse5 = ["YAYAYAYAYAYA!", "What have I got to lose?"];
var arrayOfSupulResponses = [supulResponse0, supulResponse1, supulResponse2, supulResponse3, supulResponse4, supulResponse5];

//Brenda Response Messages
var brendaResponse0 = ["Sup", "Ew", "EW", "Ugh"];
var brendaResponse1 = ["OOOMG can you pick me up some chai??", "Ew", "What?? How am I spooky???", "Wow ok slow down there..."];
var brendaResponse2 = ["Let's see... I moved to the Dark Lord's Kingdom on a student visa 8 years ago. After school I already had lots of wage slave offers and so I decided to stay and apply for a work visa. I think maybe it was the seclution in college, but I never realized until afterwards how... strange this country is, and I'm not sure I really fit in..."];
var brendaResponse3 = ["Mmmm yeah idk this place is kinda weird..."];
var brendaResponse4 = ["OMG I luv Netflix!!!!!!!!!!!!!!!! I’ve watched every episode of The Office 7 times!", "Uuuuuh... cooooooool?", "You kinda sound like a creeper.", "I’m a Vegan."];
var brendaResponse5 = ["Uh sure.", "Sigh, I guess."];
var arrayOfBrendaResponses = [brendaResponse0, brendaResponse1, brendaResponse2, brendaResponse3, brendaResponse4, brendaResponse5];


$(document).ready(function(){
  $("#sign-up").click(function() {
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
                                '<div class="panel panel-danger ">' +
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

      //Supul Messenger
      messengingSequence("Supul", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Supul", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);

      //Brenda Messenger
      messengingSequence("Brenda", 0, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 1, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 2, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 3, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);
      messengingSequence("Brenda", 4, profileNames, arrayOfDutchessResponses, arrayOfSupulResponses, arrayOfBrendaResponses);


  // // response to each question. responses output 1 - 3
  // var firstText = 1; // 1st text -- 4 options
  // var pickUpText = 1; // 2nd text -- 4 options
  // var peronalInfoText = 1; // 3rd text -- 1 option
  // var responseDLKtext = 1; // 4th text -- 1 option
  // var responseToBioText = 1 // 5th text -- 4 options
  // var locationText = 1; // 6th text -- 2 options
  //
  // var response1Dutchess = ""
  // var response1Supul = ""
  // var response1Brenda = ""
  //
  // var response2Dutchess = ""
  // var response2Supul = ""
  // var response2Brenda  = ""
  //
  // var response3Dutchess = ""
  // var response3Supul = ""
  // var response3Brenda = ""
  //
  // var response4Dutchess = ""
  // var response4Supul = ""
  // var response4Brenda = ""
  //
  // var response5Dutchess = ""
  // var response5Supul = ""
  // var response5Brenda = ""
  //
  // var response6Dutchess = ""
  // var response6Supul = ""
  // var response6Brenda = ""
  //
  //
// interval delay, functional with buttons
  // $("button.message").click(function() {
  //   $(".testBox").slideToggle();
  // });
  // $("button.introT").click(function() {
  //   messageDutchess = true;
  //     profile1.introText();
  //   $("#test").show();
  //   var text1 = setInterval(answer1, 4000);
  //   function answer1() {
  //     $("#answer1").show();
  //     $(".introT").hide();
  //     $(".pickUp").show();
  //     $(".newMessage").show();
  //     clearInterval(text1);
  //   }
  //   document.getElementById("test").innerHTML = response1Dutchess;
  //     profileDark = false;
  // });
  //
  // $("button.pickUp").click(function() {
  //   profileDark = true;
  //   profile1.pickUpLine();
  //   $("#test1").show();
  //   $(".newMessage").hide();
  //   var text2 = setInterval(answer2, 4000);
  //   function answer2() {
  //     $(".newMessage").show();
  //     $("#answer2").show();
  //     $(".pickUp").hide();
  //     $(".dateLoc").show();
  //     clearInterval(text2);
  //   }
  //   document.getElementById("test1").innerHTML = response2Dutchess;
  // profileDark = false;
  // });
  //
  // $("button.dateLoc").click(function() {
  //   profileDark = true
  //   profile1.dateLocation();
  //   $("#test2").show();
  //   $(".newMessage").hide();
  //   var text3 = setInterval(answer3, 4000);
  //   function answer3() {
  //     $(".newMessage").show();
  //     $("#answer3").show();
  //    $(".dateLoc").hide();
  //    $(".doesNothing").show();
  //     clearInterval(text3);
  //   }
  //   document.getElementById("test2").innerHTML = response6Dutchess;
  //     profileDark = false;
  // });
//DATE STARTS HERE
  // var dateResponse = "";
  //
  //
  // var question1 = 1; //branch question 2 options (1 work or 2 hobbies)
  // var question2 = 1;
  // var question3 = 1;
  // var question4 = 1;
  // var question5 = 1;
  // var question6 = 1;
  // var question7 = 1;
  // var question8 = 1;
  //
  //
  // Person.prototype.dateQuestion1 = function(){
  //   if (question1 === 1 && profileDark === true) {
  //     dateResponse = "Of course darling, even before I moved to the Dark Lord’s Kingdom I was a creature of the night. I’m currently haunting the Old Farm Hotel between 11pm and sunrise. I don’t see many people these days but that is ok with me, I only need a few to survive. You should stay a night if you haven’t already, the decor is to die for!";
  //   } else if (question1 === 2 && profileDark === true){
  //     dateResponse = "Well, I have a great penchant for candelabra, and they have let me do some interior decorating at the hotel when the nights are slow. I am also a collector of fine -red- wines, although unlike most I prefer a younger blend... [she gazes off into the distance apparently lost in this thought.";
  // ///CRAZY PROFILE
  //   } else if (question1 === 1 && profileCrazy === true) {
  //     dateResponse = "Aaaah what’s to tell?? I flip bottles and bounce drunks most of the time, but I also make a good deal with all the fresh meat I bring in from my hunts! The bartending is just to fill in the gaps. I live for the hunt!";
  //   } else if(question1 === 2 && profileCrazy === true){
  //     dateResponse= "YOU BETCHA! Did I mention that I love hunting? I am also a master taxidermist and decorated marathon runner!!! THINK YOU CAN KEEP UP?!?!";
  // ///NORMAL PROFILE
  //   } else if (question1 === 1 && profileNormal === true){
  //     dateResponse= "Oooooh you knooooow, I just work a boring nine to five over at the Wage Slave Industries. I got my degree in Wage Slavery, and the Dark Lord’s Kingdom has world class Wage Slavery! The work is fine, it’s the weirdos that get to me...";
  //   } else if(question1 === 2 && profileNormal === true){
  //     dateResponse= "Ooooh well you know, everyone and everything in this place so so strange and foreign, I basically just watch Netflix these days. Have you seen the Office??";
  //   }
  // }
  //
  // ///question branch 1
  // Person.prototype.dateQuestion2_firstPath = function(){
  //   ////DARK PROFILE
  //   if (question1 === 1 && profileDark === true && question2 === 1) {
  //     dateResponse = "question2 DARK = DARK response";
  //     this.dark +=1;
  //   } else if (question1 === 1 && profileDark === true && question2  === 2){
  //     dateResponse = "question2 CRAZY = DARK response";
  //
  //   } else if (question1 === 1 && profileDark === true && question2 === 3){
  //     dateResponse = "question2 NORMAL = DARK response";
  // ///CRAZY PROFILE
  //   } else if (question1 === 1 && profileCrazy === true && question2  === 1) {
  //     dateResponse = "question2 DARK  = CRAZY response";
  //   } else if(question1 === 1 && profileCrazy === true && question2  === 2){
  //     dateResponse= "question2 CRAZY = CRAZY response";
  //     this.crazy += 1;
  //   } else if(question1 === 1 && profileCrazy=== true && question2 === 3) {
  //     dateResponse = "question2 NORMAL =  CRAZY response";
  // ///NORMAL PROFILE
  //   } else if (question1 === 1 && profileNormal === true && question2  === 1){
  //     dateResponse= "question2 DARK  = NORMAL response";
  //   } else if(question1 === 1 && profileNormal === true && question2 === 2){
  //     dateResponse= "question2 CRAZY  = NORMALresponse";
  //   } else if(question1 === 1 && profileNormal === true && question2 === 3){
  //     dateResponse= "question2 NORMAL = NORMAL response";
  //     this.normal += 1;
  //   }
  // }
  //
  // ///question branch 2
  // Person.prototype.dateQuestion2_secondPath = function(){
  //   ////DARK PROFILE
  //   if (question1 === 2 && profileDark === true && question2 === 1) {
  //   dateResponse= "question2 DARK = DARK response";
  //     this.dark +=1;
  //   } else if (question1 === 2 && profileDark === true && question2  === 2){
  //     dateResponse= "question2 CRAZY = DARK response";
  //   } else if (question1 === 2 && profileDark === true && question2 === 3){
  //     dateResponse = "question2 NORMAL = DARK response";
  // ///CRAZY PROFILE
  //   } else if (question1 === 2 && profileCrazy === true && question2  === 1) {
  //     dateResponse = "question2 DARK  = CRAZY response";
  //   } else if(question1 === 2 && profileCrazy === true && question2  === 2){
  //     dateResponse = "question2 CRAZY = CRAZY response";
  //     this.crazy += 1;
  //   } else if(question1 === 2 && profileCrazy=== true && question2 === 3) {
  //     dateResponse = "question2 NORMAL =  CRAZY response";
  // ///NORMAL PROFILE
  //   } else if (question1 === 2 && profileNormal === true && question2  === 1){
  //     dateResponse = "question2 DARK  = NORMAL response";
  //   } else if(question1 === 2 && profileNormal === true && question2 === 2){
  //     dateResponse = "question2 CRAZY  = NORMALresponse";
  //   } else if(question1 === 2 && profileNormal === true && question2 === 3){
  //     dateResponse = "question2 NORMAL = NORMAL response";
  //     this.normal += 1;
  //   }
  // }
  //
  // //question triggering differnt branch
  // Person.prototype.dateQuestion3 = function(){
  //     if (question3  === 1) {
  //       dateResponse = "branch 1 response";
  //     } else if (question3 === 2){
  //       dateResponse = "branch 2 response";
  // }
  // }
  //
  // ///question3 branch 1
  // Person.prototype.dateQuestion4_firstPath = function(){
  //   ////DARK PROFILE
  //   if (question3 === 1 && profileDark === true && question4 === 1) {
  //     dateResponse = "question4 DARK = DARK response";
  //     this.dark +=1;
  //   } else if (question3 === 1 && profileDark === true && question4  === 2){
  //     dateResponse = "question4 CRAZY = DARK response";
  //
  //   } else if (question3 === 1 && profileDark === true && question4 === 3){
  //     dateResponse = "question4 NORMAL = DARK response";
  // ///CRAZY PROFILE
  //   } else if (question3 === 1 && profileCrazy === true && question4  === 1) {
  //     dateResponse = "question4 DARK  = CRAZY response";
  //   } else if(question3 === 1 && profileCrazy === true && question4  === 2){
  //     dateResponse= "question4 CRAZY = CRAZY response";
  //     this.crazy += 1;
  //   } else if(question3 === 1 && profileCrazy=== true && question4 === 3) {
  //     dateResponse = "question4 NORMAL =  CRAZY response";
  // ///NORMAL PROFILE
  //   } else if (question3 === 1 && profileNormal === true && question4  === 1){
  //     dateResponse= "question4 DARK  = NORMAL response";
  //   } else if(question3 === 1 && profileNormal === true && question4 === 2){
  //     dateResponse= "question4 CRAZY  = NORMALresponse";
  //   } else if(question3 === 1 && profileNormal === true && question4 === 3){
  //     dateResponse= "question4 NORMAL = NORMAL response";
  //     this.normal += 1;
  //   }
  // }
  //
  // ///question3 branch 2
  // Person.prototype.dateQuestion4_secondPath = function(){
  //   ////DARK PROFILE
  //   if (question3 === 2 && profileDark === true && question4 === 1) {
  //   dateResponse= "question4 DARK = DARK response";
  //     this.dark +=1;
  //   } else if (question3 === 2 && profileDark === true && question4  === 2){
  //     dateResponse= "question4 CRAZY = DARK response";
  //   } else if (question3 === 2 && profileDark === true && question4 === 3){
  //     dateResponse = "question4 NORMAL = DARK response";
  // ///CRAZY PROFILE
  //   } else if (question3 === 2 && profileCrazy === true && question4  === 1) {
  //     dateResponse = "question4 DARK  = CRAZY response";
  //   } else if(question3 === 2 && profileCrazy === true && question4  === 2){
  //     dateResponse = "question4 CRAZY = CRAZY response";
  //     this.crazy += 1;
  //   } else if(question3 === 2 && profileCrazy=== true && question4 === 3) {
  //     dateResponse = "question4 NORMAL =  CRAZY response";
  // ///NORMAL PROFILE
  //   } else if (question3 === 2 && profileNormal === true && question4  === 1){
  //     dateResponse = "question4 DARK  = NORMAL response";
  //   } else if(question3 === 2 && profileNormal === true && question4 === 2){
  //     dateResponse = "question4 CRAZY  = NORMALresponse";
  //   } else if(question3 === 2 && profileNormal === true && question4 === 3){
  //     dateResponse = "question4 NORMAL = NORMAL response";
  //     this.normal += 1;
  //   }
  // }
  //
  // //question triggering differnt branch
  // Person.prototype.dateQuestion5 = function(){
  //     if (question5  === 1) {
  //       dateResponse = "branch 1 response";
  //     } else if (question5 === 2){
  //       dateResponse = "branch 2 response";
  // }
  // }
  //
  // ///question3 branch 1
  // Person.prototype.dateQuestion6_firstPath = function(){
  //   ////DARK PROFILE
  //   if (question5 === 1 && profileDark === true && question6 === 1) {
  //     dateResponse = "question6 DARK = DARK response";
  //     this.dark +=1;
  //   } else if (question5 === 1 && profileDark === true && question6  === 2){
  //     dateResponse = "question6 CRAZY = DARK response";
  //
  //   } else if (question5 === 1 && profileDark === true && question6 === 3){
  //     dateResponse = "question6 NORMAL = DARK response";
  // ///CRAZY PROFILE
  //   } else if (question5 === 1 && profileCrazy === true && question6  === 1) {
  //     dateResponse = "question6 DARK  = CRAZY response";
  //   } else if(question5 === 1 && profileCrazy === true && question6  === 2){
  //     dateResponse= "question6 CRAZY = CRAZY response";
  //     this.crazy += 1;
  //   } else if(question5 === 1 && profileCrazy=== true && question6 === 3) {
  //     dateResponse = "question6 NORMAL =  CRAZY response";
  // ///NORMAL PROFILE
  //   } else if (question5 === 1 && profileNormal === true && question6  === 1){
  //     dateResponse= "question6 DARK  = NORMAL response";
  //   } else if(question5 === 1 && profileNormal === true && question6 === 2){
  //     dateResponse= "question6 CRAZY  = NORMALresponse";
  //   } else if(question5 === 1 && profileNormal === true && question6 === 3){
  //     dateResponse= "question6 NORMAL = NORMAL response";
  //     this.normal += 1;
  //   }
  // }
  //
  // ///question5 branch 2
  // Person.prototype.dateQuestion6_secondPath = function(){
  //   ////DARK PROFILE
  //   if (question5 === 2 && profileDark === true && question6 === 1) {
  //   dateResponse= "question6 DARK = DARK response";
  //     this.dark +=1;
  //   } else if (question5 === 2 && profileDark === true && question6  === 2){
  //     dateResponse= "question6 CRAZY = DARK response";
  //   } else if (question5 === 2 && profileDark === true && question6 === 3){
  //     dateResponse = "question6 NORMAL = DARK response";
  // ///CRAZY PROFILE
  //   } else if (question5 === 2 && profileCrazy === true && question6  === 1) {
  //     dateResponse = "question6 DARK  = CRAZY response";
  //   } else if(question5 === 2 && profileCrazy === true && question6  === 2){
  //     dateResponse = "question6 CRAZY = CRAZY response";
  //     this.crazy += 1;
  //   } else if(question5 === 2 && profileCrazy=== true && question6 === 3) {
  //     dateResponse = "question6 NORMAL =  CRAZY response";
  // ///NORMAL PROFILE
  //   } else if (question5 === 2 && profileNormal === true && question6  === 1){
  //     dateResponse = "question6 DARK  = NORMAL response";
  //   } else if(question5 === 2 && profileNormal === true && question6 === 2){
  //     dateResponse = "question6 CRAZY  = NORMALresponse";
  //   } else if(question5 === 2 && profileNormal === true && question6 === 3){
  //     dateResponse = "question6 NORMAL = NORMAL response";
  //     this.normal += 1;
  //   }
  // }
  //
  // //profile1.dateQuestion1();
  // //profile1.dateQuestion2_firstPath();
  // // profile1.dateQuestion2_secondPath();
  // // profile1.dateQuestion3();
  // // // profile1.dateQuestion4_secondPath();
  // // profile1.dateQuestion4_firstPath();
  // profile1.dateQuestion5();
  // profile1.dateQuestion6_secondPath();
  //
  //   document.getElementById("story").innerHTML = dateResponse;
  //   document.getElementById("story1").innerHTML = "Hello";
  //
  //
  //
  //

  });

});
