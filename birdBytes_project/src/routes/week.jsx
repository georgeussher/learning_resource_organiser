import { Form, useLoaderData } from "react-router-dom";
import { getTopic } from "../topics";

export async function loader({ params }) {
  const topic = await getTopic(params.topicId);
  return { topic };
}

export default function Topic() {
  const { topic } = useLoaderData();

  return (
    <div id="topic">
      <div>
        <h1>
          {topic.week || topic.title ? (
            <>
              {topic.week} {topic.title}
            </>
          ) : (
            <i>No title</i>
          )}{" "}
          {/* <Favorite topic={topic} /> */}
        </h1>

        {topic.url && (
          <p>
            <a
              target="_blank"
              href={`${topic.url}`}
            >
              {topic.url}
            </a>
          </p>
        )}

        {topic.notes && <p>{topic.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
            
            <ul>
              <li>
                {topic.notes2}
              </li>
              <li>
                {topic.notes3}
              </li>
            </ul>
            

          </Form>
        </div>
      </div>
    </div>
  );
}