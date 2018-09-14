// Execute this code when the DOM has fully loaded.
$(document).ready(function() {
// STEP 1. Declaring the counting cariables and their inicial values
  var announce = "";
  var sum = 0; 
  var wins = 0;
  var losses = 0;
    // Adding the above set values of 'wins' and 'losses' to the ids 'w', 'l', and 'score' in the html doc
    $("#w").text(wins);
    $("#l").text(losses);
    $("#score").text(sum);

    // STEP 2. Selecting a random number for computer
  var compuNumber = Math.floor(Math.random()*101) + 19;
                               //gives numbers between 0 and 1 with decimals,
                                           // I multiple it by 101 to get numbers between 0 and 1 with decimals
                                                  // I add 19 because I don't want nums 0 to 18, and I need also number 120 
                    // it takes out the decimals and gives me whole numbers (between 19 and 120)                              
  console.log("compuNumber" + compuNumber);
  // Adding compuNumber to the id 'number-to-guess' in the html doc
    $("#number-to-guess").text(compuNumber);

    // STEP 3. creating random# for each crystal
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

  // STEP 4. Creating all functions:
         //To reset the game
  function reset(){
    compuNumber=Math.floor(Math.random()*101+19);
    console.log(compuNumber)
    $("#number-to-guess").text(compuNumber);   // 5.3.2.3
    red= Math.floor(Math.random()*11+1);       
    console.log(red)                           // 5.3.2.4
    blue= Math.floor(Math.random()*11+1);
    console.log(blue)                          // 5.3.2.4
    yellow= Math.floor(Math.random()*11+1);
    console.log(yellow)                        // 5.3.2.4
    purple= Math.floor(Math.random()*11+1);
    console.log(purple)                        // 5.3.2.4 
    sum = 0;                                   // 5.3.2.5
    $("#score").text(sum);
     announce ="";                             //5.3.2.6
                     
  };
        // passing data to the div 'winslossesContainer';   
    //announces and adds the wins to the 'wins'.
  function youWon(){          //5.3.2
    announce="You Won!"         
    $("#a").text(announce);   //5.3.2.1
    wins++; 
    $("#w").text(wins);       //5.3.2.2
    reset();                  //5.3.2.3 to 5.3.2.6
  }  
        // announces and adds the losses to 'losses'.
  function youLost(){         //5.3.3    
    announce="You Lost!"      
    $("#a").text(announce);   //5.3.3.1
    losses++;
    $("#l").text(losses);     //5.3.3.2
    reset()                   //5.3.2.3 to 5.3.2.6
  }
  // STEP 5. setting up click for crystals images
    //.on method attaching the event CLICK and a function to the dimond image
    $("#redDiamond").on ('click', function(){  // 5.1 when the image with id '#redDiamond' is clicked, then run 
    sum = sum + red;            //5.2          //     the following function:
    console.log("newTotalscore= " + sum);
    $("#score").text(sum); 
    // in the case of won       //5.3.2
    if (sum === compuNumber) {                      
      youWon();                 
    };
    //in the case of lost       //5.3.3
    if (sum > compuNumber) {
      youLost();
    };
  });
  //.on method attaching the event CLICK and a function to the hart image
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
  //.on method attaching the event CLICK and a function to the tetrahedron image
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
  //.on method attaching the event CLICK and a function to the stalactites image
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
  
  
  










