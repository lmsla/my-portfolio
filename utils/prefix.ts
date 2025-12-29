const repoName = "my-portfolio";

export const prefix = process.env.NODE_ENV === "production" ? `/${repoName}` : "";
