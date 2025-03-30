import typeContest from "../types/TypeContest.ts";
import Button from "./Button.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart, faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const ContestComponent = (contest: typeContest) => {
    return (
        <div>
            <div>
                <div></div>

                <div>
                    <p>{contest.title}</p>
                    <p>{contest.dueDate}</p>
                </div>

                <div>
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

            <div>
                <div>
                    <p>{contest.recommendationCount}</p>
                    <p>{contest.teamCount}</p>
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