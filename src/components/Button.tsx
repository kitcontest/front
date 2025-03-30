import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo : typeUseTo,
    func : ( event: React.MouseEvent<HTMLButtonElement> ) => void
}
const Button = ({ useTo, func } : props) => {
    return (
        <button
            className={`${useTo.mode}-button`}
            type={"button"}
            onClick={func}
            children={useTo.string}
        />
    )
};

export default Button;