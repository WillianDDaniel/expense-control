import { useEffect, useState } from "react"

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await submitFunction(e)
        console.log(result)
        // if(result.success) {

        //     afterSubmit(e, result)
        //     setMessage(result.message)

        // } else {
        //     setMessage(result.message)
        // }
    }

    return (
        <form action={action} onSubmit={handleSubmit}
            className="flex flex-col items-center bg-slate-500 w-5/12 rounded"
        >

            <h2 className="text-2xl p-2">
                {title}
            </h2>

            <div className="flex flex-wrap w-full justify-center">
                {children}
            </div>

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

        </form>
    )
}