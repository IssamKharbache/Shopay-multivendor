const convertIsoToNormal = (isoDate) => {
  const dataObject = new Date(isoDate);
  const year = dataObject.getFullYear();
  const month = String(dataObject.getMonth() + 1).padStart(2, "0");
  const day = String(dataObject.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default convertIsoToNormal;
