
export default function FormItems({ formContent, checkPassword }) {
    
    return (
        <>
            {
                formContent.map((item, i) => {
                    return (
                        <div key={i}
                            className={`flex flex-col px-2 py-1.5 text-sm
                            ${item.name === 'name' || item.name === 'lastName' ? 'w-5/12' : 'w-10/12' }`}
                        >
                            <label className="pl-1">
                                {item.label}
                            </label>

                            <input type={item.type} placeholder={item.placeHolder}
                                name={item.name}
                                onChange={item.type === 'password' ? checkPassword : null}
                                className={`border border-black rounded px-1 py-0.5`}
                            />
                        </div>
                    )
                })
            }
        </>

    )
}