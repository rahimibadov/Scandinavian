
   let norwaymyButton = document.getElementById("norway-demoButton");        

   norwaymyButton.addEventListener("click", ()=>{                     //? buttona click edende...

   let norwaymyInput = document.getElementById("norway-myInput").value;     //? inputa girilən dəyərə çatmaq .value (inputta yazılan-axtarış)

    switch (norwaymyInput) {                                         //? switchin icine inputu atiriq-inputa girilen deyer valur(yazilanlar js css..) 
        case "capital": mySpan = "Oslo is the capital city of Norway"; break; 
        case "area": mySpan = "Norway has a total area of 385,207 km²"; break; 
        case "population": mySpan = "Norway has a total population of 5.49 million"; break; 
        case "language": mySpan = "Has two official languages-Norwegian and Sami"; break; 
        case "name": mySpan = "The Kingdom of Norway"; break;  
        case "king": mySpan = "Harald V of Norway"; break; 
        case "currency": mySpan = "Norwegian Krone "; break; 
        case "national day": mySpan = "17 May"; break; 
        default : mySpan = "No info"; break;        //? basqa deyer yazilsa defaulta dusur
            
       };
        
       document.getElementById("norway-demoP").innerHTML = mySpan;

   })