import ContestComponent from "../components/ContestComponent.tsx";
import { useState } from "react";

interface EventType {
    title: string;
    date: string;
    recommendation: number;
    team: number;
}

const itemsPerPage = 3; // 한 페이지당 3개씩 표시
const maxPageNumbers = 5; // 페이지 번호는 5개씩 표시

const ContestTopListMain = () => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(events.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 번호 계산 (현재 페이지를 기준으로 5개씩 표시)
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);
    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <section className="p-6">
            <p className="text-2xl font-semibold text-center mb-6">Hot 공모전 List</p>

            {/* 공모전 리스트 */}
            <div className="space-y-4">
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

            {/* 페이지네이션 버튼 */}
            <div className="flex justify-center items-center mt-6 space-x-3">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                >
                    이전
                </button>

                {pageNumbers.map((num) => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`px-4 py-2 rounded-md ${num === currentPage ? 'bg-blue-500 text-white font-semibold' : 'bg-gray-200'}`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                >
                    다음
                </button>
            </div>
        </section>
    );
};

export default ContestTopListMain;
