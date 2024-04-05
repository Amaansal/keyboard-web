let addOrderBtns = document.querySelectorAll(".add-order-js");
const orderstr = localStorage.getItem('order');


const onClickFunc = function(event) {
  let btn = event.target;
  if (btn.innerText === 'Add to Order'){
    btn.innerHTML = 'Added';
    const timer = setTimeout( () =>{btn.innerHTML ='Remove'}, 1000 )
  } if (btn.innerText==='Remove') {
    const timer = setTimeout( () =>{btn.innerHTML ='Add to Order'}, 1000 )
    btn.innerHTML = 'Removed';
  }
};


addOrderBtns.forEach( (btn) => {
  btn.addEventListener('click', onClickFunc)
  btn.parentElement
  
});


