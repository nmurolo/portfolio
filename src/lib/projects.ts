export type ProjectDetail = {
	label: string;
	items: string | string[];
};

export type ProjectSidebarEntry = {
	label: string;
	items: string[];
};

type ProjectSidebarSource = {
	role?: string;
	services?: string[];
	details?: ProjectDetail[];
};

function asItems(value: string | string[] | undefined) {
	if (!value) return [];
	return Array.isArray(value) ? value.filter(Boolean) : [value];
}

export function projectSidebar(data: ProjectSidebarSource): ProjectSidebarEntry[] {
	const entries: ProjectSidebarEntry[] = [];

	if (data.role) {
		entries.push({ label: 'Role', items: [data.role] });
	}

	if (data.services?.length) {
		entries.push({ label: 'Services', items: data.services });
	}

	for (const detail of data.details ?? []) {
		const items = asItems(detail.items);
		if (detail.label && items.length) {
			entries.push({ label: detail.label, items });
		}
	}

	return entries;
}

export function projectCardTags(data: ProjectSidebarSource) {
	const sidebar = projectSidebar(data);
	const list =
		sidebar.find((entry) => entry.label.toLowerCase() !== 'role' && entry.items.length > 0) ??
		sidebar.find((entry) => entry.items.length > 0);

	return list?.items.slice(0, 2).join(' · ');
}
