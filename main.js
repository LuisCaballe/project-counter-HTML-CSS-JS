const startCounter = (buttonAction) => {
  const maxOrMinBoxSelector = document.querySelector('.max-min-box');
  const numberToShowSelector = document.querySelector('.number-to-show');

  let numberToShow = Number(numberToShowSelector.textContent);

  const maximumNumber = 10;
  const minimumNumber = 0;

  const showNumber = () => {
    numberToShowSelector.textContent = numberToShow;
  };

  const showMaximumNumberReached = () => {
    maxOrMinBoxSelector.textContent = 'MAXIMUM NUMBER REACHED';
    maxOrMinBoxSelector.removeAttribute('hidden');
  };

  const showMinimumNumberReached = () => {
    maxOrMinBoxSelector.textContent = 'MINIMUM NUMBER REACHED';
    maxOrMinBoxSelector.removeAttribute('hidden');
  };

  const hideMinOrMaxReached = () => {
    maxOrMinBoxSelector.setAttribute('hidden', '');
  };

  const disableButton = (buttonClassName) => {
    document.querySelector(buttonClassName).setAttribute('disabled', '');
  };

  const enableButton = (buttonClassName) => {
    document.querySelector(buttonClassName).removeAttribute('disabled');
  };

  const incrementNumber = () => {
    if (numberToShow < maximumNumber) {
      numberToShow += 1;
      if (numberToShow < maximumNumber) {
        showNumber();
        hideMinOrMaxReached();
        enableButton('.decrement');
        enableButton('.restart');
      }
      if (numberToShow === maximumNumber) {
        showNumber();
        showMaximumNumberReached();
        disableButton('.increment');
      }
    }
  };

  const decrementNumber = () => {
    if (numberToShow > minimumNumber) {
      numberToShow -= 1;
      if (numberToShow > minimumNumber) {
        showNumber();
        hideMinOrMaxReached();
        enableButton('.increment');
      }
      if (numberToShow === minimumNumber) {
        showNumber();
        showMinimumNumberReached();
        disableButton('.decrement');
        disableButton('.restart');
      }
    }
  };

  const restartNumber = () => {
    numberToShow = 0;
    showNumber();
    hideMinOrMaxReached();
    enableButton('.increment');
    disableButton('.decrement');
    disableButton('.restart');
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
