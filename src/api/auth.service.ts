import { HttpService } from "../shared/http.service";

import { UserDeatils } from "../entities/interfaces/user-detail";
import { userModel } from "../entities/user-details.entity";

import { RedisService } from "../shared/radis.service";
import { create } from "domain";
import { createHash } from "crypto";

export class authService {
  httpservice: HttpService;
  constructor() {
    this.httpservice = new HttpService();
  }

  async saveUser(user: UserDeatils): Promise<Boolean> {
    /* const existingRedisUser = await RedisService.getValue( user.email );
        if (!existingRedisUser) {
            const dbUser = await userModel.find({ email: user.email });
            if (!dbUser) { 
                user.password=createHash(user.password);
            }



            return false;
        }*/
    return false;
  }
}
