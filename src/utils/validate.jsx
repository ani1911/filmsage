export const validate = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) return 'Email ID is not valid';
  if (password.length < 4) {
    return 'Password is not valid';
  }

  return null;
};
