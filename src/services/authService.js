const authService = {
  login: async (email, password) => {
    try {
      const response = await fetch('https://your-api-url.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Save token and user data here
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('Login failed');
    }
  },
};

export default authService;
