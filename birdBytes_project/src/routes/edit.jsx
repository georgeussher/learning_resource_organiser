import { Form, useLoaderData } from "react-router-dom";

export default function EditTopic() {
  const { topic } = useLoaderData();

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
          name="link"
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
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}