function myfunc(event){
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

   localStorage.setItem('ls_fullname', fullname);
   localStorage.setItem('ls_email', email);
   localStorage.setItem('ls_subject', subject);
  }

  function checkInputs()
  
  {
      var fullname = document.getElementById("fullname").value; //fname is the ID
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      
      if(fullname == "") //if first and last name are not provided by client display a message
          document.getElementById("lastMessage").innerHTML = 
          "Please enter your name!";
      else if(email == "") //if phone number not valid display a message
          document.getElementById("lastMessage").innerHTML = 
          "Please enter your email!";
      else if (subject == "") //if appointment date not selected display a message
          document.getElementById("lastMessage").innerHTML = 
          "Please enter your message!"
else if (fullname != "" && email != ""  && subject != ""){
  document.getElementById("lastMessage").innerHTML = 
          "We'll be in touch soon!";
     myfunc(event);

     addFile12();
}
  
  }

  
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}