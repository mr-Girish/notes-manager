const express = require('express');
const cors = require('cors');

const notesRoutes = require('./routes/notes');

const app = express();

app.use(cors());              // allow cross-origin
app.use(express.json());      // ✅ parses incoming JSON bodies

app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
