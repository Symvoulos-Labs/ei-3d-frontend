// Mock API call
export const getProjects = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
      ]);
    }, 500);
  });
};
