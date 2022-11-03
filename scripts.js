/* Add your JavaScript to this file */
var starter=function(){
    var email_entry = document.getElementById("email");
    document.getElementsByClassName("btn")[1].onclick=function(e){
         var input = email_entry.value;
         if (input == "") {
             document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";
         } 
         else if {
             document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " +input + " has been added to our mailing list!";
         }
         else  {
         alert("Email address is invalid!");
        document.form1.text1.focus();
        return false;;
     }
 }
}
 
 window.onload=starter;