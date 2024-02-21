// let items = [
//     { id: 1, name: "pencil" },
//     { id: 2, name: "pen" },
//     { id: 3, name: "table" },
//   ];

//   app.get("/items", (req, res) => {
//     res.json(items);
//   });

//   app.post("/items", (req, res) => {
//     const newItem = req.body;
//     items.push(newItem);
//     res.status(201).json(newItem);
//   });

//   app.get("/items/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const item = items.find((item) => item.id === id);
//     if (item) {
//       res.json(item);
//     }
//     res.status(404).json({ message: "No such item" });
//   });

//   app.delete("/items/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     items = items.filter((item) => item.id != id);
//     res.status(204).end();
//   });

//   app.patch("/items/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const updateItem = req.body;
//     let item = items.find((item) => item.id === id);
//     if (item) {
//       item.id = updateItem.id;
//       item.name = updateItem.name;
//       res.json(item);
//     }
//     res.status(404).json({ message: "Item not found" });
//   });
