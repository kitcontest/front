type props = {
    score : number
}

const ScoreBar = ({ score } : props) => {
    return (
        <div className="w-full bg-gray-300 rounded-full h-5 relative">
            <div
                className="bg-red-500 h-5 rounded-full transition-all duration-300"
                style={{ width: `${(score / 100) * 100}%` }}
            ></div>
            <span className="absolute right-2 top-0 text-white font-bold text-sm">{score}점</span>
        </div>
    );
};

export default ScoreBar;