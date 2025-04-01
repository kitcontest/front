import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Contest {
    id: number;
    name: string;
    description: string;
}

const ContestDetail = () => {
    const { contestId } = useParams<{ contestId: string }>();
    const [contest, setContest] = useState<Contest | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (contestId) {
            fetchContestDetails(contestId);
        }
    }, [contestId]);

    const fetchContestDetails = async (contestId: string) => {
        try {
            // 더미 데이터 사용
            const dummyData: Contest = {
                id: parseInt(contestId), // contestId를 정수로 변환
                name: "예시 공모전",
                description: "이 공모전은 예시를 위한 더미 데이터입니다.",
            };

            // 더미 데이터를 바로 사용
            setContest(dummyData);
        } catch (error) {
            setError("에러 발생: " + error);
        }
    };

    return (
        <div>
            <h1>공모전 상세 정보</h1>
            {error && <p>{error}</p>}
            {contest ? (
                <div>
                    <h3>{contest.name}</h3>
                    <p>{contest.description}</p>
                </div>
            ) : (
                <p>공모전 정보가 없습니다.</p>
            )}
        </div>
    );
};

export default ContestDetail;
