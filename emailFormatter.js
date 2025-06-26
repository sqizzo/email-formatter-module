const emailFormatter = (email) => {
  let result = "";
  // Check if the input is a string and contains an '@' symbol and a '.'
  if (typeof email !== "string") {
    result = "Bukan email";
  } else {
    if (
      !email.includes("@") ||
      !email.split("@")[1] ||
      !email.split("@")[1].split(".")[1]
    ) {
      result = "Bukan email";
    } else {
      const split = email.split("@");
      // Showing the first character, masking the middle characters, and showing the last character of the first part
      result = `${split[0][0]}
                ${maskstar(split[0].length)}
                ${split[0].length > 1 ? split[0][split[0].length - 1] : ''}@${split[1]}`;
    }
  }

  return result;
};
// Logic for masking the middle characters of the first part of the email
const maskstar = (length) => {
  if (length <= 2) {
    return '';
  }
  let arr = "";
  for (let i = 0; i < length - 2; i++) {
    arr += "*";
  }
  return arr;
};

module.exports = emailFormatter;
