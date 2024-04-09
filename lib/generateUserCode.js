export function generateUserCode(prefix, fullName) {
  const initials = fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase(); // Extract first two uppercase letters as initials

  const dateTime = new Date()
    .toLocaleString()
    .replace(/[\/\,\:\s]/g, "")
    .replace("PM", "")
    .replace("AM", ""); // Get last 7 digits of current timestamp
  const uniqueCode = `${prefix}-${initials}-${dateTime}`;
  return uniqueCode;
}
