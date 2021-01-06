// Alert script for the contact information.

var Alert = new CustomAlert();
function CustomAlert(){
  this.render = function(){
      let Alertbox = document.getElementById('Alertbox');
      Alertbox.style.display = "block";
      console.log(document.getElementById("Fname"))
      document.getElementById('closeModal').innerHTML = '<button onclick="Alert.ok()">OK</button>';
	  document.getElementById("FnameConfirmation").textContent = "First Name: " + document.getElementById("Fname").value;
	  document.getElementById("LnameConfirmation").textContent = "Last Name: " + document.getElementById("Lname").value;
	  document.getElementById("EmailConfirmation").textContent = "Email: " + document.getElementById("Email").value;
	  document.getElementById("PhoneConfirmation").textContent = "Phone number: " + document.getElementById("Phone").value;
	  document.getElementById("MessageConfirmation").textContent = "Your message: " + document.getElementById("Message").value;
  }
  
this.ok = function(){
  document.getElementById('Alertbox').style.display = "none";
  document.getElementById('Alertoverlay').style.display = "none";
}
}