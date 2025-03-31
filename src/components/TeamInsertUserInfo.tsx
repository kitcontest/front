import Button from "./Button.tsx";
import ScoreBar from "./ScoreBar.tsx";
import TypeUser from "../types/TypeUser.ts";

const TeamInsertUserInfo = ({ user }: { user: TypeUser }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center mb-4">
                <p className="text-lg font-semibold mb-2">{user.name}</p>
                <ScoreBar score={user.score} />
            </div>

            <div className="text-center">
                <Button
                    useTo={{ mode: "team-insert-userInfo", string: "추가하기" }}
                    func={() => console.log("팀 참여!!")}
                />
            </div>
        </div>
    );
};

export default TeamInsertUserInfo;
