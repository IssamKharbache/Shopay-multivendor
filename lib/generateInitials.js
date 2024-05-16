export default function generateInitials(name) {
  // Split the name into words
  let words = name.split(" ");
  // Initialize a variable to store the initials
  let initials = "";

  // Loop through each word
  for (let i = 0; i < words.length; i++) {
    // Get the first character of each word and convert it to uppercase
    initials += words[i].charAt(0).toUpperCase();
    if (initials.length >= 2) {
      break;
    }
  }

  // Return the initials
  return initials;
}
