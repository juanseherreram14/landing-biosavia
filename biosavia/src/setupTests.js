// React's act() tracks updates in the jsdom test environment.
global.IS_REACT_ACT_ENVIRONMENT = true;

// jsdom does not implement the native dialog methods; browser QA verifies them.
HTMLDialogElement.prototype.showModal = function showModal() { this.setAttribute('open', ''); };
HTMLDialogElement.prototype.close = function close() {
  this.removeAttribute('open');
  this.dispatchEvent(new Event('close'));
};
