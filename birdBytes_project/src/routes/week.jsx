import { Form, useLoaderData } from "react-router-dom";
import { getTopic } from "../topics";

export async function loader({ params }) {
  const topic = await getTopic(params.topicId);
  return { topic };
}

export default function Topic() {
  const { topic } = useLoaderData();
  // const topic = {
  //   week: "week",
  //   title: "title",
  //   URL: "url",
  //   notes: "notes",
  //   favorite: true,
  // };

  return (
    <div id="topic">
      <div>
        <h1>
          <p>hello</p>
          {topic.week || topic.title ? (
            <>
              {topic.week} {topic.title}
            </>
          ) : (
            <i>No title</i>
          )}{" "}
          {/* <Favorite topic={topic} /> */}
        </h1>

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
          </Form>
        </div>
      </div>
    </div>
  );
}

// function Favorite({ topic }) {
//   // yes, this is a `let` for later
//   let favorite = topic.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={
//           favorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }
