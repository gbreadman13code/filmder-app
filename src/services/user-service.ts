import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { action, flow, makeObservable, observable } from "mobx";
import { FIREBASE_AUTH } from "../../firebase.config";

type TCredentials = {
  email: string;
  password: string;
};

export class UserService {
  @observable user: User | null = null;
  @observable loading: boolean = false;

  @observable credentials: TCredentials = { email: "", password: "" };
  @observable authError?: string;

  private readonly auth: Auth;

  constructor() {
    this.auth = FIREBASE_AUTH;
    makeObservable(this);
  }

  @action.bound
  setEmail(email: string) {
    this.credentials.email = email;
  }

  @action.bound
  setPassword(password: string) {
    this.credentials.password = password;
  }

  @flow.bound
  async *signIn() {
    this.loading = true;

    try {
      const response = await signInWithEmailAndPassword(
        this.auth,
        this.credentials.email,
        this.credentials.password
      );
      yield;
    } catch (error) {
      console.log(error);

      if (typeof error === "string") this.authError = error;
    } finally {
      this.loading = false;
    }
  }

  @flow.bound
  async *signUp() {
    this.loading = true;

    try {
      const response = await createUserWithEmailAndPassword(
        this.auth,
        this.credentials.email,
        this.credentials.password
      );
      yield;
    } catch (error) {
      console.log(error);

      if (typeof error === "string") this.authError = error;
    } finally {
      this.loading = false;
    }
  }

  @action.bound
  setUser(user: User | null): void {
    this.user = user;
  }

  init() {
    onAuthStateChanged(this.auth, (user) => {
      this.setUser(user);
    });
  }
}
