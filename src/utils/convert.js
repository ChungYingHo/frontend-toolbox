function convertToHex(number) {
    let hexNumber
    number = Number(number);
    if (number <= 16) {
        hexNumber = number.toString(16).padStart(2, "0");
    } else {
        hexNumber = number.toString(16);
    }
    return hexNumber;
}

function convertToRGB(hex) {
  // 移除可能存在的#字
  hex = hex.replace(/^#/, '');

  // 檢查16位色碼是否有效
  if (/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    // 如果代碼是三位，則轉為六位
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map(function (char) {
          return char + char;
        })
        .join('');
    }

    // 將hex轉為rgb
    let updatedR = parseInt(hex.substring(0, 2), 16);
    let updatedG = parseInt(hex.substring(2, 4), 16);
    let updatedB = parseInt(hex.substring(4, 6), 16);

    return { updatedR, updatedG, updatedB }
  }else{
    return
  }
}

export {
    convertToHex,
    convertToRGB
}