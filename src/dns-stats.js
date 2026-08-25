const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let domain of domains) {
    const domainSplitted = domain.split('.').reverse();
    let previousSubdomain = '';
    for (let domainPart of domainSplitted) {
      const currentSubdomain = [previousSubdomain, domainPart].join('.');
      const subdomainCount = result[currentSubdomain] ?? 0;
      result[currentSubdomain] = subdomainCount + 1;
      previousSubdomain = currentSubdomain;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
