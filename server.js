const express = require("express");
const app = express();

app.use(express.json());
app.use(require("morgan")("dev"));

app.use("/api", require("./api"));

app.use((err, res, next) => {
  console.error(err);
  const status = err.status ?? 500;
  const message = err.message ?? "Internal server error.";
  res.status(status).json({ message });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
