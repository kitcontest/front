import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react"; // ✅ StrictMode 추가
import NoneHeaderRoutes from "./routes/noneHeaderRoutes.tsx";

const App = () => {
    return (
        <StrictMode> {/* ✅ StrictMode로 수정 */}
            <Router>
                <NoneHeaderRoutes />
            </Router>
        </StrictMode>
    );
};

export default App;
