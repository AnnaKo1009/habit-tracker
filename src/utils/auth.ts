export const getToken = (): string | null => {
    return localStorage.getItem('token');
}

export const isAuthenticated = (): boolean => {
    const token = getToken();
    if (!token) return false;

    // проверка просроченных токенов
try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expired = payload.exp * 1000 < Date.now();
    if (expired) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  } catch {
    return false;
  }
};