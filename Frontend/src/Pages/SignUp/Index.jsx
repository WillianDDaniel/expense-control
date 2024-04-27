import { useState } from "react";

import Navbar from "../../Components/Navbar/Index";
import NavItems from "../../Components/NavItems/Index";
import Main from "../../Components/Main/Index";
import Form from "../../Components/Form/Index";
import FormItems from "../../Components/FormItems/Index";

import { signUpAction } from '../../assets/js/Utils/actions'
import { signUpFetch } from '../../assets/js/Fetch/signUpFetch'
import { signUpForm } from '../../assets/js/Utils/formContents'
import { confirmationPassword } from '../../assets/js/Utils/confirmPassword'
import ConfirmCode from "../../Components/ConfirmCode/Index";

export default function SignUp() {

    // Is set False to doesn't show the message 
    // And set the message when password confirm doesn't matches
    const [passwordMessage, setPasswordMessage] = useState(false)

    const [confirmCode, setConfirmCode] = useState(false)
    const [email, setEmail] = useState('')

    // Check if is equal password and confirmPassword
    const handleCheckPassword = (e) => {
        const checkPassEqual = confirmationPassword(e)

        // If is equal the message is set to false and not appears on the screen
        if (checkPassEqual) {
            setPasswordMessage(false)
        } else {
            setPasswordMessage('As senhas não correspondem')
        }
    }
    
    const handleAfterSignUp = (e, result) => {
        const email = e.target.email.value
        setConfirmCode(true)
        setEmail(email)
    }

    return (
        <>
            <Navbar>
                <NavItems />
            </Navbar>

            <Main>
                <button onClick={() => setConfirmCode(!confirmCode)}>toogle</button>
                {!confirmCode &&
                    <Form
                        action={signUpAction}
                        title={'Criar conta'}
                        btnLabel={'Cadastrar'}
                        submitFunction={signUpFetch}
                        newMessage={passwordMessage}
                        afterSubmit={handleAfterSignUp}
                    >
                        <FormItems
                            formContent={signUpForm}
                            checkPassword={handleCheckPassword}
                        />
                    </Form>
                }

                {confirmCode &&
                    <Form
                        action={signUpAction}
                        title={'Criar conta'}
                        btnLabel={'Enviar'}
                        submitFunction={signUpFetch}
                        newMessage={null}
                        afterSubmit={()=> {
                            
                        }}
                    >
                        <ConfirmCode
                            email={email}
                        />
                    </Form>
                }
            </Main>
        </>
    )
}