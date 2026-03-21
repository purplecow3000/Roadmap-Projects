const textarea = document.getElementById('restricted-textarea');
const charCount = document.getElementById('char-count');

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength}/100 characters`;
  if (currentLength >= 100) {
    charCount.style.color = '#f00';
  } else {
    charCount.style.color = '#555';
  }
});

