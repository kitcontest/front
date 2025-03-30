import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo : typeUseTo,
    login : boolean,
    func : (event: React.MouseEvent<HTMLButtonElement>) => void
}

const UserBtn = ({ useTo, login, func } : props) => {
    return (
        login
            ? <button
                className={useTo.mode+'-user-options'}
                onClick={func}
            />
            : <button
                className={useTo.mode+'-user-login'}
                onClick={func}
            />
    )
}

export default UserBtn;