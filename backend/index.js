const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

dotenv.config();
// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());


// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

