import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

//security packages
import helmet from "helmet";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;