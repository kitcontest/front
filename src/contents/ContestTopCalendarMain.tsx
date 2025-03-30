import CalendarM from "../components/CalendarM.tsx";
import ContestComponent from "../components/ContestComponent.tsx";
import { useState } from "react";

interface EventType {
    title: string;
    date: string;
    recommendation: number;
    team: number;
}

const ContestTopCalendarMain = () => {
    const [events, setEvents] = useState<EventType[]>([]);
    const NowMonth = new Date().getMonth() + 1

    return (
        <section>
            <p>{NowMonth}월 공모전 목록</p>
            <div>
                <CalendarM events={events} />
                <div>
                    <p>Event</p>
                    {events.map((event, index) => (
                        <ContestComponent
                            key={index}
                            title={event.title}
                            dueDate={event.date}
                            isLiked={true}
                            isRecommended={true}
                            recommendationCount={event.recommendation}
                            teamCount={event.team}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContestTopCalendarMain;
