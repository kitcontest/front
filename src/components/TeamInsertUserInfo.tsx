import Button from "./Button.tsx";
import ScoreBar from "./ScoreBar.tsx";
import TypeUser from "../types/TypeUser.ts";

const TeamInsertUserInfo = (user: TypeUser) => {
    return (
        <div>
            <div></div>
            <p>{user.name}</p>
            <ScoreBar
                score={user.score}
                />
            <Button
                useTo={{ mode : "team-insert-userInfo", string: "추가하기"}}
                func={() => console.log("팀 참여!!")}
                />
        </div>
    );
};

export default TeamInsertUserInfo;