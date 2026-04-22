//component which is controlled by react state is called as controlled componenet because whatever user type firstly it is handled by react then it is given to the user


import React, { useState } from "react";

const Controlled = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    gender: "",
    skills: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          skills: [...formData.skills, value]
        });
      } else {
        setFormData({...formData,
          skills: formData.skills.filter((skill) => skill !== value)
        });
      }
    } else {
      setFormData({...formData,
        [name]: value
      });
    }
  };

  const formValidation = {
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    lengthOfPassword: formData.password.length >= 8
  }

  let results = Object.values(formValidation).filter(value => value === true)

  console.log(results);
  
  let handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData);
    
  }

  return (
    <div>
      <form onClick={handleSubmit}>
        <div>
          Username:<input type="text" name="username" onChange={handleChange}/>
        </div>

        <div>
          Password: <input type="password" name="password" onChange={handleChange}/>
        </div>

        {results.length <= 2 && <p>Your password is Weak</p>}
        {results.length === 3 && <p>Your password is Medium</p>}
        {results.length === 4 && <p>Your password is Strong</p>}

        <ul>
            <li style={{color:formValidation.uppercase ? "green" : "red"}}>It should contain atleast One Uppercase</li>
            <li style={{color:formValidation.lowercase ? "green" : "red"}}>It should contain atleast One Lowercase</li>
            <li style={{color:formValidation.number ? "green" : "red"}}>It should contain atleast One Number</li>
            <li style={{color:formValidation.lengthOfPassword ? "green" : "red"}}>It shoudl eb atleast 8 Characters</li>
            
        </ul>

        <div>
          Gender:
          Male
          <input type="radio" name="gender" value="Male" checked={"Male"} onChange={handleChange}/>
          Female
          <input type="radio" name="gender" value="Female" checked={"Female"} onChange={handleChange}/>
        </div>

        <div>
          Skills:
          HTML
          <input type="checkbox" name="skills" value="HTML" checked={"HTML"} onChange={handleChange}/>
          CSS
          <input type="checkbox" name="skills" value="CSS" checked={"CSS"} onChange={handleChange}/>
          JavaScript
          <input type="checkbox" name="skills" value="JavaScript" checked={"JavaScript"} onChange={handleChange}/>
        </div>
        <input type="submit" disabled={formData.password.length <= 4} />
      </form>

    </div>
  );
};

export default Controlled;