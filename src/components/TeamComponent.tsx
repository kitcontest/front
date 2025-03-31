import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import Button from "./Button.tsx";
import TypeTeam from "../types/TypeTeam.ts";

const TeamComponent = ({ title, MemberCount, isLiked }: TypeTeam) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-gray-500">{MemberCount}명</p>
            </div>
            <div className="flex justify-between items-center">
                <FontAwesomeIcon
                    icon={isLiked ? solidStar : regularStar}
                    color="gold"
                    size="lg"
                />
                <Button
                    useTo={{ mode: "component-team", string: "참여하기" }}
                    func={() => console.log("팀 추가!!")}
                />
            </div>
        </div>
    );
};

export default TeamComponent;
