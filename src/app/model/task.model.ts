export interface task{
    deadline: number
    desc: string
    executor: string | null
    finishedDate: number
    isAssign: boolean
    isFinished: boolean
    name: string
    priority: string
    publishDate: number
    publisher: string
    _id: string
}

export interface addTask{
    taskName: string,
    desc: string,
    deadline: string,
    priority: string,
    publisher: string,
    executor: string
}