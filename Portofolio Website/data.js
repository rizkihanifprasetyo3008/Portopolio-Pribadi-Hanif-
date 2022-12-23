// aos library
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,    // buat animasinya terus berjalan ketika ngescroll
    mirror: false,
    anhorPlacement: 'top-bottom'   //ketika scroll terus berhenti animasi akan berhenti.
})

// Tanda Menu

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
        })
      }



        
      