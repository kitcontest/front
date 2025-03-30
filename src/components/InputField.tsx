import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo : typeUseTo,
    error : string,
    func: (value: string) => void
}

const InputField = ({ useTo, error, func }: props) => {
    const styleId: string = `${useTo.mode}-${useTo.string}`;

    return (
        <div className={styleId+'-container'}>
            <p className={styleId+'-title'} >{useTo.string}</p>
            <input
                className={styleId+'-input'}
                type={useTo.string === "id" ? "text" : useTo.string }
                onChange={(e) => func(e.target.value)} />
            <p className={styleId+'-error'} >{error}</p>
        </div>
    )
}

export default InputField;