const initMyForm = () => {
  function validateForm(evt) {
    evt.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value.trim();

    if (name === '') {
      alert('Пожалуйста, введите имя.');
      return false;
    }

    const phonePattern = /^\+7\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Введите корректный номер телефона в формате +7XXXXXXXXXX');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Введите корректный адрес электронной почты.');
      return false;
    }

    alert('Форма успешно отправлена');
    const form = document.getElementById('feedbackForm');
    if (form) {
      form.reset();
    }
  }

  document.getElementById('phone').addEventListener('input', (evt) => {
    let x = evt.target.value.replace(/\D/g, '');
    if (x.length > 0) {
      x = '+7' + x.substring(1, 11);
    }
    evt.target.value = x;
  });

  const submitBtn = document.querySelector('#feedbackForm button[type=\'submit\']');
  if (submitBtn) {
    submitBtn.addEventListener('click', (evt) => {
      validateForm(evt);
    });
  }
};

export {initMyForm};
