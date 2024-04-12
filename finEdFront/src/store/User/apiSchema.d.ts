export type LoginPayload = {
    username: string;
    password: string;
    onSuccess: Function;
    onError:Function;
}