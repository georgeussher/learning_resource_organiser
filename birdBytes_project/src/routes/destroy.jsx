import { redirect } from "react-router-dom";
import { deleteTopic } from "../topics";

export async function action({ params }) {
  await deleteTopic(params.topicId);
  return redirect("/");
}