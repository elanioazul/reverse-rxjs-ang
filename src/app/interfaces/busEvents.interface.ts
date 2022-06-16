export enum EventKeys {
    ALL = "all-events",
    SINGLE = "single-event"
}

export interface IBroadcastEvent {
    key: EventKeys,
    data: string
}