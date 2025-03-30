import ScoreSelector from "./ScoreSelector.tsx";
import TypeUser from "../types/TypeUser.ts";

type props = {
    user : TypeUser
}

const TeamEvaluateUserInfo = ({ user } : props) => {
    return (
        <div>
            <div></div>
            <p>{user.name}</p>
            <ScoreSelector />
        </div>
    )
};

export default TeamEvaluateUserInfo