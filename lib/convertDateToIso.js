const ConvertDateToIso = (date) => {
  // Parse expiryDate string into a JavaScript Date object
  const parsedExpiryDate = new Date(date);
  const isoFormattedDate = parsedExpiryDate.toISOString();

  return isoFormattedDate;
};

export default ConvertDateToIso;
