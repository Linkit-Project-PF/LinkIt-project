export const validateEmail = (email: string) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/
  if (emailRegex.test(email)) {
    const errorMesage = true;
    return errorMesage;
  }
}