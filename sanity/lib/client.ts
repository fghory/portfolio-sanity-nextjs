import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

const client = createClient({
  apiVersion: "2023-09-22",
  dataset: "production",
  //projectId: "8afbki6y",
  projectId: "8afbki6y",
  useCdn: false,
});

export default client;
