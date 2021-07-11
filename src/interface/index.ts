interface Leave {
    name: string | undefined,
    rest: number | undefined,
    dispense: string | undefined,
    type: string | undefined
}

interface Tab {
    title: string,
    text?: number
}

interface Backinfo {
    type: string, // 请假类型
    starttime: string, // 开始时间
    endtime: string, // 结束时间
    status: string // 审批状态
    applyDate: string // 申请时间
}

interface UserInfo {
    id: string,
    name: string,
    phone: string,
    avatar: string // 头像url
}

export {
    Leave,
    Tab,
    Backinfo,
    UserInfo
}