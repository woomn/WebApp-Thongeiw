// basket.js
// เพิ่มเลขบนตะกร้าเมื่อกดปุ่ม + ในเมนู

document.addEventListener('DOMContentLoaded', function() {
  const basketBadge = document.querySelector('.basket-badge');
  const plusButtons = document.querySelectorAll('.menu');

  let count = 0;
  basketBadge.textContent = count; // เซ็ตค่าเริ่มต้นเป็น 0

  plusButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      count++;
      basketBadge.textContent = count;
    });
  });
});
