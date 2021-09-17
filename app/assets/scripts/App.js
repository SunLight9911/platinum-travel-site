import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/revealOnScroll";

let mobileMenu = new MobileMenu();
 new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
 new RevealOnScroll(document.querySelectorAll(".testimonials"),50);