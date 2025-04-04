import { useState, useEffect } from "react";
import Logo from "../components/Logo.tsx";
import LinkText from "../components/LinkText.tsx";
import UserBtn from "../components/UserBtn.tsx";

const Header = () => {
    const [login, setLogin] = useState<boolean>(false);

    // jwt 쿠키 확인 함수
    const checkJwtCookie = () => {
        const cookies = document.cookie.split("; ");
        const jwtCookie = cookies.find(cookie => cookie.startsWith("jwt="));
        if (jwtCookie) {
            setLogin(true);  // jwt 쿠키가 있으면 로그인 상태로 설정
        } else {
            setLogin(false);  // 없으면 로그인되지 않은 상태로 설정
        }
    };

    useEffect(() => {
        checkJwtCookie();  // 컴포넌트가 마운트될 때 한 번 쿠키 확인
    }, []);

    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
            {/* Logo */}
            <Logo />

            <div className="flex space-x-6">
                {/* LinkText - Contest List */}
                <LinkText
                    useTo={{ mode: "header-nav", string: "contest list" }}
                    func={() => console.log("페이지 이동!")}
                    className="hover:text-yellow-300"
                />
                {/* LinkText - Team */}
                <LinkText
                    useTo={{ mode: "header-nav", string: "team" }}
                    func={() => console.log("페이지 이동!")}
                    className="hover:text-yellow-300"
                />

                {/* User Button */}
                <UserBtn
                    useTo={{ mode: "header-nav", string: "" }}
                    login={login}
                    func={login ? () => console.log("로그아웃 페이지 이동!") : () => console.log("로그인 페이지 이동!")}
                    className="hover:text-yellow-300"
                />
            </div>
        </nav>
    );
};

export default Header;
