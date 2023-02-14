var navMenuTag = document.querySelectorAll('.nav li a');
var interval;
 for (var i=0; i<navMenuTag.length; i++){
    navMenuTag[i].addEventListener('click',function (event){
    event.preventDefault();
    var targetSectionId = this.textContent.toLowerCase()
    var element = document.getElementById(targetSectionId);
    // console.log(element)
    interval = setInterval(scrollVertical,20,element)
    var points= parseInt(element.getAttribute('data-point'))
        scrollTo(0, points)
    })
 }
 function scrollVertical (element){
    var targetSectionCordinate = element.getBoundingClientRect()
    if (targetSectionCordinate.top <= 0){
        clearInterval(interval);
        return
    }
    window.scrollBy(0,50)
 }

      var conatcme1 = document.getElementById('aboutme')
      conatcme1.addEventListener('click',function(event){
         event.preventDefault();
         var aboutme = document.getElementById('contact')
         interval = setInterval(scrollVertical,40,aboutme)
      })

      function sendEmail() {
         var params = {
         name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value,
     };
     
     
         const serviceID = "service_f0qc1v9";
         const templateID = "template_kueokei"
         emailjs.send(serviceID,templateID,params)
         .then(
             res =>{
                document.getElementById("name").value="";
           document.getElementById("email").value="";
          document.getElementById("message").value="";
                  document.getElementById("subject").value="";
          console.log(res.status);
          alert("message send successfully");
             }
     
         )
         .catch(err=>console.log(err));
     }
      
function submit () {
   const emailBox = document.getElementById('email')
  emailBox.checkValidity() ? sendEmail() : alert('enter valid email')
}

// const project = document.querySelectorAll('.portfolio-img')
// for (var i=0;i<project.length;i++){
//    project[i].addEventListener('mouseover',function (){
//       const para = document.createElement("p");
//       const node = document.createTextNode("Know more about project");
      
      // box.innerHTML = 'div <br> 5';
// para.style.backgroundColor = "orange";
// para.classList.add("box");
// para.appendChild(node);

//       this.appendChild(para);
//    })
//    project[i].addEventListener('mouseout',function (){
//       this.removeChild(this.children[1])
//    })
// }
 
   
