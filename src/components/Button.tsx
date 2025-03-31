import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo: typeUseTo;
    func: () => void;
};

const Button = ({ useTo, func }: props) => {
    return (
        <button
            onClick={func}
            className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ${useTo.mode}-btn-${useTo.string}`}
        >
            {useTo.string}
        </button>
    );
};

export default Button;
