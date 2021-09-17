import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/revealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let mobileMenu = new MobileMenu();
let stickyHeader= new StickyHeader();
 new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
 new RevealOnScroll(document.querySelectorAll(".testimonials"),50);