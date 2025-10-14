import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router({
  menu: [
    { id: 1, title: "Главная", url: "/" },
    { id: 2, title: "Технология", url: "/technology" },
    { id: 3, title: "График полетов", url: "/schedule" },
    { id: 4, title: "Гарантии", url: "/guarantees" },
    { id: 5, title: "О компании", url: "/about" },
    { id: 6, title: "Контакты", url: "/contacts" },
  ],
});
const middlewares = jsonServer.defaults();

// Add 1-second delay for all requests
server.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
});

server.use(middlewares);
server.use(router);

// Root endpoint for API information
server.get("/", (req, res) => {
  res.json({
    message: "JSON Server is running",
    endpoints: {
      menu: "GET /menu",
    },
  });
});

server.listen(3001, () => {
  console.log("JSON Server is running on http://localhost:3001");
  console.log("Available endpoints:");
  console.log("GET http://localhost:3001/");
  console.log("GET http://localhost:3001/menu");
});
