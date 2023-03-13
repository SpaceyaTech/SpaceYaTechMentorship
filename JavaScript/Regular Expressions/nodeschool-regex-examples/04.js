module.exports = function (str) {
    /* return whether str starts with a vowel or a digit */
    return /^[aeiou\d]/.test(str)
  }