// import node modules 
import mongoose from 'mongoose';

// import keys
import { mongodb } from './keys';

// connection
mongoose.connect(mongodb.URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
)
.then(db => console.log('DB is connected'))
.catch(err => console.log('Something was wrong...'));
