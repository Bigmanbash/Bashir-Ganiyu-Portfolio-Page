import Project1 from "../assets/E-commerce.png"
import Project2 from "../assets/WhatsApp.png"
import Project3 from "../assets/Education.png"

const ProjectCardData = [
    
    {
        imgsrc: Project1,
        title: "Ecommerce Website design",
        text: "This project is a fully functional ecommerce website that allows for payment. I built it with React",
        view: "https://bigmanbash.github.io/e-commerce/",
    },
    {
        imgsrc: Project2,
        title: "A clone of WhatsApp",
        text: "This project only shows the frontend of WhatsApp clone. I built a full-stack of this project using MERN.",
        view: "https://bigmanbash.github.io/WhatsApp-Replica/",
    },  
    {
        imgsrc: Project3,
        title: "An Educational Website",
        text: "This is one of the first projects I ever did in web development. The only one in my portfolio website built with only HTML and CSS. The design is still sleek.",
        view: "https://bigmanbash.github.io/clone-of-unilorin-site/",
    }
]

export default ProjectCardData;

//The code snippet allows us to update the projects dynamically
//I need to learn props and mapping, very very very important