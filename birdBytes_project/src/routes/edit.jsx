import { Form, useLoaderData } from "react-router-dom";

export default function EditTopic() {
  const { topic } = useLoaderData();

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
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}