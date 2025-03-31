import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo: typeUseTo;
    login: boolean;
    func: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const UserBtn = ({ useTo, login, func }: props) => {
    return login ? (
        <button
            className={`px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 ${useTo.mode}-user-options`}
            onClick={func}
        >
            {useTo.string}
        </button>
    ) : (
        <button
            className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ${useTo.mode}-user-login`}
            onClick={func}
        >
            {useTo.string}
        </button>
    );
};

export default UserBtn;
