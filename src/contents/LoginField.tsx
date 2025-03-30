import { useState } from "react";
import useUserData from "../hooks/useUserData.ts";

import InputField from "../components/InputField.tsx";
import Button from "../components/Button.tsx";

const LoginField = () => {
    const { userData, updateUserData, isSignup } = useUserData();
    const [error, setError] = useState("");

    return (
        <div>
            <InputField
                useTo={{ mode: "login", string: "ID" }}
                error={error}
                func={value => updateUserData("id", value)}
            />
            <InputField
                useTo={{ mode: "login", string: "password" }}
                error={error}
                func={value => updateUserData("password", value)}
            />
            <Button
                useTo={{ mode: "login", string: error ? "로그인을 다시 시도해주세요." : "로그인" }}
                func={loginApi}
            />
        </div>
    );
};

export default LoginField;
