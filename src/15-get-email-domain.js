/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = 0;
  let domain = '';
  index = email.lastIndexOf('@');
  email.slice(index);
  domain = email.slice(index + 1);
  return domain;
}

module.exports = getEmailDomain;
