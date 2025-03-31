import { useState } from "react";
import TeamComponent from "../components/TeamComponent.tsx";  // 팀 리스트 컴포넌트

interface TeamType {
    title: string;
    MemberCount: number;
    isLiked: boolean;
}

interface ContestPageProps {
    title: string;
    dueDate: string;
    imageUrl: string;
    teams: TeamType[];
}

const itemsPerPage = 5; // 한 페이지에 5개의 팀 표시
const maxPageNumbers = 5; // 페이지 번호 최대 5개씩 표시

const ContestPage = ({ title, dueDate, imageUrl, teams }: ContestPageProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(teams.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTeams = teams.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 번호 계산
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);
    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <section className="py-10">
            {/* 상단 영역 */}
            <header className="text-center mb-6">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-lg mt-2">기간: {dueDate}</p>
            </header>

            {/* 중간 이미지 영역 */}
            <div className="flex justify-center mb-6">
                <img src={imageUrl} alt="Contest" className="w-full max-w-2xl rounded-lg shadow-lg" />
            </div>

            {/* 하단 팀 리스트 및 페이지네이션 영역 */}
            <div>
                <h2 className="text-2xl font-semibold text-center mb-4">참여 팀 목록</h2>
                <div className="space-y-4">
                    {currentTeams.map((team, index) => (
                        <TeamComponent
                            key={index}
                            title={team.title}
                            MemberCount={team.MemberCount}
                            isLiked={team.isLiked}
                        />
                    ))}
                </div>

                {/* 페이지네이션 버튼 */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                    >
                        이전
                    </button>

                    {pageNumbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`px-4 py-2 mx-2 rounded-md ${num === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                        >
                            {num}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                    >
                        다음
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContestPage;