const palindrome = (str) => {
  const newStr = str.replace(/[\W_]/g, '').toLowerCase();
  const revStr = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');

  if (newStr === revStr) {
    return true;
  }
  return false;
};