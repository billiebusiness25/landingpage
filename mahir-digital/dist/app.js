const purchaseDialog = document.querySelector('#purchase-dialog');
document.querySelector('#purchase').addEventListener('click', () => purchaseDialog.showModal());
document.querySelectorAll('.close, .close-dialog').forEach(button => button.addEventListener('click', () => purchaseDialog.close()));
purchaseDialog.addEventListener('click', event => { const bounds = purchaseDialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) purchaseDialog.close(); });
