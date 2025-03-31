import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { loginApi } from "../apis/authApi";  // loginApi 함수 가져오기

const LoginField = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await loginApi(username, password);
        } catch (error) {
            setError("로그인 실패");
        }
    };

    return (
        <div>
            <InputField
                useTo={{ mode: "login", string: "ID" }}
                error={error}
                func={(value) => setUsername(value)}
            />
            <InputField
                useTo={{ mode: "login", string: "password" }}
                error={error}
                func={(value) => setPassword(value)}
            />
            <Button
                useTo={{ mode: "login", string: error ? "로그인을 다시 시도해주세요." : "로그인" }}
                func={handleLogin}
            />
        </div>
    );
};

export default LoginField;
