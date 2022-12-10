const display = document.querySelector(".coffee-display");
const btns = document.querySelectorAll(".list-btn");
const coffeeImg = document.querySelector(".coffee-img");
btns.forEach(btn=>{
    btn.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        // console.log(e.target.dataset.id)
        if (id) {
            // remove selected from other buttons
            btns.forEach(function (btn) {
            btn.classList.remove("selected");
            });
            e.target.classList.add("selected");
            // hide other articles
            // articles.forEach(function (article) {
            //   article.classList.remove("selected");
            // });
            // const element = document.getElementById(id);
            // element.classList.add("selected");
        }
        switch(id){
            case 'latte':
                display.style.backgroundColor = 'white';
                break;
            case 'cappuccino':
                display.style.backgroundColor = '#FFD0D0';
                break;
            case 'mocha':
                display.style.backgroundColor = 'black';
                break;
            case 'americano':
                display.style.backgroundColor = '#B070B6';
                break;
          default:
              break;
      }
      coffeeImg.src = 'assets/cup-'+id+'.png';
    });
})
