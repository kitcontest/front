import { Route, Routes } from "react-router-dom";
import Header from "../contents/Header";
import TeamP from "../pages/TeamP";
import MainP from "../pages/MainP";
import ContestDetail from "../pages/contestDetail.tsx";

const HeaderRoutes: React.FC = () => (
    <section>
        <Header />
        <Routes>
            <Route path="/" element={<MainP />} />
            <Route path="/kitest/contest/:id" element={<ContestDetail />} />
            <Route path="/kitest/team" element={<TeamP />} />
        </Routes>
    </section>
);

export default HeaderRoutes;
