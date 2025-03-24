import { Route, Routes } from "react-router-dom";
import { JSX } from "react";

import Header from "../contents/Header.tsx";

import TeamP from "../pages/TeamP.tsx";
import ContestCalendarP from "../pages/ContestCalendarP.tsx";
import ContestListP from "../pages/ContestListP.tsx";
import MainP from "../pages/MainP.tsx";

// 라우트 타입 정의
type RouteType = {
    path: string;
    element: JSX.Element;
};

// 페이지 라우트 배열
const pageRoute: RouteType[] = [
    { path: "/main", element: MainP },
    { path: "/contest", element: ContestCalendarP },
    { path: "/contest/calendar", element: ContestCalendarP },
    { path: "/contest/list", element: ContestListP },
    { path: "/team", element: TeamP }
];

// Routes 컴포넌트
const headerRoutes: JSX.Element = (
    <section>
        <Header />
        <Routes>
            {pageRoute.map((page, idx) => (
                <Route key={idx} path={page.path} element={page.element} />
            ))}
        </Routes>
    </section>
);

export default headerRoutes;