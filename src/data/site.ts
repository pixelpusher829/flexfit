/**
 * All of the site's business content lives in this file.
 *
 * Anything marked PLACEHOLDER is sample copy and must be replaced with the
 * client's real details (contact info, prices, testimonials, stats) before launch.
 */
import type { ImageMetadata } from "astro";
import personalTrainer from "../images/personal-trainer.jpg";
import groupFitness from "../images/group-fitness.jpg";
import nutrition from "../images/nutrition.jpg";
import onlineFitness from "../images/online-fitness.jpg";
import yoga from "../images/yoga.jpg";
import sarah from "../images/sarah.jpg";
import mark from "../images/mark.jpg";
import jessica from "../images/jessica.jpg";

export const business = {
	name: "FlexFit",
	tagline: "Personal training, group classes and nutrition coaching",
	description:
		"FlexFit is a personal training and group fitness studio offering one-on-one coaching, small-group classes, nutrition counselling, yoga and online programs. Book a free intro session today.",
	// PLACEHOLDER: real contact details
	phone: "+1 (514) 235-9794",
	email: "info@flexfit.com",
	address: {
		street: "123 Main Street",
		city: "Montréal",
		region: "QC",
		postalCode: "H2X 1Y4",
		country: "CA",
	},
	hours: [
		{ days: "Monday – Friday", time: "5:30 am – 10:00 pm", schema: "Mo-Fr 05:30-22:00" },
		{ days: "Saturday", time: "7:00 am – 8:00 pm", schema: "Sa 07:00-20:00" },
		{ days: "Sunday", time: "8:00 am – 6:00 pm", schema: "Su 08:00-18:00" },
	],
	social: [
		{ label: "Instagram", icon: "instagram", href: "https://instagram.com/" },
		{ label: "Facebook", icon: "facebook", href: "https://facebook.com/" },
		{ label: "YouTube", icon: "youtube", href: "https://youtube.com/" },
	],
	/**
	 * Contact form endpoint. Any service that accepts a JSON POST works
	 * (Formspree, Basin, Getform, etc.), e.g. "https://formspree.io/f/abcdwxyz".
	 * Leave empty to fall back to opening the visitor's email app.
	 */
	formEndpoint: "",
};

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;
export const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const nav = [
	{ label: "About", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "Schedule", href: "#schedule" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Team", href: "#team" },
	{ label: "FAQ", href: "#faq" },
];

// PLACEHOLDER: replace with the client's real numbers
export const stats = [
	{ value: "1,200+", label: "Members coached" },
	{ value: "40+", label: "Classes every week" },
	{ value: "4.9★", label: "Average member rating" },
	{ value: "10 yrs", label: "Serving the community" },
];

export const values = [
	{
		icon: "target",
		title: "Coaching with a plan",
		text: "Every member starts with an assessment and leaves with a program built around their goals, schedule and history.",
	},
	{
		icon: "users",
		title: "A community, not a crowd",
		text: "Small classes, coaches who know your name, and members who cheer each other on.",
	},
	{
		icon: "shield",
		title: "Safe at every level",
		text: "Certified coaches, careful progressions and modifications so you can train hard without getting hurt.",
	},
];

export type Service = {
	id: string;
	title: string;
	summary: string;
	points: string[];
	image: ImageMetadata;
	alt: string;
};

export const services: Service[] = [
	{
		id: "personal-training",
		title: "Personal Training",
		summary: "One-on-one coaching built entirely around you: your goals, your body, your schedule.",
		points: ["Full movement & fitness assessment", "Custom program updated every 4 weeks", "Progress check-ins and form feedback"],
		image: personalTrainer,
		alt: "A trainer guiding a client through a push-up on handles",
	},
	{
		id: "group-classes",
		title: "Group Fitness Classes",
		summary: "High-energy, coach-led classes capped at 14 people so you still get real attention.",
		points: ["Strength, HIIT, conditioning and mobility", "Scalable for every fitness level", "40+ classes a week, early to late"],
		image: groupFitness,
		alt: "A group class stretching on colourful mats",
	},
	{
		id: "nutrition",
		title: "Nutrition Counselling",
		summary: "Practical, sustainable eating habits that fuel your training. No crash diets.",
		points: ["Personalized nutrition plan", "Habit coaching and grocery guidance", "Bi-weekly accountability check-ins"],
		image: nutrition,
		alt: "A bowl of salad with egg, tomato, avocado and greens",
	},
	{
		id: "online",
		title: "Online Programs",
		summary: "Expert programming and coaching you can follow from home, the hotel or the park.",
		points: ["App-delivered workouts with video demos", "Weekly coach messaging", "Train with or without equipment"],
		image: onlineFitness,
		alt: "Two women stretching at home while following a class on a tablet",
	},
	{
		id: "yoga",
		title: "Yoga & Mindfulness",
		summary: "Build flexibility, strength and calm with classes that balance out hard training.",
		points: ["Vinyasa, yin and restorative classes", "Guided breathwork and meditation", "Beginner-friendly fundamentals series"],
		image: yoga,
		alt: "A person meditating beside candles and stacked stones",
	},
];

export const steps = [
	{ title: "Book a free intro", text: "Pick a time that suits you. It takes 30 seconds and there's no commitment." },
	{ title: "Meet your coach", text: "We talk through your goals, history and schedule, then run a quick movement assessment." },
	{ title: "Get your plan", text: "You get a clear recommendation and a program that fits your life, not the other way round." },
	{ title: "Start seeing results", text: "Train with support, track your progress and adjust as you get stronger." },
];

// PLACEHOLDER: replace with the client's real timetable
export const schedule = [
	{
		day: "Monday",
		classes: [
			{ time: "6:00 am", name: "Strength Foundations", coach: "Sarah" },
			{ time: "12:15 pm", name: "Express HIIT", coach: "Mark" },
			{ time: "6:30 pm", name: "Vinyasa Flow", coach: "Jessica" },
		],
	},
	{
		day: "Tuesday",
		classes: [
			{ time: "6:00 am", name: "Conditioning", coach: "Mark" },
			{ time: "12:15 pm", name: "Mobility & Core", coach: "Jessica" },
			{ time: "6:30 pm", name: "Total Body Strength", coach: "Sarah" },
		],
	},
	{
		day: "Wednesday",
		classes: [
			{ time: "6:00 am", name: "Strength Foundations", coach: "Sarah" },
			{ time: "12:15 pm", name: "Express HIIT", coach: "Mark" },
			{ time: "7:30 pm", name: "Yin Yoga", coach: "Jessica" },
		],
	},
	{
		day: "Thursday",
		classes: [
			{ time: "6:00 am", name: "Conditioning", coach: "Mark" },
			{ time: "12:15 pm", name: "Mobility & Core", coach: "Jessica" },
			{ time: "6:30 pm", name: "Total Body Strength", coach: "Sarah" },
		],
	},
	{
		day: "Friday",
		classes: [
			{ time: "6:00 am", name: "Express HIIT", coach: "Mark" },
			{ time: "5:30 pm", name: "Friday Sweat", coach: "Sarah" },
		],
	},
	{
		day: "Saturday",
		classes: [
			{ time: "8:30 am", name: "Partner WOD", coach: "Mark" },
			{ time: "10:00 am", name: "Vinyasa Flow", coach: "Jessica" },
		],
	},
	{
		day: "Sunday",
		classes: [
			{ time: "9:30 am", name: "Restorative Yoga", coach: "Jessica" },
			{ time: "11:00 am", name: "Open Gym", coach: "Staff" },
		],
	},
];

// PLACEHOLDER: replace with the client's real prices
export const plans = [
	{
		id: "classes",
		name: "Class Pass",
		price: 69,
		period: "month",
		description: "Unlimited group classes for people who love training with a crew.",
		features: ["Unlimited group classes", "Open gym access", "Free intro assessment", "Member app & class booking"],
		featured: false,
	},
	{
		id: "hybrid",
		name: "Hybrid Coaching",
		price: 179,
		period: "month",
		description: "The best of both: unlimited classes plus a personal coach in your corner.",
		features: [
			"Everything in Class Pass",
			"2 personal training sessions / month",
			"Custom program & quarterly reassessment",
			"Nutrition starter plan",
		],
		featured: true,
	},
	{
		id: "personal",
		name: "Personal Training",
		price: 299,
		period: "month",
		description: "Fully coached, one-on-one sessions for the fastest, most focused results.",
		features: ["8 personal training sessions / month", "Full nutrition counselling", "Weekly check-ins & messaging", "Priority scheduling"],
		featured: false,
	},
];

export type TeamMember = {
	name: string;
	role: string;
	bio: string;
	credentials: string[];
	image: ImageMetadata;
	alt: string;
};

export const team: TeamMember[] = [
	{
		name: "Sarah Reynolds",
		role: "Head Coach & Personal Trainer",
		bio: "Sarah builds strength programs for everyone from first-timers to competitive lifters, with a focus on clean technique and steady progress.",
		credentials: ["NSCA-CPT", "Precision Nutrition L1"],
		image: sarah,
		alt: "Portrait of Sarah Reynolds holding a battle rope",
	},
	{
		name: "Mark Davis",
		role: "Performance & Nutrition Coach",
		bio: "Mark pairs conditioning with practical nutrition coaching, helping members get fitter while making changes that actually stick.",
		credentials: ["CSCS", "Certified Nutrition Coach"],
		image: mark,
		alt: "Mark Davis throwing a medicine ball outdoors",
	},
	{
		name: "Jessica Thompson",
		role: "Group Fitness & Yoga Lead",
		bio: "Jessica leads our yoga and mobility programs and brings infectious energy to every group class she teaches.",
		credentials: ["E-RYT 500", "ACE Group Fitness"],
		image: jessica,
		alt: "Portrait of Jessica Thompson outdoors against a blue sky",
	},
];

// PLACEHOLDER: replace with real, permission-approved member reviews
export const testimonials = [
	{
		quote: "I'd tried every app and program going. Having Sarah build a plan around my bad knee changed everything. I'm stronger at 45 than I was at 25.",
		name: "Daniel K.",
		detail: "Member since 2022",
	},
	{
		quote: "The classes are tough but nobody makes you feel out of place. It's the first gym I've actually looked forward to going to.",
		name: "Priya S.",
		detail: "Class Pass member",
	},
	{
		quote: "Mark's nutrition coaching was simple and realistic. Down 30 lbs in eight months and I never felt like I was dieting.",
		name: "Alexis M.",
		detail: "Hybrid Coaching member",
	},
];

export const faqs = [
	{
		q: "I'm a complete beginner. Is FlexFit right for me?",
		a: "Absolutely. Most of our members started with little or no training experience. Every class is scalable and your free intro session makes sure you start at the right level.",
	},
	{
		q: "What happens at the free intro session?",
		a: "You'll meet a coach for about 45 minutes to talk through your goals, go through a short movement assessment and get a recommendation for the plan that fits you best. There's no pressure to sign up.",
	},
	{
		q: "Do I need to sign a long-term contract?",
		a: "No. All memberships are month-to-month and can be paused or cancelled with 30 days' notice.",
	},
	{
		q: "Can I freeze my membership?",
		a: "Yes. You can freeze your membership for up to 3 months a year for travel, injury or life events.",
	},
	{
		q: "What should I bring to my first class?",
		a: "Comfortable workout clothes, indoor training shoes and a water bottle. We provide mats, towels and all equipment.",
	},
	{
		q: "Is there parking?",
		a: "Yes. There's free member parking behind the building, plus street parking and bike racks out front.",
	},
];

export const interests = [
	"Free intro session",
	"Personal training",
	"Group classes",
	"Nutrition counselling",
	"Online programs",
	"Yoga & mindfulness",
	"Something else",
];
