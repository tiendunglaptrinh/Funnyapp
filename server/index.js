const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Create API endpoint
// app.get("/api", (req, res) => {
//     res.json({message: "Hello from server!"});
// })
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    // res.json({ messaage: "Hello from server!" }); // wrong field name
  });

app.listen(PORT, () =>{
    console.log(`Server is running at localhost on ${PORT}`);
})