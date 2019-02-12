export default function (dom, msg, strPos, endPos) {
  if (msg.length) {
    const b = msg.match(/\#[\u4E00-\u9FA5]{1,3}\;/gi);
    if (msg.slice(-1) === ';') {
      if (b) {
        const c = b[b.length - 1];
        const regx = new RegExp(`${this.$native2ascii(c)}$`);
        strPos = strPos - c.length;
        msg = msg.replace(regx, '');
      } else {
        msg = msg.replace(/.$/, '');
        strPos = strPos - 1;
      }
    } else {
      msg = msg.replace(/.$/, '');
      strPos = strPos - 1;
    }
    setCaretPosition(dom, strPos)
    return msg + endPos
  }
}

// 设置光标位置
function setCaretPosition(elem, index){
  let val = elem.value
  let len = val.length
  // 超过文本长度直接返回
  if (len < index) return
  setTimeout(function() {
    elem.focus()
    if (elem.setSelectionRange) { // 标准浏览器
      elem.setSelectionRange(index, index)   
    } else { // IE9-
      var range = elem.createTextRange()
      range.moveStart("character", -len)
      range.moveEnd("character", -len)
      range.moveStart("character", index)
      range.moveEnd("character", 0)
      range.select()
    }
  }, 10)
}