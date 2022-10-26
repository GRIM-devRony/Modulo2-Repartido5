const express = require('express');
const v1InsumoRouter = require('./v1/routes/insumoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/insumos', v1InsumoRouter);


app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})