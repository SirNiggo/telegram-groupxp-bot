import { ChatUser } from "../models/ChatUser.model";
import { User } from "../models/User.model";
import { Chat } from "../models/Chat.model";
import { getConnection } from "typeorm";

export class ServiceUtil {

    static async guard(functionName: string, requestingUserId: number, forChatId?: number): Promise<undefined> {

        if (!forChatId) {

            const user = await getConnection().getRepository(User).findOne({ id: requestingUserId });

            if (!user || !user.technicalUser) {
                throw new Error("Only technical users can run functions that don't need a target chat.");
            }

            return;

        }

        const chatUser = await this.findChatUser(requestingUserId, forChatId);

        if (!chatUser.can(functionName)) {
            return;
        } else {
            throw new Error("Unauthorized.");
        }

    }

    static async findChatUser(userId: number, chatId: number): Promise<ChatUser> {
        const user = await getConnection().getRepository(User).findOne({ id: userId });

        if (!user) {
            throw new Error("Target user not found.");
        }

        const chat = await getConnection().getRepository(Chat).findOne({ id: chatId });

        if (!chat) {
            throw new Error("Target chat not found.");
        }

        const chatUser = await getConnection().getRepository(ChatUser).findOne({ user, chat });

        if (!chatUser) {
            throw new Error("Target user not found in that group.");
        }

        return chatUser;
    }

}