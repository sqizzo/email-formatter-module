const emailFormatter = (email) => {
  let result = "";
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
      result = `${split[0].length === 1 ? "*" : split[0][0]}${
        split[0].length === 1 ? "" : maskstar(split[0].length)
      }@${split[1]}`;
    }
  }

  return result;
};

const maskstar = (length) => {
  let arr = "";
  for (let i = 0; i < length - 1; i++) {
    arr += "*";
  }
  return arr;
};

module.exports = emailFormatter;
