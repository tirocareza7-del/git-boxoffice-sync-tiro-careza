function isValidQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, unitPrice) {
  let price = quantity * unitPrice;

  if (quantity >= 10) {
    price *= 0.85;
  } else if (quantity >= 5) {
    price *= 0.95;
  }

  return Math.floor(price);
}

module.exports = {
  isValidQuantity,
  calculateTicketPrice
};