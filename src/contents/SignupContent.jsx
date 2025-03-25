import { userSignup } from "../hooks/userSignup";

import Inpt from "../components/Inpt";
import Btn from "../components/Btn";

import styles from "./css/SignupContent.module.css";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignupContent = () => {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useNavigate();

    const userSignup = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/register", {
                username: id,
                password: password,
                email: email,
            }, { withCredentials: true });
            if(response.status === 200) {
                history("/");
            }
        } catch (error) {
            // 에러 발생 시 에러 메시지를 반환
            if (error.response) {
                setError(error.response.data);
            }
        }
    };

    return (
        <form className={styles.signupFormContainer}>
            <Inpt
                key={1}
                title={"아이디"}
                error={error.id}
                onchange={setId}
            />
            <Inpt
                key={2}
                title={"패스워드"}
                error={error.pw}
                onchange={setPassword}
            />
            <Inpt
                key={3}
                title={"이메일"}
                error={error.email}
                onchange={setEmail}
            />
            <div className={styles.signupBtnContainer}>
                <Btn
                    type="button"
                    mode={""}
                    text={"회원가입"}
                    onClick={userSignup}
                />
            </div>
        </form>
    );
};

export default SignupContent;