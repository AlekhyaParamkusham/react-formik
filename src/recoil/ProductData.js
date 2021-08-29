import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      name: "BBQ Chicken Pizza",
      picture: "/Images/Pizzas/BBQ Chicken Skillet Pizza.jpg",
      price: 480,
      type: "pizzas",
      id: 1,
    },
    {
      name: "Chicken Sandwiches",
      picture: "/Images/Sandwiches/BBQ Pulled Chicken Sandwiches.jpg",
      price: 300,
      type: "sandwiches",
      id: 2,
    },
    {
      name: "Bacon Avocado Fries",
      picture: "/Images/Snacks/Bacon Avocado Fries.jpg",
      price: 250,
      type: "snacks",
      id: 3,
    },
    {
      name: "Bacon Cheeseburgers",
      picture:
        "/Images/Burgers/Bacon Cheeseburgers with Sweet Potato Chips.jpg",
      price: 300,
      type: "burgers",
      id: 4,
    },
    {
      name: "Baileys Brownies",
      picture: "/Images/Cakes&Desserts/Baileys Brownies.jpg",
      price: 150,
      type: "cakes&desserts",
      id: 5,
    },
    {
      name: "Baked Tofu",
      picture: "/Images/Chinese/Baked Tofu.jpg",
      price: 130,
      type: "chinese",
      id: 6,
    },
    {
      name: "Beef Taco Salad Pizza",
      picture: "/Images/Pizzas/Beef Taco Salad Pizza.jpg",
      price: 360,
      type: "pizzas",
      id: 7,
    },
    {
      name: "Blueberry Maple Mojito",
      picture: "/Images/Beverages/Blueberry Maple Mojito Mocktail.jpg",
      price: 184,
      type: "beverages",
      id: 8,
    },
    {
      name: "Boozy Milkshake",
      picture: "/Images/Beverages/Boozy S'mores Milkshake.jpg",
      price: 200,
      type: "beverages",
      id: 9,
    },
    {
      name: "Broccoli Cheesy Bread",
      picture: "/Images/Snacks/Broccoli Cheesy Bread.jpg",
      price: 260,
      type: "snacks",
      id: 10,
    },
    {
      name: "Blueberry Cobbler",
      picture: "/Images/Cakes&Desserts/Brown Butter Blueberry Cobbler.jpg",
      price: 320,
      type: "cakes&desserts",
      id: 11,
    },
    {
      name: "Bucatini",
      picture: "/Images/Pastas/Bucatini with Crispy Salami and Tomatoes.jpg",
      price: 200,
      type: "pastas",
      id: 12,
    },
    {
      name: "Buddha's Delight",
      picture: "/Images/Chinese/Buddha's Delight.jpg",
      price: 264,
      type: "fruit",
      id: 13,
    },
    {
      name: "Buffalo Chickpea Salad",
      picture: "/Images/Salads/Buffalo Chickpea Salad.jpg",
      price: 160,
      type: "salads",
      id: 14,
    },
    {
      name: "Caprese Avocado Toast",
      picture: "/Images/Snacks/Caprese Avocado Toast.jpg",
      price: 270,
      type: "snacks",
      id: 15,
    },
    {
      name: "Caprese Burger",
      picture: "/Images/Burgers/Caprese Burger.jpg",
      price: 250,
      type: "burgers",
      id: 16,
    },
    {
      name: "Caprese Chicken Pasta",
      picture: "/Images/Pastas/Caprese Chicken Pasta.jpg",
      price: 330,
      type: "pastas",
      id: 17,
    },
    {
      name: "Cauliflower Burger",
      picture: "/Images/Burgers/Cauliflower Burger Buns.jpg",
      price: 280,
      type: "burgers",
      id: 18,
    },
    {
      name: "Cauliflower Pizza",
      picture: "/Images/Pizzas/Cauliflower Pizza.jpg",
      price: 360,
      type: "pizzas",
      id: 19,
    },
    {
      name: "Cheesecake Cups",
      picture: "/Images/Cakes&Desserts/Cheesecake Cups.jpg",
      price: 280,
      type: "cakes&desserts",
      id: 20,
    },
    {
      name: "Chicken Burger",
      picture: "/Images/Burgers/Chicken Burger.jpg",
      price: 260,
      type: "burgers",
      id: 21,
    },
    {
      name: "Chicken Fried Rice",
      picture: "/Images/Chinese/Chicken Fried Rice.png",
      price: 220,
      type: "chinese",
      id: 22,
    },
    {
      name: "Chicken Meatball Subs",
      picture: "/Images/Sandwiches/Chicken Parm Meatball Subs.jpg",
      price: 175,
      type: "sandwiches",
      id: 23,
    },
    {
      name: "Chicken Pasta Salad",
      picture: "/Images/Salads/Chicken Pasta Salad.jpg",
      price: 145,
      type: "salads",
      id: 24,
    },
    {
      name: "Chicken Salad Sandwich",
      picture: "/Images/Sandwiches/Chicken Salad Sandwich.jpg",
      price: 240,
      type: "sandwiches",
      id: 25,
    },
    {
      name: "Chicken Tetrazzini",
      picture: "/Images/Pastas/Chicken Tetrazzini.jpg",
      price: 300,
      type: "pastas",
      id: 26,
    },
    {
      name: "Chicken Skewers",
      picture: "/Images/Chinese/Chinese Chicken Skewers.jpg",
      price: 320,
      type: "chinese",
      id: 27,
    },
    {
      name: "Chocolate Orange Cake",
      picture: "/Images/Cakes&Desserts/Chocolate Orange Cake.jpg",
      price: 21,
      type: "cakes&desserts",
      id: 28,
    },
    {
      name: "Cookie Cake",
      picture: "/Images/Cakes&Desserts/Cookie Cake.jpg",
      price: 300,
      type: "cakes&desserts",
      id: 29,
    },
    {
      name: "Crab Cake Burger",
      picture: "/Images/Burgers/Crab Cake Burger.jpg",
      price: 290,
      type: "burgers",
      id: 30,
    },
    {
      name: "Choco Raspberry Pie",
      picture: "/Images/Cakes&Desserts/Dark Chocolate Raspberry Pie Bars.jpg",
      price: 180,
      type: "cakes&desserts",
      id: 31,
    },
    {
      name: "Lemon Sheet Cake",
      picture: "/Images/Cakes&Desserts/Duke's Lemon Drop Sheet Cake.jpg",
      price: 320,
      type: "cakes&desserts",
      id: 32,
    },
    {
      name: "Egg in a Hole Burger",
      picture: "/Images/Burgers/Egg in a Hole Burger.jpg",
      price: 280,
      type: "burgers",
      id: 33,
    },
    {
      name: "Farro Salad",
      picture: "/Images/Salads/Farro Salad.jpg",
      price: 200,
      type: "salads",
      id: 34,
    },
    {
      name: "Flatbread Pizza",
      picture: "/Images/Pizzas/Flatbread Pizza.jpg",
      price: 380,
      type: "pizzas",
      id: 35,
    },
    {
      name: "Frappuccino",
      picture: "/Images/Beverages/Frappuccino.jpg",
      price: 260,
      type: "beverages",
      id: 36,
    },
    {
      name: "Garlicky Spaghetti",
      picture: "/Images/Pastas/Garlicky Spaghetti.jpg",
      price: 270,
      type: "pastas",
      id: 37,
    },
    {
      name: "German Potato Salad",
      picture: "/Images/Salads/German Potato Salad.png",
      price: 230,
      type: "salads",
      id: 38,
    },
    {
      name: "Giant Party Sub",
      picture: "/Images/Sandwiches/Giant Party Sub.jpg",
      price: 275,
      type: "sandwiches",
      id: 39,
    },
    {
      name: "Grapefruit Mocktail",
      picture: "/Images/Beverages/Grapefruit and Rosemary Mocktail.jpg",
      price: 240,
      type: "beverages",
      id: 40,
    },
    {
      name: "Guacamole Burger",
      picture:
        "/Images/Burgers/Guacamole Cheeseburger with Chipotle Ketchup.jpg",
      price: 232,
      type: "burgers",
      id: 41,
    },
    {
      name: "Honey Walnut Shrimp",
      picture: "/Images/Snacks/Honey Walnut Shrimp.png",
      price: 253,
      type: "snacks",
      id: 42,
    },
    {
      name: "Honey Cauliflower",
      picture: "/Images/Snacks/Honey-Garlic Cauliflower.jpg",
      price: 260,
      type: "snacks",
      id: 43,
    },
    {
      name: "Hyderabadi C.Biryani",
      picture: "/Images/Biryanis/Hyderabadi Chicken Biryani.jpg",
      price: 420,
      type: "biryanis",
      id: 44,
    },
    {
      name: "Italian Club",
      picture: "/Images/Sandwiches/Italian Club.jpg",
      price: 250,
      type: "sandwiches",
      id: 45,
    },
    {
      name: "Keema Biryani",
      picture: "/Images/Biryanis/Keema Biryani.jpg",
      price: 350,
      type: "biryanis",
      id: 46,
    },
    {
      name: "Keto Broccoli Salad",
      picture: "/Images/Salads/Keto Broccoli Salad.jpg",
      price: 230,
      type: "salads",
      id: 47,
    },
    {
      name: "Kolkata Mutton Biryani",
      picture: "/Images/Biryanis/Kolkata style Mutton Biryani.jpg",
      price: 369,
      type: "biryanis",
      id: 48,
    },
    {
      name: "Kozhi Biryani",
      picture: "/Images/Biryanis/Kozhi biryani.jpg",
      price: 400,
      type: "biryanis",
      id: 49,
    },
    {
      name: "Laal Maas Biryani ",
      picture: "/Images/Biryanis/Laal Maas Biryani.jpg",
      price: 470,
      type: "biryanis",
      id: 50,
    },
  ],
});

export const viewState = atom({
  key: "viewState",
  default: "column",
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});

export const productFilteredState = atom({
  key: "productFilteredState",
  default: "",
});

export const filteredProducts = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const products = get(productState);
    const searchText = get(searchTextState);
    const filterItem = get(productFilteredState);
    let filteredProducts = [];
    filteredProducts = products
      .filter((product) => product.name.includes(searchText))
      .filter((product) =>
        filterItem == "" ? true : product.type == filterItem
      );

    return filteredProducts;
  },
});

export const filteredCounts = selector({
  key: "filteredCounts",
  get: ({ get }) => {
    let filtredProductsCount = get(filteredProducts);
    return filtredProductsCount.length;
  },
});
