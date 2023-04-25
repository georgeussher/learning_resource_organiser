import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>birdBytes</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search topics"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`topics/1`}>Week</Link>
              </li>
              <li>
              <Link to={`topics/2`}>Name</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }