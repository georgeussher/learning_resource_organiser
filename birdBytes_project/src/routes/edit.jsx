import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateTopic } from "../topics";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateTopic(params.topicId, updates);
  return redirect(`/topics/${params.topicId}`);
}


export default function EditTopic() {
  const { topic } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="topic-form">
      <p>
        <span>Week</span>
        <input
          placeholder="Week number"
          aria-label="Week number"
          type="text"
          name="week"
          defaultValue={topic.week}
        />
        <input
          placeholder="Topic"
          aria-label="Topic"
          type="text"
          name="title"
          defaultValue={topic.title}
        />
      </p>
      <label>
        <span>Link</span>
        <input
          placeholder="https://example.com"
          aria-label="link"
          type="text"
          name="url"
          defaultValue={topic.url}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={topic.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>
    </Form>
  );
}