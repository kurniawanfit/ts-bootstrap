const jwt = require('jsonwebtoken');

function getSecret () {
  return Buffer.from(process.env.JWT_SECRET, 'base64').toString();
}

export function token (userParam: any): any {
  var encodedToken = jwt.sign({ data: userParam }, getSecret(), { expiresIn: '23h' });
  return encodedToken;
}

export function verifyToken (token) {
  var userLogin = null;
  try {
    var decodedToken = jwt.verify(token, getSecret());
    userLogin = decodedToken.data;
    return userLogin;
  } catch (e) {
    console.log('verifyToken', e.message);
    return 'error';
  }
}

export function verifyTokenAccess (token) {
  var userLogin = null;
  var result = {};
  try {
    var decodedToken = jwt.verify(token, getSecret());
    userLogin = Buffer.from(decodedToken.data, 'base64').toString('ascii');
    result = { userLogin };
    return result;
  } catch (e) {
    console.log('verifyTokenAccess', e.message);
    return 'error';
  }
}
