

const validate = (email,password) => {

    email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    password  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    

  if(!email) return "Enter Valid email"
  if(!password) return "Enter Valid password"
  return null
}

export default validate