const ScoreSelector = () => {
    return (
        <div className="flex justify-around mt-4">
            {[1, 2, 3, 4, 5].map((score) => (
                <p
                    key={score}
                    className="text-xl cursor-pointer hover:text-blue-500"
                >
                    {score}
                </p>
            ))}
        </div>
    );
};

export default ScoreSelector;
