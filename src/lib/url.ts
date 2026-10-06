/** Prefix a site-relative path with the configured `base` (e.g. "/flexfit"). */
export function withBase(path = "/"): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	return `${base}/${path.replace(/^\//, "")}`;
}
