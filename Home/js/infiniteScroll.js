// scroll infinito
const ul = document.querySelector("#ul");
ul.addEventListener('scroll', function() {
  
    if ((ul.scrollTop + ul.clientHeight) >= ul.scrollHeight) {
        if(ul.scrollTop != 0){
            carregaTodos();
        }
        else{
            return;
        }
    }
  });