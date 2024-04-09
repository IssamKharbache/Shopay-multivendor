export function generateCouponCode(title, expiryDate) {
  // Convert title to uppercase
  const uppercaseTitle = title.replace(/\s/g, "").toUpperCase();

  // Format expiry date to remove slashes
  const formattedExpiryDate = expiryDate.replaceAll("-", "");

  // Concatenate title and formatted expiry date with a dash
  const couponCode = `${uppercaseTitle}-${formattedExpiryDate}`;

  return couponCode;
}
