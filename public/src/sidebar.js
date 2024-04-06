document.addEventListener("DOMContentLoaded", function() {

    function toggleSidebar() {
        document.querySelector(".button").classList.toggle("active");
        document.querySelector("main").classList.toggle("move-to-left");

        document.querySelectorAll(".sidebar-item").forEach(function(item) {
            item.classList.toggle("active");
        });

        document.querySelector(".shadow").classList.toggle("active");
        //document.querySelector(".pulsate").classList.toggle("active");
        console.log("Function toggleSidebar()");
    }
  
    document.querySelector(".button").addEventListener("click", function() {
        toggleSidebar();
        console.log("SideBar Toggled With Click")
    });

    //Escape key to open and close the side bar 
    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 27) {
            toggleSidebar();
            //toggleSublist();
        }

        console.log("SideBar Toggled With Escape Key")
    }); 
   
  });
  
