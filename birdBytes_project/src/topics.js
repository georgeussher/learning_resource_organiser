import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getTopics(query) {
  await fakeNetwork(`getTopics:${query}`);
  let topics = await localforage.getItem("topics");
  if (!topics) topics = [];
  if (query) {
    topics = matchSorter(topics, query, { keys: ["week", "title"] });
  }
  return topics.sort(sortBy("title", "-createdAt"));
}

export async function createTopic(name) {
  // await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let topic = { id, name, createdAt: Date.now() };
  let topics = await getTopics();
  topics.unshift(topic);
  await set(topics);
  return topic;
}

export async function getTopic(id) {
  // await fakeNetwork(`topic:${id}`);
  let topics = await localforage.getItem("topics");
  let topic = topics.find(topic => topic.id === id);
  return topic ?? null;
}

export async function updateTopic(id, updates) {
  // await fakeNetwork();
  let topics = await localforage.getItem("topics");
  let topic = topics.find(topic => topic.id === id);
  if (!topic) throw new Error("No topic found for", id);
  Object.assign(topic, updates);
  await set(topics);
  return topic;
}

export async function deleteTopic(id) {
  let topics = await localforage.getItem("topics");
  let index = topics.findIndex(topic => topic.id === id);
  if (index > -1) {
    topics.splice(index, 1);
    await set(topics);
    return true;
  }
  return false;
}

function set(topics) {
  return localforage.setItem("topics", topics);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
