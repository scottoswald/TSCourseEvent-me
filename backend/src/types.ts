interface Event {
    id: number;
    title: string;
    description?: string;
    date: Date;
    host_id: number;
    image_url?: string;
    host?: User;
    rsvps?: Rsvp[];
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Rsvp {
    id: number;
    name: string;
    email: string;
}