// nike
import nikeQuest0 from "../assets/nike/nike_quest.webp";
import nikeQuestF from "../assets/nike/nike_questF.webp"
import nikeQuestB from "../assets/nike/nike_questB.webp"
import nikeForceHigh from "../assets/nike/forceFFF.webp"

import nike2 from "../assets/nike/product2.png";
import nike3 from "../assets/nike/product3.png";
import nike4 from "../assets/nike/product4.png";
import nike5 from "../assets/nike/product5.png";
import nike6 from "../assets/nike/product6.png";
import nike7 from "../assets/nike/product7.png";
import nike8 from "../assets/nike/product8.png";
import nike9 from "../assets/nike/product9.png";
import nike10 from "../assets/nike/product10.png";
import nike11 from "../assets/nike/product11.png";
import nike12 from "../assets/nike/product12.png";

// new Balance
import newBalance1 from "../assets/newBalance/new1.webp"


const nikeProduct = {
    items: [
        {
            id: "1",
            title: "Nike Quest 5",
            rating: "5+",
            btn: "Buy Now",
            img: nikeQuestB,
            price: "5760",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
            images: [
                {
                    src: nikeQuest0,
                    description: "черный",
                    sizes: {
                        38.5: 6540,
                        39: 6410,
                        40: 6440,
                        40.5: 6410,
                        41: 6680,
                        42: 6150,
                        42.5: 5760,
                        43: 6290,
                        44: 6280,
                        45: 6150,
                        46: 6680
                    }
                },
                {
                    src: nikeQuestF,
                    description: "белый",
                    sizes: {
                        38.5: 8890,
                        39: 7190,
                        40: 6670,
                        40.5: 7460,
                        41: 7580,
                        42: 7460,
                        42.5: 7460,
                        43: 7460,
                        44: 6410,
                        44.5: 6410,
                        45: 6670
                    }
                },
                {
                    src: nikeQuestB,
                    description: "синий",
                    sizes: {
                        39: 7320,
                        40: 7060,
                        40.5: 7320,
                        41: 7580,
                        42: 8230,
                        42.5: 7980,
                        43: 8100,
                        44: 5900,
                    }
                },
            ]
        },
        {
            id: "2",
            title: "Nike Air Force 1 High LE",
            rating: "5+",
            btn: "Buy Now",
            img: nikeForceHigh,
            price: "6790",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
            images: [
                {
                    src: nikeQuest0,
                    description: "черный",
                    sizes: {
                        35.5: 6790,
                        36: 6790,
                        36.5: 6440,
                        37.5: 6410,
                        38: 6680,
                        38.5: 6150,
                        39: 5760,
                        40: 6290,
                    }
                },
            ]
        },
        {
            id: "3",
            title: "Nike Addapt BB Rose",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike3,
            price: "150",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "4",
            title: "Nike Air Premium",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike4,
            price: "150",
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-lg shadow-orange-500",
        },
        {
            id: "5",
            title: "Nike Adapt BB Pro",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike5,
            price: "150",
            color: "from-gray-900 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "6",
            title: "Air Jordan PR3",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike6,
            price: "150",
            color: "from-blue-500 to-cyan-500",
            shadow: "shadow-lg shadow-cyan-500",
        },
        {
            id: "7",
            title: "Shoe",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike4,
            price: "150",
            color: "from-yellow-500 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "8",
            title: "Nike Jordan Air Max",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike9,
            price: "150",
            color: "from-[#936550] to-orange-900",
            shadow: "shadow-lg shadow-orange-800",
        },
        {
            id: "9",
            title: "Nike Old Max-x",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike10,
            price: "150",
            color: "from-indigo-700 to-indigo-700",
            shadow: "shadow-lg shadow-indigo-500",
        },
        {
            id: "10",
            title: "Nike Lime Jordan 11",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike12,
            price: "150",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "11",
            title: "Nike Air Black Max",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike11,
            price: "150",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "12",
            title: "Nike Zoom Max",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike8,
            price: "150",
            color: "from-blue-900 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
    ],
};

const newBalanceProduct = {
    items: [
        {
            id: "1",
            title: "Nike Air Low Premium",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike7,
            price: "150",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "2",
            title: "Nike Air Force Green",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike2,
            price: "150",
            color: "from-green-500 to-eme rald-500",
            shadow: "shadow-lg shadow-green-500",
        },
        {
            id: "3",
            title: "Nike Addapt BB Rose",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike3,
            price: "150",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "4",
            title: "Nike Air Premium",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike4,
            price: "150",
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-lg shadow-orange-500",
        },
        {
            id: "5",
            title: "Nike Adapt BB Pro",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike5,
            price: "150",
            color: "from-gray-900 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "6",
            title: "Air Jordan PR3",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike6,
            price: "150",
            color: "from-blue-500 to-cyan-500",
            shadow: "shadow-lg shadow-cyan-500",
        },
        {
            id: "7",
            title: "Shoe",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike5,
            price: "150",
            color: "from-yellow-500 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "8",
            title: "Nike Jordan Air Max",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike9,
            price: "150",
            color: "from-[#936550] to-orange-900",
            shadow: "shadow-lg shadow-orange-800",
        },
        {
            id: "9",
            title: "Nike Old Max-x",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike10,
            price: "150",
            color: "from-indigo-700 to-indigo-700",
            shadow: "shadow-lg shadow-indigo-500",
        },
        {
            id: "10",
            title: "Nike Lime Jordan 11",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike12,
            price: "150",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "11",
            title: "Nike Air Black Max",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike11,
            price: "150",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "12",
            title: "Nike Zoom Max",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: nike8,
            price: "150",
            color: "from-blue-900 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
    ],
};


export {nikeProduct, newBalanceProduct};
