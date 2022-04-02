import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
/*import { DOMEN_SERVER, DOMEN_SITE } from "../../config/const";*/

export default function Register() {
  const [register, setRegister] = useState(() => {
    return {
      username: "",
      email: "",
      password: "",
      password2: ""
    };
  });

  const changeInputRegister = (event) => {
    event.persist();
    setRegister((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      };
    });
  };

  const submitCheckin = (event) => {
    event.preventDefault();
    if (!validator.isEmail(register.email)) {
      alert("E-mail введён неправильно");
    } else if (register.password !== register.password2) {
      alert("Пароли не совпадают");
    } else if (
      !validator.isStrongPassword(register.password, { minSymbols: 0 })
    ) {
      alert(
        "Пароль должен состоять не менее чем из 8 символов и содержать заглавные и строчные буквы, цифры"
      );
    } /*else {
          axios.post(DOMEN_SERVER + "/auth/registration/", {
              username: register.username,
              email: register.email,
              password: register.password,
          }).then(res => {
              if (res.data === true) {
                  window.location.href = DOMEN_SITE + "/auth"
              } else {
                  alert("There is already a user with this email")
              }
          }).catch(() => {
              alert("An error occurred on the server")
          })
      }*/
  };
}
