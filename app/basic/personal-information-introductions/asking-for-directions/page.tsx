import { Navigation, HelpCircle, MapPin, Map, Building, ArrowRight, Route, Flag } from "lucide-react";
// import ModuleTopics from "@/components/modules/ModuleTopics";
import UnderDevelopment from "@/components/UnderDevelopment";

const topics = [
  { title: "Asking for Directions Politely", icon: <HelpCircle />, link: "asking-for-directions-politely" },
  { title: "Common Direction Questions", icon: <Navigation />, link: "common-direction-questions" },
  { title: "Understanding Location Instructions", icon: <MapPin />, link: "understanding-location-instructions" },
  { title: "Prepositions of Place", icon: <Map />, link: "prepositions-of-place" },
  { title: "Places Around the City", icon: <Building />, link: "places-around-the-city" },
  { title: "Giving Simple Directions", icon: <ArrowRight />, link: "giving-simple-directions" },
  { title: "Talking About Distance and Routes", icon: <Route />, link: "talking-about-distance-and-routes" },
  { title: "Quick Review & Glossary", icon: <Flag />, link: "review-and-glossary" }
];

export default function AskingForAndGivingDirectionsPage() {
  return (
    // <ModuleTopics
    //   title="Asking for and Giving Directions"
    //   basePath="/basic/personal-information-introductions/asking-for-directions"
    //   topics={topics}
    // />
    <UnderDevelopment />
  );
}
