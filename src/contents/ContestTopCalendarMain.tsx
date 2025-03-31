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
    const NowMonth = new Date().getMonth() + 1;

    return (
        <section className="p-6">
            <p className="text-2xl font-semibold text-center mb-6">{NowMonth}월 공모전 목록</p>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                    <CalendarM events={events} />
                </div>

                <div className="w-full md:w-2/3">
                    <p className="text-xl font-medium mb-4">Event</p>
                    <div className="space-y-4">
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
            </div>
        </section>
    );
};

export default ContestTopCalendarMain;
