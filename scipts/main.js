let modal = document.getElementById("myModal")

let buttons = document.querySelectorAll("button")

let span = document.getElementsByClassName("close")[0];
let modals = document.querySelectorAll(".js_modal");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
       // let modal = document.querySelectorAll(".js_modal");
        let currentModal = document.querySelector(`.js_modal${this.dataset.modal}`);
        currentModal.style.display = "block"

    })
})

const closes = document.querySelectorAll(".close")
console.log("closes", closes)

closes.forEach(function(close) {
    close.addEventListener("click", function() {
        // console.log("close!!")
        console.log(this.closest(".modal"))
        this.closest(".modal").style.display = "none"
    })
})

  window.addEventListener("click", function(event) {
      if(event.target.classList.contains("modal")) {
        modals.forEach(function(modal) {
            modal.style.display = "none"
        })
      }
    // if (event.target == modal) {
    //     modals.forEach(function(modal) {
    //         modal.style.display = "none"
    //     })
    // }
  });
// console.log("button", button)
// button.addEventListener("click" , function() {
//     modal.style.display = "block";
//   });

//   span.addEventListener("click", function() {
//     modal.style.display = "none";
//   });

//   window.addEventListener("click", function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   });

  