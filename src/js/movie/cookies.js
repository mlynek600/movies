export default function() {
  if (!localStorage.getItem('cookie')) {
    const div = document.createElement('div');
    div.className = 'cookies';
    div.innerHTML = `<p>Zapraszamy do zapoznania się z naszą polityką cookies.</p>
                     <button id='cookie-btn'>Zgadzam się</button>`;
    document.body.appendChild(div);
    const cookieBtn = document.getElementById('cookie-btn');
    cookieBtn.addEventListener('click', () => {
      localStorage.setItem('cookie', true);
      document.querySelector('.cookies').remove();
    });
  }
}
