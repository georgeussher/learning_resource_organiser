import { Outlet, NavLink, Link, useLoaderData, Form, redirect } from "react-router-dom";

import { getTopics, createTopic } from "../topics";

export async function action() {
  const topic = await createTopic();
  return redirect(`/topics/${topic.id}/edit`);
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
      <NavLink
                    to={`topics/${topic.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
        {topic.week || topic.title ? (
          <>
            {topic.week} {topic.title}
          </>
        ) : (
          <i>No Title</i>
        )}{" "}
        {topic.favorite && <span>★</span>}
      </NavLink>
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