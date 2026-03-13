export const authApi = {
    login: async (email: string, password: string) => {
        await new Promise((resolve) => setTimeout(resolve, 400));

        return {
            access_token: 'mock-access-token',
            user: {
                id: 'mock-user-id',
                email,
            },
        };
    },

    me: async () => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        return {
            user: {
                id: 'mock-user-id',
                email: 'demo@board.lim',
            },
        };
    },
    
};


