interface TypeContest {
    title: string;
    dueDate: string; // 날짜를 다룰 경우 Date 타입도 고려 가능
    isLiked: boolean;
    isRecommended: boolean;
    recommendationCount: number | bigint;
    teamCount: number | bigint; // 또는 numberOfTeams
}

export default TypeContest;