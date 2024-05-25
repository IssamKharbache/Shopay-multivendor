export function calculatePercentageDifference(originalPrice, discountedPrice) {
  // Calculate the difference
  let difference = originalPrice - discountedPrice;

  // Calculate the proportion difference
  let proportionDifference = difference / originalPrice;

  // Convert to percentage
  let percentageDifference = proportionDifference * 100;

  // Return the result
  return percentageDifference.toFixed(0);
}
