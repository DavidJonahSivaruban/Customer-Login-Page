function toggleAuth() {
  const confirmPasswordContainer = document.getElementById(
    'confirm-password-container'
  );
  const loginButton = document.getElementById('login-button');
  const clickToggle = document.getElementById('click-toggle');
  const mainTitle = document.getElementById('main-title');

  if (confirmPasswordContainer.style.display === 'none') {
    confirmPasswordContainer.style.display = 'block';
    loginButton.textContent = 'Sign Up';
    clickToggle.textContent = ' Login';
    mainTitle.textContent = 'Create Your Account';
  } else {
    confirmPasswordContainer.style.display = 'none';
    loginButton.textContent = 'Login';
    clickToggle.textContent = ' Sign Up';
    mainTitle.textContent = 'Design Meets Experience...';
  }
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document
    .getElementById('confirm-password')
    .value.trim();

  const isSignUpMode =
    document.getElementById('confirm-password-container').style.display !==
    'none';

  if (isSignUpMode) {
    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Sign-Up successful!');
  } else {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    alert('Login successful!');
  }
}
