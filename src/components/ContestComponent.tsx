import typeContest from "../types/TypeContest.ts";
import Button from "./Button.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart, faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const ContestComponent = (contest: typeContest) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col mb-4">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">{contest.title}</p>
                    <p className="text-sm text-gray-500">{contest.dueDate}</p>
                </div>

                <div className="flex mt-2 space-x-4">
                    <FontAwesomeIcon
                        icon={contest.isRecommended ? solidHeart : regularHeart}
                        color="red"
                        size="lg"
                    />
                    <FontAwesomeIcon
                        icon={contest.isLiked ? solidStar : regularStar}
                        color="gold"
                        size="lg"
                    />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                    <p>추천: {contest.recommendationCount}</p>
                    <p>팀 수: {contest.teamCount}</p>
                </div>

                <div>
                    <Button
                        useTo={{ mode: "component-contest", string: "참여하기" }}
                        func={() => console.log("공모전 참여하기")}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContestComponent;
