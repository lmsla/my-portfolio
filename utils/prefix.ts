const repoName = "my-portfolio";

export const prefix = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

export const withPrefix = (path: string) => {
  if (!path) return path;
  if (path.startsWith("http")) return path; // Don't touch external URLs
  if (process.env.NODE_ENV === "production" && path.startsWith("/")) {
    return `${prefix}${path}`;
  }
  return path;
};