import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation } from "react-router-dom";
import { getTopics, createTopic } from "../topics";
import { useEffect } from "react";

export async function action() {
  const topic = await createTopic();
  return redirect(`/topics/${topic.id}/edit`);
}

//loading data
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const topics = await getTopics(q);
  return { topics, q };
}

//this is rendering on to the page
export default function Root() {
  const { topics, q } = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

    return (
      <>
        <div id="sidebar">
          <h1>birdBytes</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search topics"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
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
            </Form>
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
        {topic.week ? (
          <>
            {topic.week} {topic.title}
          </>
        ) : (
          <i>No week</i>
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
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }>
          <Outlet />
        </div>
      </>
    );
  }