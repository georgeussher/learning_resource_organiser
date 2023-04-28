import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { getTopics, createTopic } from "../topics";

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
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

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
                className={searching ? "loading" : ""}
                aria-label="Search topics"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
            <button type="submit">Add New</button>
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
        <div id="header"><p id="hello">Hello</p></div>
        <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }>
          <Outlet />
        </div>
      </>
    );
  }