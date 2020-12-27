import { useState } from 'react';
import { RegisterProvider } from './../../actions/mainContext';
import Register1 from './Register1';
import Register2 from './Register2';

export default function Register() {
  const [registerStage, setRegisterStage] = useState<0 | 1>(0);
  return (
    <RegisterProvider>
      {registerStage ? <Register2 changePage={setRegisterStage} /> : <Register1 changePage={setRegisterStage} />}
    </RegisterProvider>
  );
}

// email: '',
// userName: '',
// password: '',
// repeatedPassword: ''