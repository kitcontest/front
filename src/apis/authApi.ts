export const loginApi = async (username: string, password: string) => {
    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username,
                password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("로그인 성공:", data);
            // 로그인 성공 시 JWT 토큰을 쿠키 또는 로컬스토리지에 저장할 수 있습니다.
            document.cookie = `jwt=${data.token}; path=/`;  // 예시로 쿠키에 저장
        } else {
            const errorData = await response.json();
            console.error("로그인 실패:", errorData);
        }
    } catch (error) {
        console.error("로그인 오류:", error);
    }
};

export const signupApi = async (username: string, password: string, email: string) => {
    try {
        const response = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username,
                password,
                email,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("회원가입 성공:", data);
            // 회원가입 성공 후 로그인 페이지로 리디렉션
        } else {
            const errorData = await response.json();
            console.error("회원가입 실패:", errorData);
        }
    } catch (error) {
        console.error("회원가입 오류:", error);
    }
};