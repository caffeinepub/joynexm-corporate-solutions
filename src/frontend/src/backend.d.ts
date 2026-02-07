import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Submission {
    id: Id;
    form: ContactForm;
    submittedBy: Principal;
    timestamp: Time;
}
export interface ContactForm {
    fullName: string;
    email: string;
    company: string;
    message: string;
    phone?: string;
}
export type Id = bigint;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllContactSubmissions(): Promise<Array<Submission>>;
    getCallerUserRole(): Promise<UserRole>;
    getContactSubmission(id: Id): Promise<Submission>;
    getContactSubmissionCount(): Promise<bigint>;
    isCallerAdmin(): Promise<boolean>;
    submitContact(form: ContactForm): Promise<void>;
}
