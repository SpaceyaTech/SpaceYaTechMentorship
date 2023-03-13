module.exports = function (str) {
    /* ... */
    // 123.jpg | 3456.jpeg 
    // th.jpg | 3u4oi.jpeg
    // * zero or more times
    // + one or more times
    // ? zero or once
    
    return /\d+\.jpe?g$/.test(str)    



  }