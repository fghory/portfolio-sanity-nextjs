import { groq } from "next-sanity";
import client from "./client";

export async function getProfile() {
  return client.fetch(
    `*[_type == "profile" && _id == '614497ed-9d0d-4ad9-bd91-124ff7b596a6']{
        _id,
        fullName,
        headline,
        profileimage {alt, "image": asset->url},
        shortbio,
        location,
        fullbio,
        email,
        "resumeURL": resumeURL.asset->url,
        sociallinks,
        skills
      }`
  );
}

export async function getJob() {
  return client.fetch(
    `*[_type == 'job']{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}
