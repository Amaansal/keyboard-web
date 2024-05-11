
const caseDisplay = document.getElementById('case-display');
const pcbDisplay = document.getElementById('pcb-display');
var selected = false;
var selectedElem = false;
// get elements for the pcb and case display



const innerProductChanger  = function(size) {
  const caseDisplay = document.getElementById('case-display');
  const innerProdGridCase = caseDisplay.querySelectorAll('.inner-product-grid');
  const PCBDisplay = document.getElementById('pcb-display');
  const innerProdGridPCB = PCBDisplay.querySelectorAll('.inner-product-grid');

  innerProdGridPCB.forEach(function(element) {
    if (element.id.split('-')[1] == size){
      element.classList.remove("hidden");
      // if the id = the size param, then its the desired conatiner, so remove hidden class
    } else {
      element.classList.add("hidden");
    }
  });

  innerProdGridCase.forEach(function(element) {
    if (element.id.split('-')[1] == size){
      element.classList.remove("hidden");
      // if the id = the size param, then its the desired conatiner, so remove hidden class
    } else {
      element.classList.add("hidden");
    }
  });


}


const kbdSizeDisplayer = function (size) {
  const caseDisplay = document.getElementById('case-display');
  const innerProdGridCase = caseDisplay.querySelectorAll('.inner-product-grid');
  const PCBDisplay = document.getElementById('pcb-display');
  const innerProdGridPCB = PCBDisplay.querySelectorAll('.inner-product-grid');
  const switchDisplay = document.getElementById('switch-display');

  if(size ==0) {
    caseDisplay.classList.add('hidden');
    PCBDisplay.classList.add('hidden');
    switchDisplay.classList.add('hidden');


  }if (size == 75) {
    caseDisplay.classList.remove('hidden');
    switchDisplay.classList.remove('hidden');
    PCBDisplay.classList.remove('hidden');
    // remove the hidden class from the overall display
    innerProductChanger(size);


  } if(size== 60) {

    caseDisplay.classList.remove('hidden');
    switchDisplay.classList.remove('hidden');
    PCBDisplay.classList.remove('hidden');

    innerProductChanger(size);


  } if (size ==65) {
    caseDisplay.classList.remove('hidden');
    switchDisplay.classList.remove('hidden');
    PCBDisplay.classList.remove('hidden');

    innerProductChanger(size);

  } if (size == 70) {
    caseDisplay.classList.remove('hidden');
    switchDisplay.classList.remove('hidden');
    PCBDisplay.classList.remove('hidden');

    innerProductChanger(size);


  } if (size == 'TKL') {
    caseDisplay.classList.remove('hidden');
    switchDisplay.classList.remove('hidden');
    PCBDisplay.classList.remove('hidden');

    innerProductChanger(size);


  } if (size == 100) {
    caseDisplay.classList.remove('hidden');
    switchDisplay.classList.remove('hidden');
    PCBDisplay.classList.remove('hidden');

    innerProductChanger(size);

  }
};


const kbdSizeList = document.querySelectorAll('.kbd-size');
// so all kbd options that select the size run the function when clicked

kbdSizeList.forEach( function(element) {
  element.addEventListener('click', function(){    
    if (selected == false){ //handles event where no size has been selected
      
      const size = this.id.split('-')[1];
      // all elements of the kbd size container should have id in the form: size- xx 
      // where xx = their respective size
      this.style.borderColor = 'var(--hover)';
      this.style.backgroundColor = 'rgb(140,140,140)';
      // set the border style to coloured if its been selected
      kbdSizeDisplayer(size);
      selected = true;
      selectedElem = this;

    } else {
      // selected =true- something is already highlighted
      if (this == selectedElem ) {
        //handles event if the highlighted size is clicked again
        this.style.borderColor = 'white';
        this.style.backgroundColor = 'rgb(100,100,100)';
        kbdSizeDisplayer(0);
        selected = false;
        selectedElem = false;

      } else{
        // event if another size is clicked thats not the highlighted size
        selectedElem.style.borderColor = 'white';
        selectedElem.style.backgroundColor = 'rgb(100,100,100)';
        this.style.backgroundColor = 'rgb(140,140,140)';
        this.style.borderColor = 'var(--hover)';
        const size = this.id.split('-')[1];

        kbdSizeDisplayer(size);
        selected = true;
        selectedElem = this;
      }
    }
  });  
});
