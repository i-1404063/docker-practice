const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let textfield = "Learn Docker";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.send(`<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>Docker-practice</title>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <h2 class="heading">Our Course Goal!</h2>
        <p>${textfield}</p>
      </div>
      <div class="card">
        <form action="/course-goal" method="POST">
          <div class="form-group">
            <label for="input" class="label">Course Goal</label>
            <input type="text" name="goal" class="form-control" />
          </div>
          <div>
            <button class="btn">Set Course Goal</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
`);
});

app.post("/course-goal", async (req, res) => {
  const enterGoal = req.body.goal;
  if (enterGoal.trim() != "") {
    textfield = enterGoal;
  }
  res.redirect("/");
});

const port = 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}!`));
