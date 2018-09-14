// Execute this code when the DOM has fully loaded.
$(document).ready(function() {
// 1. Declaring the counting cariables and their inicial values
  var announce = "";
  var sum = 0; 
  var wins = 0;
  var losses = 0;
  
  // Adding the above set values of 'wins' and 'losses' to the ids 'w', 'l', and 'score' in the html doc
    $("#w").text(wins);
    $("#l").text(losses);
    $("#score").text(sum);

// 2. Selecting a random number for computer
  var compuNumber = Math.floor(Math.random()*101) + 19;
                               //gives numbers between 0 and 1 with decimals,
                                           // I multiple it by 101 to get numbers between 0 and 1 with decimals
                                                  // I add 19 because I don't want nums 0 to 18, and I need also number 120 
                    // it takes out the decimals and gives me whole numbers (between 19 and 120)                              
  console.log("compuNumber" + compuNumber);
  // Adding compuNumber to the id 'number-to-guess' in the html doc
    $("#number-to-guess").text(compuNumber);

// 3. creating random# for each crystal
  var red = Math.floor(Math.random()*11) + 1;
  console.log(red)
  var blue = Math.floor(Math.random()*11) + 1;
  console.log(blue)
  var yellow = Math.floor(Math.random()*11) + 1;
  console.log(yellow)
  var purple = Math.floor(Math.random()*11) + 1;
                         //gives numbers between 0 and 1 with decimals,
                                      // I multiple it by 11 to get numbers between 0 and 11 (still with decimals),
                                          // I add 1 because I don't want num 0 and I need also number 12, 
  console.log(purple)                  

// Creating all functions:
  //To reset the game
    function reset(){
      compuNumber=Math.floor(Math.random()*101+19);
      console.log(compuNumber)
      $("#number-to-guess").text(compuNumber);
      red= Math.floor(Math.random()*11+1);
      console.log(red)
      blue= Math.floor(Math.random()*11+1);
      console.log(blue)
      yellow= Math.floor(Math.random()*11+1);
      console.log(yellow)
      purple= Math.floor(Math.random()*11+1);
      console.log(purple)
      sum = 0;
      announce ="";
      $("#score").text(sum);
    };
  // passing data to the div 'winslossesContainer';   
        //announces and adds the wins to the 'wins'.
  function youWon(){
    announce="You Won!"
    $("#a").text(announce);
    wins++; 
    $("#w").text(wins);
    reset();
  }  
       // announces and adds the losses to 'losses'.
  function youLost(){
    announce="You Lost!"
    $("#a").text(announce);
    losses++; 
    $("#w").text(wins);
    losses++;
    $("#l").text(losses);
    reset()
  }
  //4. setting up click for crystals
    //.on using the optional event with the method CLICK
  $("#redDiamond").on ('click', function(){  //when the image with id '#redDiamond' is clicked, then run 
    sum = sum + red;                         //the following function:
    console.log("newTotalscore= " + sum);
    $("#score").text(sum); 
    // in the case of won 
    if (sum === compuNumber) {
      youWon();
    };
    //in the case of lost
    if (sum > compuNumber) {
      youLost();
    };
  });
  $("#blueHart").on ('click', function(){  //when the image with id'#blueHart' is clicked, then run the 
    sum = sum + blue;                      //the following function:
    console.log("newTotalscore= " + sum);
    $("#score").text(sum); 
    //in the case of won
    if (sum === compuNumber) {
      youWon();
    };
    //in the case of lost
    if (sum > compuNumber) {
      youLost();
    };   
  });
  $("#yellow").on ('click', function(){     //when the image with id '#yellow' is clicked, then run 
    sum = sum + yellow;                     //the following function:
    console.log("newTotalscore= " + sum);
    $("#score").text(sum); 
    //in the case of won
    if (sum === compuNumber) {
      youWon();
    }
    //in the case of lost
    if (sum > compuNumber) {
      youLost();
    };   
  });
  $("#purpleSacalctites").on ('click', function(){  //when the image with id '#purpleStalactites' is clicked, then run 
    sum = sum + purple;                             //the following function:
    console.log("newTotalscore= " + sum);
    $("#score").text(sum); 
    //in the case of won
    if (sum ===compuNumber) {
      youWon();
    }
    //in the case of lost
    if (sum > compuNumber) {
      youLost();
    };   
  });
});
  
  
  

//genera los valores randoms y los asigna a cada imagen
//crystals[crystal.attr("data-name")].points;
//     red: {
 //       points: Math.floor(Math.random() * 12) + 1,
 //       imageUrl: "assets/images/red.png",
//      };








