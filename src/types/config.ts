import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang: string;

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	favicon: Favicon[];
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string[]; // 从 string 改为 string[]
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};
export type Comment = {
	defaultProvider: string
	providers: {
		giscus: {
			repo: string
			repoId: string
			category: string
			categoryId: string
			mapping: string
			reactionsEnabled: string
			theme: string
			darkTheme: string
		},
		waline: {
			serverURL: string
			cssUrl: string
			locale: {
				placeholder: string
			},
			commentCount: boolean
			pageview: boolean
			lang: string
			search: boolean
			reaction: boolean
			imageUploader: boolean // 禁止文件上传
			turnstileKey: string
			emoji: string[],
			requiredMeta: string[],
		},
		utterances: {
			repo: string;
			issueTerm: string;
			label?: string;
			theme: string;
		}
	}
};
