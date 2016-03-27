module.exports = {
  exec: function (p, t) {
    var reg = new RegExp(p)
    var match = reg.exec(t)
    if (!match || !match[0]) {
      return false
    }
    return match[0]
  }
}
