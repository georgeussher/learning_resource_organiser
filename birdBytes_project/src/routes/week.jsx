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
        <h1>{topic.week}
          {/* {topic.week || topic.title ? (
            <>
              {topic.week} 
            </>
          ) : (
            <i>No title</i>
          )}{" "}
          {/* <Favorite topic={topic} /> */}
        </h1>

        {/* {topic.url && (
          <p>
            <a
              target="_blank"
              href={`${topic.url}`}
            >
              {topic.url}
            </a>
          </p>
        )}

        // {topic.notes && <p>{topic.notes}</p>} */}

{/* Topic 1 */}
<h2>{topic.title1}</h2>
<p><a href="url">{topic.url1}</a></p>
<p>{topic.notes1}</p>

{/* Topic 2 */}
<h2>{topic.title2}</h2>
<p><a href="url">{topic.url2}</a></p>
<p>{topic.notes2}</p>

{/* Topic 3 */}
<h2>{topic.title3}</h2>
<p><a href="url">{topic.url3}</a></p>
<p>{topic.notes3}</p>

{/* Topic 4 */}
<h2>{topic.title4}</h2>
<p><a href="url">{topic.url4}</a></p>
<p>{topic.notes4}</p>

{/* Topic 5 */}
<h2>{topic.title5}</h2>
<p><a href="url">{topic.url5}</a></p>
<p>{topic.notes5}</p>

{/* Topic 6 */}
<h2>{topic.title6}</h2>
<p><a href="url">{topic.url6}</a></p>
<p>{topic.notes6}</p>

{/* Topic 7 */}
<h2>{topic.title7}</h2>
<p><a href="url">{topic.url7}</a></p>
<p>{topic.notes7}</p>

{/* Topic 8 */}
<h2>{topic.title8}</h2>
<p><a href="url">{topic.url8}</a></p>
<p>{topic.notes8}</p>

{/* Topic 9 */}
<h2>{topic.title9}</h2>
<p><a href="url">{topic.url9}</a></p>
<p>{topic.notes9}</p>

{/* Topic 10 */}
<h2>{topic.title10}</h2>
<p><a href="url">{topic.url10}</a></p>
<p>{topic.notes10}</p>

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
          </Form>
        </div>
      </div>
    </div>
  );
}
