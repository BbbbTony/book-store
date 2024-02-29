import { useCallback } from 'react';

export const useAlert = () => {
    const showAlert = useCallback((message: string) => {
        //유즈콜백은 윈도우 앨얼트함수가 필요할때만 다시 생성되는 의도로 사용했음
        window.alert(message);
    }, []);

    return showAlert;
};
