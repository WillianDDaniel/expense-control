export const signUpForm = [
    {
        label: 'Nome',
        name: 'name',
        type: 'text',
        placeHolder: 'Digite seu nome',
    },
    {
        label: 'Sobrenome',
        name: 'lastName',
        type: 'text',
        placeHolder: 'Digite seu sobrenome',
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeHolder: 'Digite seu email',
        autoComplete: 'username',
    },
    {
        label: 'Senha',
        name: 'password',
        type: 'password',
        placeHolder: 'Digite sua senha',
        autoComplete: 'new-password'
    },
    {
        label: 'Confirme a senha',
        name: 'confirmPassword',
        type: 'password',
        placeHolder: 'Confirme sua senha',
        autoComplete: 'new-password',
    }
]

export const signInForm  = [
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeHolder: 'Digite seu email',
        autoComplete: 'username',
    },
    {
        label: 'Senha',
        name: 'password',
        type: 'password',
        placeHolder: 'Digite sua senha',
        autoComplete: 'current-password',
    }
]