import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useUserData from "../hooks/useUserData"; // useUserData 훅 추가

const SignupField: React.FC = () => {
    const { userData, updateUserData, isSignup } = useUserData();
    const [error, setError] = useState("");

    return (
        <div className={"signup-container"}>
            <InputField
                useTo={{ mode: "signup", string: "Id" }}
                error={error}
                func={(value) => updateUserData("id", value)}
            />
            <InputField
                useTo={{ mode: "signup", string: "password" }}
                error={error}
                func={(value) => updateUserData("password", value)}
            />
            <div className={"signup-email-container"}>
                <InputField
                    useTo={{ mode: "signup", string: "email" }}
                    error={error}
                    func={(value) => updateUserData("email", value)}
                />
                <Button
                    useTo={{ mode: "signup-email", string: "확인" }}
                    func={() => console.log("이메일 확인 API 호출")}
                />
            </div>
            <Button
                useTo={{ mode: "signup", string: "회원 가입" }}
                func={() => console.log("회원가입 API 호출")}
            />
        </div>
    );
};

export default SignupField;