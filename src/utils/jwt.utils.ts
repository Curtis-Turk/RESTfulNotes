import { Jwt } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import config from "config";

const publicKey = config.get("publicKey");
const privateKey = config.get("privateKey");

// export function signJwt(object: Object, options?: Jwt.SignOptions | undefined) {
//   return Jwt.signJwt()
// }

function verifyJwt() {}
