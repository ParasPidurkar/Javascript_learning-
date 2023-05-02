export function fetchUserData(callback) {
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
  
      callback(userData);
    }, 2000);
  }
  

  