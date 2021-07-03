// Detect clicks from ALL dropdown buttons
for (var i = 0; i < document.querySelectorAll(".dropbtn").length; i++) {
    document.querySelectorAll(".dropbtn")[i].addEventListener("click", function() {

      var idName = this.getAttribute("id");
      pragat(idName);
      pusher(idName);
    });
  }

  // to show the dropdown contents
  function pragat(idName) {
    var temp1 = "myDropdown" + idName[3];
    document.getElementById(temp1).classList.toggle("show");
  }

  // to push the content down
  function pusher(idName) {
    var temp2 = ".skill-row" + idName[3];
    document.querySelector(temp2).classList.toggle("pusher");
  }



// pushes down the content below drop-down
// document.querySelector(".dropbtn").addEventListener("click", function () {

//     document.getElementById("myDropdown1").classList.toggle("show");
//     document.querySelector(".skill-row1").classList.toggle("pusher");
// });








