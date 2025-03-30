import { useState } from "react";

type UserData = {
    id: string;
    password: string;
    email?: string; // email이 있으면 signup 모드, 없으면 login 모드
};

export default function useUserData(): {
    userData: UserData;
    updateUserData: (key: keyof UserData, value: string) => void;
    isSignup: boolean;
} {
    const [userData, setUserData] = useState<UserData>({ id: "", password: "" });

    const updateUserData = (key: keyof UserData, value: string) => {
        setUserData(prev => ({ ...prev, [key]: value }));
    };

    const isSignup = Boolean(userData.email);

    return { userData, updateUserData, isSignup };
}