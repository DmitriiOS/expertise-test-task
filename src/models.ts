export interface IStatement {
    id: number
    number: string
    unreadCount: number
}

export interface ISection {
    id: number
    name: string
    unreadCount: number
}

export interface IMessage {
    id: number
    isMy: boolean
    isUnread: boolean
    text: string
    sendDate: string
}