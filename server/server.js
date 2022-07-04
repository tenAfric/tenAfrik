const express = requre('express')
const app = express()
const PORT = process.env.PORT || 8000


app.listen(PORT, ()=>{console.log(`app is running on PORT: ${PORT}`);})