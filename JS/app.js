const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const colorDots = document.getElementById("dots-container");

let red;
let green;
let blue;
let rgbColor;




//Gets Random rgb color and stores it in the variable rgbColor
function getRGB() {
  for (var i = 0; i < alphabet.length; i += 1) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      return rgbColor;
    }
};

//Gets array items and creates a button for each item
//Applies random color to button background
//Applies random color to button content (array items)
function getAlphabet() {
  for (var i = 0; i < alphabet.length; i += 1) {
    colorDots.innerHTML += '<button class="button color-dot" type="button" style="background-color:' + getRGB() + '"><p style="color:' + getRGB() + '">' + alphabet[i] + '</p></button>';
 };
      return this;
};

//Reveals css of button clicked
function clickDot() {
  $('button.color-dot').click(function () {
    var dotBckColor = $(this).css('background-color');
    var dotColor = $(this).children().css('color');
      $('#dot-desc').show();
      $('#dot-desc').html('background-color: ' + dotBckColor + '<br/>' + ' color: ' + dotColor + '');
  });
}

//Creates new set of buttons per array items
//Changes button text
//Hides welcome message
//Shows current bg-color message
//Applies e.listener to newly created buttons
$("#btn-color-change").click(function() {
  this.innerHTML = "MORE!!!";
  getAlphabet();
  $(".message, .title").hide();
  $("#back-color").html("Current (page) background-color: " + $("body").css("background-color") + "");
  $("#back-color").show();
  clickDot();
  });


//Changes bg-color to new random color
//Displays bg-color message
//Hides welcome message
$( "#btn-back-change" ).on( "click", function() {
  $( "body" ).css( "background-color", getRGB() );
  $("#back-color").html("Current (page) background-color: " + $("body").css("background-color") + "");
  $(".message, .title").hide();
  $("#back-color").show();
});

//resets page to defaults
//Hides any messages created after events
$("#btn-clear").click(function(){
  colorDots.innerHTML = "";
  $("body").css("background-color", "rgb(255, 255, 255)");
  $("#back-color").html("Current (page) background-color: " + $("body").css("background-color") + "");
  $(".message, .title").show();
  $("#back-color, .dot-desc").hide();
  $("#btn-color-change").html("BEGIN");
});
