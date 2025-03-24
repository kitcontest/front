import { Route, Routes } from "react-router-dom";
import { JSX } from "react";

// 라우트 타입 정의
type RouteType = {
    path: string;
    element: JSX.Element;
};

// 페이지 라우트 배열
const pageRoute: RouteType[] = [
    { path: "/main", element: <RendingP /> },
    { path: "/contest", element: <CalendarP /> },
    { path: "/contest/Calendar", element: <CalendarP /> },
    { path: "/contest/list", element: <ListP /> }
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