import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import FormItems from "../../Components/FormItems/Index"
import Form from "../../Components/Form/Index"
import Main from "../../Components/Main/Index"
import NavItems from "../../Components/NavItems/Index"
import Navbar from "../../Components/Navbar/Index"

import { signInForm } from '../../assets/js/Utils/formContents'
import { signInFetch } from '../../assets/js/Fetch/signInFetch'
import { signInAction } from '../../assets/js/Utils/actions'

export default function SignIn() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
    
        if (!token) {
            return;
        }
    
        const tokenExpiration = new Date(Cookies.get('token_expiration'));
        if (tokenExpiration < new Date()) {

            Cookies.remove('token');
        } else {

            navigate('/dashboard');
        }
        
    }, [])

    const handleAfterSignIn = (e, result) => {
        if (result.token) {
     
            Cookies.set('token', result.token, { expires: 7, secure: true })

            navigate('/dashboard')
        }
    }

    return (
        <>
            <Navbar>
                <NavItems />
            </Navbar>

            <Main>
                <Form
                    action={signInAction}
                    title={'Fazer Login'}
                    btnLabel={'Entrar'}
                    newMessage={null}
                    submitFunction={signInFetch}
                    afterSubmit={handleAfterSignIn}
                >
                    <FormItems
                        formContent={signInForm}
                        checkPassword={null}
                    />
                </Form>
            </Main>
        </>
    )
}