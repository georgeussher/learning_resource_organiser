import { Outlet, Link } from "react-router-dom";
import { getTopics } from "../topics";

//loading data
export async function loader() {
  const topics = await getTopics();
  return { topics };
}

//this is rendering on to the page
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
              <Link to={`topics/1`}>Week 1</Link>
              </li>
              <li>
              <Link to={`topics/2`}>Week 2</Link>
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