import { auth } from "config/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { User } from "types/user";
import { resetStore } from "./store";

class UserStore {
  user: User | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.user = null;
    this.loading = true;
  };

  signInGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(({ user }) => {
        this.setUser(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  signInEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        this.setUser(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  signUpEmail = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: name }).then(() => {
          this.setUser(user);
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  signOut = () => {
    if (this.user) {
      signOut(auth);
      resetStore();
    }
  };

  setUser = (user: FirebaseUser | null) => {
    if (user) {
      this.user = {
        email: user.email!,
        displayName: user.displayName!,
        photoURL: user.photoURL!,
      };
    } else {
      this.user = null;
    }

    this.loading = false;
  };
}

export default UserStore;
