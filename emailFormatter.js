// Formats an email address by masking the username, domain, and TLD part, showing only the first character of each, with validation
const emailFormatter = (email) => {
  // Initialize result variable
  let result = "";

  // Check if input is a string
  if (typeof email !== "string") {
    result = "Not an email"; // Not an email
  } else {
    // Validate email structure: must contain '@' and a domain with a dot
    const atIndex = email.indexOf("@");
    const domain = email.split("@")[1];
    const hasDotInDomain = domain && domain.split(".")[1];
    if (atIndex === -1 || !domain || !hasDotInDomain) {
      result = "Not an email"; // Not an email
    } else {
      // Split email into username and domain
      const [username, domainPart] = email.split("@");
      // Mask username: if length 1, show '*', else show first char + stars
      const maskedUsername = username.length === 1 ? "*" : username[0] + maskStar(username.length);
      // Mask domain: show first char, mask rest before the first dot
      const dotIndex = domainPart.indexOf(".");
      let maskedDomain = domainPart;
      if (dotIndex > 0) {
        const domainName = domainPart.slice(0, dotIndex);
        const tld = domainPart.slice(dotIndex + 1); // after the dot
        const maskedDomainName = domainName.length === 1 ? "*" : domainName[0] + maskStar(domainName.length);
        // Mask TLD: show first char, mask the rest
        let maskedTld = tld;
        if (tld.length > 0) {
          maskedTld = tld.length === 1 ? "*" : tld[0] + maskStar(tld.length);
        }
        maskedDomain = maskedDomainName + "." + maskedTld;
      }
      result = `${maskedUsername}@${maskedDomain}`;
    }
  }

  return result;
};

// Helper function to generate a string of '*' for masking
const maskStar = (length) => {
  let stars = "";
  for (let i = 0; i < length - 1; i++) {
    stars += "*";
  }
  return stars;
};

module.exports = emailFormatter;
