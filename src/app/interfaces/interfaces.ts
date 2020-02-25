export interface RespAttending {
  ok: boolean;
  attending: Attending[];
  message?: string;
}

export interface Attending {
  email: string;
  name: string;
}

export interface RespContact {
  ok: boolean;
  contacts: Contacts[];
  message?: string;
}

export interface Contacts {
  email: string;
  subject: string;
  firstName: string;
  message: string;
  lastName: string;
}