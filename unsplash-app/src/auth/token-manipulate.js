//  check tokens are existed and its expiry
export const eligibleToken = token => {
  if (token && token !== "undefined") {
    const parsedToken = parseToken(token);
    const tokenExpiry = parsedToken.exp;
    let currentTimeStamp = Math.floor(Date.now() / 1000);
    return tokenExpiry > currentTimeStamp ? true : false;
  }
  return false;
};

// parse token to get expiry
export const parseToken = token => {
  return JSON.parse(atob(token.split(".")[1]));
};
