import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import TypeTeam from "../types/TypeTeam.ts";

import Button from "./Button.tsx";

const TeamComponent = (team : TypeTeam) => {
    return (
        <div>
            <div></div>
            <div>
                <p>{team.title}</p>
                <p>{team.MemberCount}</p>
            </div>
            <div>
                <FontAwesomeIcon
                    icon={team.isLiked ? solidStar : regularStar}
                    color="gold"
                    size="lg"
                />

                <Button
                    useTo={{ mode : "component-team", string: "참여하기" }}
                    func={() => console.log("팀 추가!!")}
                    />
            </div>
        </div>
    );
};

export default TeamComponent;