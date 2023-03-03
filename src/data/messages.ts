import { IMessage } from "../models";

export const messages: IMessage[] = [
    {
        "id": 1,
        "isMy": true,
        "isUnread": false,
        "text": "Здравствуйте. Вы экспертизы продаете?",
        "sendDate": "23.12 15:30"
    },
    {
        "id": 2,
        "isMy": false,
        "isUnread": false,
        "text": "Здравствуйте. Нет, только показываем.",
        "sendDate": "23.12 16:12"
    },
    {
        "id": 3,
        "isMy": true,
        "isUnread": true,
        "text": "Красивое.",
        "sendDate": "24.12 11:30"
    }
]