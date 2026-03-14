export type Id = number;

export interface Event {
    id: Id;
    title: string;
    description?: string;
    date: Date;
    host_id: number;
    image_url?: string;
    host?: User;
    rsvps?: Rsvp[];
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Rsvp {
    id: number;
    name: string;
    email: string;
}