
function emailSend(){

  var userName = document.getElementById("full_name").value;
  var email = document.getElementById("email").value;
  var message =document.getElementById("message").value;
  
  var messageBody =  "Name" + userName + 
  "<br/> Email" + email
  "<br/> Message" + message;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "fuzelxr@gmail.com",
    Password : "FDCA255B0530E8C411034FB4CD12F8B4B2FE",
    To : 'connect.fuzailmansuri@gmail.com',
    From : "fuzelxr@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => alert(message)
);
}