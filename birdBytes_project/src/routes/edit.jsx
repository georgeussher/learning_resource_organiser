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
        <select
        id="dropdown"
        aria-label="Week"
        name="week"
        defaultValue={topic.week}>
  <option value="">Select a week</option>
  <option value="Week 1">Week 1</option>
  <option value="Week 2">Week 2</option>
  <option value="Week 3">Week 3</option>
  <option value="Week 4">Week 4</option>
  <option value="Week 5">Week 5</option>
  <option value="Week 6">Week 6</option>
  <option value="Week 7">Week 7</option>
  <option value="Week 8">Week 8</option>
  <option value="Week 9">Week 9</option>
  <option value="Week 10">Week 10</option>
  <option value="Week 11">Week 11</option>
  <option value="Week 12">Week 12</option>
  <option value="Week 13">Week 13</option>
  <option value="Week 14">Week 14</option>
  <option value="Week 15">Week 15</option>
  <option value="Week 16">Week 16</option>
</select>


{/* <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p> */}

        {/* Topic 1 */}
        <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title1"
          defaultValue={topic.title1}
        />
      </p>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url1"
          placeholder="https//example.com"
          defaultValue={topic.url1}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes1"
          defaultValue={topic.notes1}
          rows={6}
        />
      </label>

      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

{/* Topic 2 */}
    <label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title2"
          defaultValue={topic.title2}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url2"
          placeholder="https//example.com"
          defaultValue={topic.url2}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes2"
          defaultValue={topic.notes2}
          rows={6}
        />
      </label>

      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

{/* Topic 3 */}
      <label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title3"
          defaultValue={topic.title3}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url3"
          placeholder="https//example.com"
          defaultValue={topic.url3}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes3"
          defaultValue={topic.notes3}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

{/* Topic 4 */}
<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title4"
          defaultValue={topic.title4}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url4"
          placeholder="https//example.com"
          defaultValue={topic.url4}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes4"
          defaultValue={topic.notes4}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

{/* Topic 5 */}

<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title5"
          defaultValue={topic.title5}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url5"
          placeholder="https//example.com"
          defaultValue={topic.url5}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes5"
          defaultValue={topic.notes5}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

      {/* Topic 6 */}

<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title6"
          defaultValue={topic.title6}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url6"
          placeholder="https//example.com"
          defaultValue={topic.url6}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes6"
          defaultValue={topic.notes6}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

      {/* Topic 7 */}

<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title7"
          defaultValue={topic.title7}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url7"
          placeholder="https//example.com"
          defaultValue={topic.url7}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes7"
          defaultValue={topic.notes7}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

      {/* Topic 8 */}

<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title8"
          defaultValue={topic.title8}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url8"
          placeholder="https//example.com"
          defaultValue={topic.url8}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes8"
          defaultValue={topic.notes8}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

      {/* Topic 9 */}

<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title9"
          defaultValue={topic.title9}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url9"
          placeholder="https//example.com"
          defaultValue={topic.url9}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes9"
          defaultValue={topic.notes9}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
        onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>

      {/* Topic 10 */}

<label>
      <span>Topic</span>
        <input
          placeholder="Enter your topic..."
          aria-label="Title"
          type="text"
          name="title10"
          defaultValue={topic.title10}
        />
        </label>
      <label>
        <span>Link</span>
        <input
          type="text"
          name="url10"
          placeholder="https//example.com"
          defaultValue={topic.url10}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        placeholder="Enter your notes here..."
          name="notes10"
          defaultValue={topic.notes10}
          rows={6}
        />
      </label>
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