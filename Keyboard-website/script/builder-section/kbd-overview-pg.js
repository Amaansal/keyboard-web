let addOrderBtns = document.querySelectorAll(".add-order-js");
const orderstr = localStorage.getItem('order');


const onClickFunc = function(event) {
  let btn = event.target;
  if (btn.innerText === 'Add to Cart'){
    btn.innerHTML = 'Added';
    const timer = setTimeout( () =>{btn.innerHTML ='Remove'}, 400);
  } if (btn.innerText==='Remove') {
    const timer = setTimeout( () =>{btn.innerHTML ='Add to Cart'}, 400);
    btn.innerHTML = 'Removed';
  }
};


addOrderBtns.forEach( (btn) => {
  btn.addEventListener('click', onClickFunc);
  
});


