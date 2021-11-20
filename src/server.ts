import { serverHttp } from "./app";

const port = process.env.PORT

serverHttp.listen(port, () => 
console.log(`server is running on PORT ${port}`)
); 