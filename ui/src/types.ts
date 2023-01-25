export interface WhenInfo {
    approvals: string[]
    deposit: number
    depositor: string
    when: { height: number; index: number }
}

export type AccountLabel = "proxy" | "multi"