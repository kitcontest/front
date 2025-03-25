import { useState } from "react";
import Inpt from "../components/Inpt";
import Btn from "../components/Btn";
import styles from "./css/Login_Content.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
    const [id, setId] = useState(""); // 아이디 상태
    const [pw, setPw] = useState(""); // 비밀번호 상태
    const [error, setError] = useState({ id: "", pw: "" }); // 각 필드별 에러 메시지 상태

    const history = useNavigate(); // 페이지 이동을 위한 hook

    // 로그인 요청 함수
    const login = async (e) => {
        e.preventDefault();

        // 초기화
        setError({ id: "", pw: "" });

        try {
            const res = await axios.post("http://localhost:5000/api/login", { username: id, password: pw }, { withCredentials: true });

            if (res.status === 200) {
                // 로그인 성공 시 서버에서 받은 JWT 토큰을 localStorage에 저장
                const token = res.data.token; // 서버에서 JWT 토큰을 반환한다고 가정
                localStorage.setItem("token", token);

                console.log("login success");
                history("/kitpay");
            }
        } catch (e) {
            console.error("로그인 에러:", e);

            // 로그인 실패 시, 각 필드에 대해 오류 메시지 설정
            if (e.response && e.response.status === 401) {
                // 아이디 또는 비밀번호 오류
                setError({
                    id: "아이디 또는 비밀번호가 잘못되었습니다.",
                    pw: "아이디 또는 비밀번호가 잘못되었습니다."
                });
            } else {
                // 다른 에러 처리
                setError({
                    id: "로그인에 실패했습니다. 다시 시도해주세요.",
                    pw: "로그인에 실패했습니다. 다시 시도해주세요."
                });
            }
        }
    };

    return (
        <form className={styles.loginFormContainer}>
            {/* 아이디 입력 */}
            <Inpt
                title={"아이디"}
                error={error.id}
                onchange={setId}
            />
            {/* 비밀번호 입력 */}
            <Inpt
                title={"패스워드"}
                error={error.pw}
                onchange={setPw}
            />
            <div className={styles.loginBtnContainer}>
                {/* 로그인 버튼 */}
                <Btn
                    type="button"
                    mode={""}
                    text={"로그인"}
                    onClick={login}
                />
                {/* 회원가입 버튼 */}
                <Btn
                    type="button"
                    mode={""}
                    text={"회원 가입"}
                    onClick={() => history("/signup")}
                />
            </div>
        </form>
    );
};

export default LoginContent;
