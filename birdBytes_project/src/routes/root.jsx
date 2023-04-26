import { Outlet, Link, useLoaderData, Form, } from "react-router-dom";
import { getTopics, createTopic } from "../topics";

export async function action() {
  const topic = await createTopic();
  return { topic };
}

//loading data
export async function loader() {
  const topics = await getTopics();
  return { topics };
}

//this is rendering on to the page
export default function Root() {
  const { topics } = useLoaderData();

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
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {topics.length ? (

<ul>
  {topics.map((topic) => (
    <li key={topic.id}>
      <Link to={`topics/${topic.id}`}>
        {topic.name ? (
          <>
            {topic.name}
          </>
        ) : (
          <i>No week</i>
        )}{" "}
        {topic.favorite && <span>★</span>}
      </Link>
    </li>
  ))}
</ul>
) : (
<p>
  <i>No topics</i>
</p>
)}
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }