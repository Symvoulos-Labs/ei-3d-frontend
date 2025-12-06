import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-gray-500 mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
