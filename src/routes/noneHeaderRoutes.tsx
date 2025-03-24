import { Route, Routes } from "react-router-dom";
import { JSX } from "react";

import headerRoutes from "./headerRoutes.tsx";

// 라우트 타입 정의
type RouteType = {
    path: string;
    element: JSX.Element;
};

// 페이지 라우트 배열
const pageRoute: RouteType[] = [
    { path: "/login", element: LoginP },
    { path: "/signup", element: SignupP },
    { path: "/kitest", element: headerRoutes }
];

// Routes 컴포넌트
const noneHeaderRoutes: JSX.Element = (
    <Routes>
        {pageRoute.map((page, idx) => (
            <Route key={idx} path={page.path} element={page.element} />
        ))}
    </Routes>
);

export default noneHeaderRoutes;