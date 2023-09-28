import Coffee4 from '../../assets/images/Coffee4.jpg';
import Coffee8 from '../../assets/images/Coffee8.jpg';



export const community = [
    "Asturias",
    "Madrid",
    "Galicia",
];

export const city = {
    "Asturias": ["Mieres", "Oviedo", "Gijón"],
    "Madrid": ["Madrid", "Torrejón de Ardoz"],
};

export const allCafeterias = [
    {
        id: 1,
        city: "Mieres",
        title: "Cafetería Mieres Delight",
        text: "Una joya escondida en el corazón de Mieres, con los mejores granos de especialidad.",
        pics: Coffee8,
        to: "/link-to-cafe1"
    },
    {
        id: 2,
        city: "Oviedo",
        title: "Oviedo Coffee Roasters",
        text: "Rostizamos nuestros propios granos, dando un sabor único que no encontrarás en ningún otro lugar.",
        pics: Coffee4,
        to: "/link-to-cafe2"
    },
    {
        id: 3,
        city: "Gijón",
        title: "Gijón Brew Bar",
        text: "Un moderno café bar con una amplia variedad de métodos de preparación.",
        pics: Coffee4,
        to: "/link-to-cafe3"
    },
    {
        id: 4,
        city: "Madrid",
        title: "Madrid Central Café",
        text: "Ubicado en el centro de Madrid, es el lugar perfecto para una pausa de café.",
        pics: Coffee8,
        to: "/link-to-cafe4"
    },
    {
        id: 5,
        city: "Torrejón de Ardoz",
        title: "Torrejón Espresso House",
        text: "Conocido por su excelente espresso y deliciosos pastelitos.",
        pics: Coffee4,
        to: "/link-to-cafe5"
    }
];

