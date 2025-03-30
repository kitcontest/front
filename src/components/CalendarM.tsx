import Calendar from "react-calendar";
import TypeEvent from "../types/TypeEvent.ts";

type props = {
    events : TypeEvent[]
}

const CalendarM = ({ events } : props) => {
    return (
        <div>
            <Calendar
                tileContent={({ date }) => {
                    // 현재 날짜에 해당하는 일정 찾기
                    const event = events.find(
                        (event) => event.date === date.toISOString().split("T")[0]
                    );
                    return event ? <p style={{ fontSize: "10px", color: "red" }}>{event.title}</p> : null;
                }}
            />
        </div>
    );
}

export default CalendarM