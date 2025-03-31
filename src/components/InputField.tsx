import typeUseTo from "../types/TypeUseTo.ts";

type props = {
    useTo: typeUseTo;
    error: string;
    func: (value: string) => void;
};

const InputField = ({ useTo, error, func }: props) => {
    const styleId: string = `${useTo.mode}-${useTo.string}`;

    return (
        <div className={`${styleId}-container mb-4`}>
            <label
                className={`${styleId}-title block text-sm font-medium text-gray-700`}
            >
                {useTo.string}
            </label>
            <input
                className={`${styleId}-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                type={useTo.string === "id" ? "text" : useTo.string}
                onChange={(e) => func(e.target.value)}
            />
            {error && (
                <p className={`${styleId}-error text-red-600 text-sm mt-1`}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;
