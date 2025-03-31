import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { signupApi } from "../apis/authApi";  // signupApi 함수 가져오기

const SignupField: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        try {
            await signupApi(username, password, email);
        } catch (error) {
            setError("회원가입 실패");
        }
    };

    return (
        <div className="signup-container">
            <InputField
                useTo={{ mode: "signup", string: "ID" }}
                error={error}
                func={(value) => setUsername(value)}
            />
            <InputField
                useTo={{ mode: "signup", string: "password" }}
                error={error}
                func={(value) => setPassword(value)}
            />
            <div className="signup-email-container">
                <InputField
                    useTo={{ mode: "signup", string: "email" }}
                    error={error}
                    func={(value) => setEmail(value)}
                />
                <Button
                    useTo={{ mode: "signup-email", string: "확인" }}
                    func={() => console.log("이메일 확인 API 호출")}
                />
            </div>
            <Button
                useTo={{ mode: "signup", string: "회원 가입" }}
                func={handleSignup}
            />
        </div>
    );
};

export default SignupField;
