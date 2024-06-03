
let myButton = document.getElementById("demoButton");        

   myButton.addEventListener("click", ()=>{                     //? buttona click edende...

   let myInput = document.getElementById("myInput").value;     //? inputa girilən dəyərə çatmaq .value (inputta yazılan-axtarış)

    switch (myInput) {                                         //? switchin icine inputu atiriq-inputa girilen deyer valur(yazilanlar js css..) 
        case "capital": mySpan = "Stockholm is the capital and largest city of Sweden"; break; 
        case "area": mySpan = "Sweden has a total area of 447,430 km²."; break; 
        case "population": mySpan = "Sweden has a total population of 10.5 million"; break; 
        case "language": mySpan = "The official language of Sweden is Swedish"; break; 
        case "name": mySpan = "The Kingdom of Sweden"; break;  
        case "king": mySpan = "Carl XVI Gustaf"; break; 
        case "currency": mySpan = "Swedish Crowns (SEK)"; break; 
        case "national day": mySpan = "6 June"; break; 
        default : mySpan = "No info"; break;        //? basqa deyer yazilsa defaulta dusur
            
       };
        
       document.getElementById("demoP").innerHTML = mySpan;

   })
