import { useRouteError } from "react-router-dom";


//created out own error page
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>You broke our site shame on you</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}