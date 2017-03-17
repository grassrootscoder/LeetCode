/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var memo = new Map()
  , count = 0
var encode = function(longUrl) {
  memo.set('' + count, longUrl)
  return 'http://tinyurl.com/' + count++
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return memo.get(shortUrl.replace(/http:\/\/tinyurl\.com\/(.+)/, '$1'))
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
