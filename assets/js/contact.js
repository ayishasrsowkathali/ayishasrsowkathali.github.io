//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}


// window.addEventListener("DOMContentLoaded", function () {

//     // get the form elements defined in your form HTML above

//     var form = document.getElementById("contact-form");
//     //  var button = document.getElementById("submit");
//     var status = document.getElementById("status");

//     // Success and Error functions for after the form is submitted

//     function success() {
//         form.reset();
//         //  status.classList.add("alert alert-succes alert-dismissible fade show");
//         status.innerHTML = "Your message has been sent! Thanks for contacting me.";
//     }

//     function error() {
//         //  status.classList.add("alert alert-warning alert-dismissible fade show");
//         status.innerHTML = "Oops! There was a problem.";
//     }

//     // handle the form submission event

//     form.addEventListener("submit", function (ev) {
//         ev.preventDefault();
//         var data = new FormData(form);
//         ajax(form.method, form.action, data, success, error);
//     });
// });

// // helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== XMLHttpRequest.DONE) return;
//         if (xhr.status === 200) {
//             success(xhr.response, xhr.responseType);
//         } else {
//             error(xhr.status, xhr.response, xhr.responseType);
//         }
//     };
//     xhr.send(data);
// }