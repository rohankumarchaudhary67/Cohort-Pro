import dotenv from "dotenv";
import app from "./app";

// Configure environment variables
dotenv.config({
  path: "./.env",
});

// Error handling
app.on("error", (error) => {
  console.error("Something went wrong", error);
  throw error;
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
