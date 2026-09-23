function isValidQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, unitPrice, isVip = false) {
  let price = quantity * unitPrice;

  if (isVip) {
    price += 10;
  }

  return Math.floor(price);
}

module.exports = {
  isValidQuantity,
  calculateTicketPrice
};