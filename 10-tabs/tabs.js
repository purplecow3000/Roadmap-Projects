const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');

btn1.addEventListener('click', () => {
  content1.classList.add('active_content');
  content2.classList.remove('active_content');
  content3.classList.remove('active_content');
  content4.classList.remove('active_content');
  btn1.classList.add('active_tab');
  btn2.classList.remove('active_tab');
  btn3.classList.remove('active_tab');
  btn4.classList.remove('active_tab');
});

btn2.addEventListener('click', () => {
  content1.classList.remove('active_content');
  content2.classList.add('active_content');
  content3.classList.remove('active_content');
  content4.classList.remove('active_content');
  btn1.classList.remove('active_tab');
  btn2.classList.add('active_tab');
  btn3.classList.remove('active_tab');
  btn4.classList.remove('active_tab');
});

btn3.addEventListener('click', () => {
  content1.classList.remove('active_content');
  content2.classList.remove('active_content');
  content3.classList.add('active_content');
  content4.classList.remove('active_content');
  btn1.classList.remove('active_tab');
  btn2.classList.remove('active_tab');
  btn3.classList.add('active_tab');
  btn4.classList.remove('active_tab');
});

btn4.addEventListener('click', () => {
  content1.classList.remove('active_content');
  content2.classList.remove('active_content');
  content3.classList.remove('active_content');
  content4.classList.add('active_content');
  btn1.classList.remove('active_tab');
  btn2.classList.remove('active_tab');
  btn3.classList.remove('active_tab');
  btn4.classList.add('active_tab');
});
