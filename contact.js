/* SMTP Email */
const form = document.getElementById('contact-form');
function emailSend() {
  // debugger;
  Email.send({
    SecureToken: "005cf327-4b4c-4a98-8dae-ccb2a0db00cd",
    Host: "smtp.elasticemail.com",
    Port: 2525,
    Username: "marwa.mohamed8712000@gmail.com",
    Password: "8BEB72CC47A7E9D03BD12B4C5CD232E0B23E",
    To: 'marwa.mohamed871@yahoo.com',
    From: "marwa.mohamed8712000@gmail.com",
    Subject: "This is the subject",
    Body: "Name:" + document.getElementById('username').value +
      "<br><br>Email:" + document.getElementById('useremail').value +
      "<br><br>Subject:" + document.getElementById('usersub').value +
      "<br><br>Message:" + document.getElementById('usermsg').value
  })
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
