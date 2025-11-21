
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('check').addEventListener('click', function(){
  var code = document.getElementById('code').value.trim();
  var res = document.getElementById('result');
  if(!code){ res.textContent = 'Please enter code.'; res.style.color='red'; return; }
  // simple fake check
  if(code.toUpperCase().startsWith('RG-')){
    res.textContent = 'Product code looks valid. For full verification contact support.'; res.style.color='green';
  } else {
    res.textContent = 'Code not recognized. Contact support.'; res.style.color='red';
  }
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Message sent. We will contact you shortly.');
  e.target.reset();
});
