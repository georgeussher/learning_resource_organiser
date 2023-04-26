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
        <span>Topic</span>
        <input
          placeholder="Week"
          aria-label="Week"
          type="text"
          name="week"
          defaultValue={topic.week}
        />
        <input
          placeholder="Title"
          aria-label="Title"
          type="text"
          name="title"
          defaultValue={topic.title}
        />
      </p>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url"
          placeholder="https//example.com"
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
      <span>Topic</span>
      <label>
        <span>Notes</span>
        <textarea
          name="notes2"
          defaultValue={topic.notes2}
          rows={6}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes3"
          defaultValue={topic.notes3}
          rows={6}
        />
      </label>
      <ul>
      </ul>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>
    </Form>
  );
}