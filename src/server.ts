'use strict';

import api from './Api';
import UserRouter from './routers/UserRouter';


// connec to mongoDB
api.bootDb(); 

// api routes
api.server.use('/api/users', UserRouter);

// api runs (port listen)
api.run();



