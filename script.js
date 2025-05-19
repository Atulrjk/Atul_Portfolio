const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



function sendMail(){
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let message = document.getElementById("message");

  if(name.value=="" || email.value=="" || phone.value=="" || message.value==""){
     Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Fill the all details!",
  
  })

 
 
  }
  else{
    let timer = 3;
    const timerElement = document.getElementById("timer");

    setTimeout(() => {
      name.value="";
      email.value="";
      phone.value="";
      message.value="";
    }, 3000);
    function updateTimer() {
      timerElement.textContent ="wait "+timer+ "s for confirmation";
    }

    const timerInterval = setInterval(function() {
      timer--;
      updateTimer();

      if (timer === 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "sent";
      }
    }, 1000);
     let parms ={
    name : name.value,
    email : email.value,
    phone : phone.value,
    message : message.value,
  }
  emailjs.send("service_1fb29nm","template_fhplqp2",parms).then(
    ()=> Swal.fire({
  title: "Successfully sent ",
  text: "Your response submitted 😊",
  icon: "success"
}).catch(()=> Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  // footer: '<a href="#">Why do I have this issue?</a>'
})
));

}
 
}