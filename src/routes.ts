import {
    type RouteConfig,
    route,
} from "@react-router/dev/routes";

export default [
    route("/home", "./app/pages/Homepage/Homepage.tsx", { id: "home" }), // Index route for home
    route("/projects", "./app/pages/Projects/Projects.tsx", { id: "projects" }),
    route("/career", "./app/pages/Career/Career.tsx", { id: "career" }, [
        // route("/history", "./app/pages/Career/History/CareerHistory.tsx", { id: "career-history" }),
        // route("/technologies", "./app/pages/Career/Technology/CareerTechnology.tsx", { id: "career-technologies" }),
    ]),
    route("/contact", "./app/pages/Contact/Contact.tsx", { id: "contact" }),
    route("*?", "./app/pages/Catchall/Catchall.tsx", { id: "catch-all" }), // Catch-all route
] satisfies RouteConfig;