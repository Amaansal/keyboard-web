
const caseDisplay = document.getElementById('case-display');
const pcbDisplay = document.getElementById('pcb-display');
var selected = false;
// get elements for the pcb and case display

const kbdPCB75 = 
  `
  <div class="product-container kbd-size">
        <!-- how the container for each product should look - small view -->
        <img src="https://i.pinimg.com/736x/e0/f0/38/e0f0381c5bf383e47e6293f2531eeac6.jpg" alt="" class="product-thumbnail">
        <div class="product-info">
          <span>75% Keyboard</span>
          <span></span>
        </div>
        <div class="btn-row">
          <button> More info</button>
          <button> Add to order </button>
        </div>
      </div>



      <div class="product-container kbd-size">
        <!-- how the container for each product should look - small view -->
        <img src="https://i.pinimg.com/736x/e0/f0/38/e0f0381c5bf383e47e6293f2531eeac6.jpg" alt="" class="product-thumbnail">
        <div class="product-info">
          <span>70% Keyboard</span>
          <span></span>
        </div>
        <div class="btn-row">
          <button> More info</button>
          <button> Add to order </button>
        </div>
      </div>

      <div class="product-container kbd-size">
        <!-- how the container for each product should look - small view -->
        <img src="https://i.pinimg.com/736x/e0/f0/38/e0f0381c5bf383e47e6293f2531eeac6.jpg" alt="" class="product-thumbnail">
        <div class="product-info">
          <span>65% Keyboard</span>
          <span></span>
        </div>
        <div class="btn-row">
          <button> More info</button>
          <button> Add to order </button>
        </div>
      </div>

      <div class="product-container kbd-size">
        <!-- how the container for each product should look - small view -->
        <img src="https://i.pinimg.com/736x/e0/f0/38/e0f0381c5bf383e47e6293f2531eeac6.jpg" alt="" class="product-thumbnail">
        <div class="product-info">
          <span>TKL Keyboard</span>
          <span></span>
        </div>
        <div class="btn-row">
          <button> More info</button>
          <button> Add to order </button>
        </div>
      </div>

      <div class="product-container kbd-size">
        <!-- how the container for each product should look - small view -->
        <img src="https://i.pinimg.com/736x/e0/f0/38/e0f0381c5bf383e47e6293f2531eeac6.jpg" alt="" class="product-thumbnail">
        <div class="product-info">
          <span>100% Keyboard</span>
          <span></span>
        </div>
        <div class="btn-row">
          <button> More info</button>
          <button> Add to order</button>
        </div>
      </div>



  `;


const kbdSizeDisplayer = function (size) {
  const caseDisplay = document.getElementById('case-display');
  alert("clicked")
  if (size === 75) {
    caseDisplay.innerHTML =kbdPCB75;
  }

};


const kbdSizeList = document.querySelectorAll('.kbd-size');
// so all kbd options that select the size run the function when clicked

kbdSizeList.forEach( function(element) {
  element.addEventListener('click', function(){
    if (selected == false){
      const id = this.id;
      const size = parseInt(id.split('-')[1]);
      // all elements of the kbd size container should have id in the form: size- xx 
      // where xx = their respective size
      this.style.borderColor = 'var(--hover)';
      // set the border style to coloured if its been selected
      alert(size);
      kbdSizeDisplayer(size);
      selected = true;
    } else {

    }



  });  
});
