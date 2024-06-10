import { Link, useRouteError, isRouteErrorResponse, useLocation } from "react-router-dom";

function NotFound() {
  const error = useRouteError()
  const location = useLocation()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirectTo = location.state?.from as string

  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    errorMessage = (error.data?.message || error.statusText) as string;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }


  return (
    <div id='error-page'>
      <h1>Something went wrong...</h1>
      <p>{errorMessage}</p>
      <Link to={redirectTo}>Go Back</Link>
    </div>
  )
}

export default NotFound