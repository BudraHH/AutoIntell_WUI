const baseURL: string = 'http://127.0.0.1:8000';

interface ApiEndpoint {
    url: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
}

const api: Record<string, ApiEndpoint> = {
    signUp: {
        url: `${baseURL}/api/auth/sign-up/`,
        method: 'POST',
    },
    signIn: {
        url: `${baseURL}/api/auth/sign-in/`,
        method: 'POST',
    }
};

export default api;
