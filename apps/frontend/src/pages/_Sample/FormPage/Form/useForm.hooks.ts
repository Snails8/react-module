import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Target = 'name' | 'email' | 'checked'

export const useForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [checked, setChecked] = useState(false);

  const handleChangeInput = (value: string, target: Target) => {
    if (target === 'name') {
      return setName(value);
    }

    if (target === 'email') {
      return setName(email);
    }
  };

  const handleChangeChecked = (value: boolean, target: Target) => {
    if (target === 'checked') {
      return setChecked(value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fromData = {
      name: name,
      email: email,
    };

    async function post() {
      fetch('http://localhost:7001/api/v1/users/create', {
        method: 'POST',
        body: JSON.stringify(fromData),
      })
        .then((res) => {
          if (!res.ok) {
            console.log('error!');
          }
          console.log('ok!');
  
          return navigate('/from', {
            state: {
              isSave: true,
            },
            replace: false,
          });
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    post();
  };

  return {
    name,
    email,
    checked,
    handleChangeInput,
    handleChangeChecked,
    handleSubmit,
  };
};