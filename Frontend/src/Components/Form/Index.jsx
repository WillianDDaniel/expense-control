import { useEffect, useState } from "react"
import Loading from "../Loading/Index"

export default function Form({
    action,
    title,
    submitFunction,
    btnLabel,
    afterSubmit,
    newMessage,
    children,
}) {

    useEffect(() => {
        setMessage(newMessage)
    }, [newMessage])

    const [message, setMessage] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        const result = await submitFunction(e)

        if (result.success) {
            setMessage(result.message)
            afterSubmit(e, result)
            setLoading(false)
        } else {
            setMessage(result.message)
            setLoading(false)
        }
    }

    return (
        <form action={action} onSubmit={handleSubmit}
            className="relative flex flex-col items-center mt-5 bg-slate-200 w-5/12 rounded"
        >

            <div className="flex flex-wrap w-full h-full justify-center">
                
                <h2 className="text-2xl p-2 w-full flex justify-center">
                    {title}
                </h2>

                {children}

            </div>

            {btnLabel === 'Entrar' &&
                <div>
                    <input name="keepLogged" type="checkbox" className="mr-2" />Manter-me conectado
                </div>
            }

            <div className="h-6 mt-[-2px] mb-1 text-sm text-red-800">
                {message &&
                    message
                }
            </div>

            <div className="w-full flex justify-center px-2 pb-5">

                <button type="submit"
                    className="bg-green-600 w-10/12 py-0.5 rounded"
                >
                    {btnLabel}
                </button>

            </div>

            {btnLabel === 'Entrar' &&
                <div className="mb-5">Esqueci minha senha</div>
            }

            <Loading
                loading={loading}
                
            />

        </form>
    )
}