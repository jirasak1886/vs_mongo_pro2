const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware

const app = express();
app.use(express.json());
dotenv.config(); // Load environment variables from .env

// Enable CORS
app.use(cors()); // This will allow all origins by default

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Config Routes
const roomRoutes = require("./routes/rooms");
const authRoute = require("./routes/auth");
const dataroomRoute = require("./routes/dataroom_routes");
const datatoolRoute = require("./routes/datatool_routes");

app.use("/api/dr", dataroomRoute);
app.use("/api/dt", datatoolRoute);
app.use("/api/", roomRoutes);
app.use("/api/auth", authRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
