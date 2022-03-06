import { darkTheme } from "themes/dark-theme";
import { Theme } from "themes/theme.interface";
import { hex } from "utils/color3";

const accent = hex("#9029F6");
const accentSequence = new ColorSequence(hex("#9029F6"));

export const obsidian: Theme = {
	...darkTheme,

	name: "Obsidian",

	preview: {
		foreground: {
			color: new ColorSequence(hex("#ffffff")),
		},
		background: {
			color: new ColorSequence(hex("#000000")),
		},
		accent: {
			color: accentSequence,
		},
	},

	navbar: {
		...darkTheme.navbar,
		acrylic: true,
		outlined: false,
		foreground: hex("#ffffff"),
		background: hex("#000000"),
		dropshadow: hex("#000000"),
		transparency: 0.7,
		accentGradient: {
			color: accentSequence,
			transparency: new NumberSequence(0.5),
		},
	},

	clock: {
		...darkTheme.clock,
		acrylic: true,
		outlined: false,
		foreground: hex("#ffffff"),
		background: hex("#000000"),
		dropshadow: hex("#000000"),
		transparency: 0.7,
	},

	home: {
		title: {
			...darkTheme.home.title,
			acrylic: true,
			outlined: false,
			foreground: hex("#ffffff"),
			background: hex("#000000"),
			dropshadow: hex("#000000"),
			transparency: 0.7,
			dropshadowTransparency: 0.65,
		},
		profile: {
			...darkTheme.home.profile,
			acrylic: true,
			outlined: false,
			foreground: hex("#ffffff"),
			background: hex("#000000"),
			dropshadow: hex("#000000"),
			transparency: 0.7,
			dropshadowTransparency: 0.65,
			avatar: {
				...darkTheme.home.profile.avatar,
				background: hex("#000000"),
				transparency: 0.7,
				gradient: {
					color: accentSequence,
				},
			},
			highlight: {
				flight: accent,
				walkSpeed: accent,
				jumpHeight: accent,
				refresh: accent,
				ghost: accent,
				godmode: accent,
				freecam: accent,
			},
			slider: {
				...darkTheme.home.profile.slider,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				backgroundTransparency: 0.5,
				indicatorTransparency: 0.5,
			},
			button: {
				...darkTheme.home.profile.button,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				backgroundTransparency: 0.5,
			},
		},
		server: {
			...darkTheme.home.server,
			acrylic: true,
			outlined: false,
			foreground: hex("#ffffff"),
			background: hex("#000000"),
			dropshadow: hex("#000000"),
			transparency: 0.7,
			dropshadowTransparency: 0.65,
			rejoinButton: {
				...darkTheme.home.server.rejoinButton,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				backgroundTransparency: 0.5,
				foregroundTransparency: 0.5,
				accent,
			},
			switchButton: {
				...darkTheme.home.server.switchButton,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				backgroundTransparency: 0.5,
				foregroundTransparency: 0.5,
				accent,
			},
		},
		friendActivity: {
			...darkTheme.home.friendActivity,
			acrylic: true,
			outlined: false,
			foreground: hex("#ffffff"),
			background: hex("#000000"),
			dropshadow: hex("#000000"),
			transparency: 0.7,
			dropshadowTransparency: 0.65,
			friendButton: {
				...darkTheme.home.friendActivity.friendButton,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				dropshadow: hex("#000000"),
				backgroundTransparency: 0.7,
			},
		},
	},
	apps: {
		players: {
			...darkTheme.apps.players,
			acrylic: true,
			outlined: false,
			foreground: hex("#ffffff"),
			background: hex("#000000"),
			dropshadow: hex("#000000"),
			transparency: 0.7,
			dropshadowTransparency: 0.65,
			highlight: {
				teleport: accent,
				hide: accent,
				kill: accent,
				spectate: accent,
			},
			avatar: {
				...darkTheme.apps.players.avatar,
				background: hex("#000000"),
				transparency: 0.7,
				gradient: {
					color: accentSequence,
				},
			},
			button: {
				...darkTheme.apps.players.button,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				backgroundTransparency: 0.5,
			},
			playerButton: {
				...darkTheme.apps.players.playerButton,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				accent,
				backgroundTransparency: 0.5,
				dropshadowTransparency: 0.7,
			},
		},
	},
	options: {
		themes: {
			...darkTheme.options.themes,
			acrylic: true,
			outlined: false,
			foreground: hex("#ffffff"),
			background: hex("#000000"),
			dropshadow: hex("#000000"),
			transparency: 0.7,
			dropshadowTransparency: 0.65,
			themeButton: {
				...darkTheme.options.themes.themeButton,
				outlined: false,
				foreground: hex("#ffffff"),
				background: hex("#000000"),
				accent,
				backgroundTransparency: 0.5,
				dropshadowTransparency: 0.7,
			},
		},
	},
};
