import ContestComponent from "../components/ContestComponent.tsx";
import { useState } from "react";

interface EventType {
    title: string;
    date: string;
    recommendation: number;
    team: number;
}

const itemsPerPage = 3; // ✅ 한 페이지당 3개씩 표시
const maxPageNumbers = 5; // ✅ 페이지 번호는 5개씩 표시

const ContestTopListMain = () => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(events.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

    // ✅ 페이지 번호 계산 (현재 페이지를 기준으로 5개씩 표시)
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);
    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <section>
            <p>Hot 공모전 List</p>
            <div>
                {currentEvents.map((event, index) => (
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

            {/* ✅ 페이지네이션 버튼 */}
            <div>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    이전
                </button>

                {pageNumbers.map((num) => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        style={{
                            fontWeight: num === currentPage ? "bold" : "normal",
                            margin: "0 5px"
                        }}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    다음
                </button>
            </div>
        </section>
    );
};

export default ContestTopListMain;