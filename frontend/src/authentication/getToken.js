export const getHeaders = () => {
    const accessToken = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
  };