import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo: typeUseTo;
    func: (event: React.MouseEvent<HTMLParagraphElement>) => void;
};

const LinkText = ({ useTo, func }: props) => {
    return (
        <p
            className={`${useTo.mode}-clickable-${useTo.string} cursor-pointer hover:text-blue-500`}
            onClick={func}
        >
            {useTo.string}
        </p>
    );
};

export default LinkText;
