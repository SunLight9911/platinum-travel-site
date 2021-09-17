import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/revealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let mobileMenu = new MobileMenu();
let stickyHeader= new StickyHeader();
 new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
 new RevealOnScroll(document.querySelectorAll(".testimonials"),50);
 let modal;

 document.querySelectorAll(".open-modal").forEach(el=>
    {el.addEventListener("click",e=>{
        e.preventDefault();
        if(typeof modal=="undefined"){
            import("./modules/Modal")
            .then(x=>{
                modal = new x.default();
                setTimeout(()=>modal.openModal(),20);
            })
            .catch(()=>console.log("Файлыг дуудахад алдаа гарлаа"));
        }else{
            modal.openModal();
        }
    })})