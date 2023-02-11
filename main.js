const startCounter = (buttonAction) => {
     
     const maxOrMinBoxId = document.getElementById('max-min-box');
     const numberToShowId = document.getElementById('number-to-show');

     let numberToShow = Number(numberToShowId.textContent);

     const maximumNumber = 10;
     const minimumNumber = 0;

     const showNumber = () => {
          numberToShowId.textContent = numberToShow;
     };

     const showMaximumNumberReached = () => {
          maxOrMinBoxId.textContent = 'MAXIMUM NUMBER REACHED';
          maxOrMinBoxId.style.display = 'block';
     };

     const showMinimumNumberReached = () => {
          maxOrMinBoxId.textContent = 'MINIMUM NUMBER REACHED';
          maxOrMinBoxId.style.display = 'block';
     };

     const hideMinOrMaxReached = () => {
          maxOrMinBoxId.style.display = 'none';
     };

     const disableButton = (buttonId) => {
          document.getElementById(buttonId).style.border = '2px solid lightgray';
          document.getElementById(buttonId).style.color = 'lightgray';
          document.getElementById(buttonId).style.pointerEvents = 'none';
     };

     const enableButton = (buttonId) => {
          document.getElementById(buttonId).style.border = '2px solid black';
          document.getElementById(buttonId).style.color = 'black';
          document.getElementById(buttonId).style.pointerEvents = 'auto';
          document.getElementById(buttonId).style.cursor = 'pointer';
     };

     const incrementNumber = () => {
          if (numberToShow < maximumNumber) {
               numberToShow += 1;
               if (numberToShow < maximumNumber) {
                    showNumber();
                    hideMinOrMaxReached();
                    enableButton('decrement-button');
                    enableButton('restart-button');
               }
               if (numberToShow === maximumNumber) {
                    showNumber();
                    showMaximumNumberReached();
                    disableButton('increment-button');
               }
          }
     };

     const decrementNumber = () => {
          if (numberToShow > minimumNumber) {
               numberToShow -= 1;
               if (numberToShow > minimumNumber) {
                    showNumber();
                    hideMinOrMaxReached();
                    enableButton('increment-button');
               }
               if (numberToShow === minimumNumber) {
                    showNumber();
                    showMinimumNumberReached();
                    disableButton('decrement-button');
                    disableButton('restart-button');
               }
          }
     };

     const restartNumber = () => {
          numberToShow = 0;
          showNumber();
          hideMinOrMaxReached();
          enableButton('increment-button');
          disableButton('decrement-button');
          disableButton('restart-button');
     };

     switch (buttonAction.className) {
          case 'increment':
               incrementNumber();
               break;
          case 'decrement':
               decrementNumber();
               break;
          case 'restart':
               restartNumber();
               break;
     }
};
