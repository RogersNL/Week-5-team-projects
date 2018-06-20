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
//Functions
function messengingSequence () {

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

//Global variables
var Player = new Person ()

//Player Responses Messages

var playerResponses1 = ["Hello", "Sup Honey Bo Bo", "Greatings, M'lady of the night", "HI // HEY // HEEELLLOOOOO???"];
var playerResponses2 = ["I'm going to Wholefoods later, can I pick you up anything?", "Heaven must be missing an Angel", "You so spooky my skeleton is shakin'", "You look like you wanna get WILD!"];
var playerResponses3 = ["Tell me more about yourself"];
var playerResponses4 = ["Yeah, I really love it here, great place!", "Mmmm yeah idk this place is kinda weird..."];
var playerResponses5 = ["Oh you know the usual, I work as a <span class='entered-occupation'><span>, I enjoy watching Netflix, taking the occasional walk, and <span class='entered-hobby></span>'", "#chillaxin at the beach with some brewskis, workin on my tan and hangin out with the bros at the gym #gymlyfe #beachbrews", "Midnight graveyard walks, fog dancing, hula-hooping, and <span class='entered-hobby></span>", "Huntin, fishin, muddin, rock crawlin, and <span class='entered-hobby></span>"];
var arrayOfResponses = [playerResponses1, playerResponses2, playerResponses3, playerResponses4, playerResponses5];

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
      console.log(Player);
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
                                      '<div class="newMessage">' +
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
                                    '<div class="message-area">' +
                                      '<p class="initial-show"><strong>*Send ' + newPerson.firstName() + ' a message*</strong></p>' +
                                      '<div id="message-options-' + newPerson.firstName() + '">' +
                                      '</div>' +
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
                                           '<button class="btn btn-primary btn-sm">Send Message</button>' +
                                         '</div>' +
                                       '</form>'
         );
          for (c = 0; c < arrayOfResponses[b].length; c++) {
            $("#" + newPerson.firstName() + "-options-" + b).append(
              '<option>' + arrayOfResponses[b][c] + '</option>'
            );
          }
        }

      }
      //Fill in blanks
      $(".entered-occupation").text(Player.occupation);
      $(".entered-hobby").text(Player.hobby);

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
  });
  //Messenging Forms
    //Dutchess Messenger
      $("#Dutchess-form-0").submit(function(event) {
        event.preventDefault();
        $
        $("#Dutchess-form-0").hide();
        $("#Dutchess-form-1").show();

      });

});
