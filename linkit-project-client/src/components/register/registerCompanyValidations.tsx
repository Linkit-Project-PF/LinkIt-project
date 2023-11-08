type Company = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

type Error = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

function validations(company: Company) {
  const errors: Error = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  if (company.name.trim() === "") {
    errors.name = "Name is required";
  }

  if (company.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(company.email)) {
    errors.email = "Email is invalid";
  }

  if (company.password.trim() === "") {
    errors.password = "Password is required";
  } else if (company.password.length < 8) {
    errors.password = "Password must be at least 6 characters";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(company.password)) {
    errors.password = "Password must contain at least one special character";
  }

  if (company.confirm_password.trim() === "") {
    errors.confirm_password = "Password confirmation is required";
  } else if (company.password !== company.confirm_password) {
    errors.confirm_password = "Password confirmation must be equal to password";
  }

  return errors;
}

export default validations;
