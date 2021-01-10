export interface ILoginRes {
  authenticated: boolean,
  token: string,
  email: string,
  userName: string,
  err: string
}