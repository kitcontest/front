import ScoreSelector from "./ScoreSelector.tsx";
import TypeUser from "../types/TypeUser.ts";

type props = {
    user: TypeUser;
};

const TeamEvaluateUserInfo = ({ user }: props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            {/* 사용자 정보 */}
            <div className="mb-4">
                <p className="text-xl font-semibold text-gray-800">{user.name}</p>
            </div>

            {/* 점수 선택 */}
            <div className="mt-4">
                <ScoreSelector />
            </div>
        </div>
    );
};

export default TeamEvaluateUserInfo;