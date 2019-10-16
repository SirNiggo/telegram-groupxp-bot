import { User } from "../models/User.model";
import { ServiceUtil } from "./ServiceUtil";
import { getConnection } from "typeorm";
import { ChatUser } from "../models/ChatUser.model";

export class UserService {

    async addUser(user: User, requestingUserId: number) {
        try {
            // This will throw an error if the user is not allowed to do that
            ServiceUtil.guard("add-user", requestingUserId);
            // This will throw an SQL error if the user already exists
            return await getConnection().getRepository(User).insert(user);
        } catch(err) {
            throw err;
        }
    }

    async updateUserXP(userId: number, amount: number, requestingUserId: number, chatId: number) {
        try {
            // This will throw an error if the user is not allowed to do that
            await ServiceUtil.guard("update-user-xp", requestingUserId, chatId);

            // This will throw an error if the target ChatUser does not exist
            const chatUser = await ServiceUtil.findChatUser(userId, chatId);

            chatUser.xp += amount;

            // This will throw an error if the call somehow fails
            await getConnection().getRepository(ChatUser).save(chatUser);
        } catch(err) {
            throw err;
        }
    }

}