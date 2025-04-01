export const loginApi = async (username, password) => {
    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("로그인 성공:", data);
            document.cookie = `jwt=${data.token}; path=/`; // JWT 토큰 쿠키 저장
            return data;
        } else {
            const errorData = await response.json();
            console.error("로그인 실패:", errorData);
            throw new Error(errorData.message || "로그인 실패");
        }
    } catch (error) {
        console.error("로그인 오류:", error);
        throw error;
    }
};

export const signupApi = async (username, password, email) => {
    try {
        const response = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, email }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("회원가입 성공:", data);
            return data;
        } else {
            const errorData = await response.json();
            console.error("회원가입 실패:", errorData);
            throw new Error(errorData.message || "회원가입 실패");
        }
    } catch (error) {
        console.error("회원가입 오류:", error);
        throw error;
    }
};
