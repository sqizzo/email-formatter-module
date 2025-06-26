const emailFormatter = (email) => {
  if (typeof email !== "string") {
    console.log("Bukan string!");
  } else {
    if (
      !email.includes("@") ||
      !email.split("@")[1] ||
      !email.split("@")[1].split(".")[1]
    ) {
      console.log("Bukan email!");
    } else {
      const split = email.split("@");
      console.log(
        `${split[0].length === 1 ? "*" : split[0][0]}${
          split[0].length === 1 ? "" : star(split[0].length)
        }@${split[1]}`
      );
    }
  }
};

const star = (length) => {
  let arr = "";
  for (let i = 0; i < length - 1; i++) {
    arr += "*";
  }
  return arr;
};

module.exports = emailFormatter;
