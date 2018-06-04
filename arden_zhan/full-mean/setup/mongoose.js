const mongoose  = require('mongoose');
const db_name   = "database_name";

mongoose.connect(`mongodb://localhost/${db_name}`);