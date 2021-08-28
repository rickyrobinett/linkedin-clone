import { db } from "config/firebase";
import {
  addDoc,
  collection,
  DocumentData,
  FieldValue,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  serverTimestamp,
  startAfter,
} from "firebase/firestore";
import { makeAutoObservable } from "mobx";
import { Post } from "types/post";
import { store } from "./store";

class PostStore {
  postsRegistery = new Map<string, Post>();
  postsLimit = 10;
  hasMore = false;
  lastPostTimestamp: FieldValue | null = null;
  unsubscribePosts?: () => void;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.postsRegistery.clear();
    this.postsLimit = 10;
    this.hasMore = false;
    this.lastPostTimestamp = null;

    this.unsubscribePosts && this.unsubscribePosts();
    this.unsubscribePosts = undefined;
  };

  get posts() {
    return Array.from(this.postsRegistery.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  loadPosts = async () => {
    if (this.postsRegistery.size !== 0) {
      return;
    }

    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      limit(this.postsLimit)
    );

    this.unsubscribePosts = onSnapshot(postsQuery, (snapshot) => {
      this.setPostsFromSnapshot(snapshot);
    });
  };

  loadMore = async () => {
    if (!this.hasMore) {
      return;
    }

    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      startAfter(this.lastPostTimestamp),
      limit(this.postsLimit)
    );
    const postsSnapshot = await getDocs(postsQuery);

    this.setPostsFromSnapshot(postsSnapshot);
  };

  private setPostsFromSnapshot = (snapshot: QuerySnapshot<DocumentData>) => {
    if (snapshot.size < this.postsLimit) {
      this.hasMore = false;
    } else {
      this.hasMore = true;
    }

    snapshot.docs.forEach((doc) => {
      if (!this.lastPostTimestamp) {
        this.lastPostTimestamp = doc.data().timestamp;
      } else {
        const lastTimestamp = new Date(
          // @ts-ignore
          this.lastPostTimestamp?.toDate()
        ).getTime();

        const currentTimestamp = new Date(
          doc.data().timestamp?.toDate()
        ).getTime();

        if (currentTimestamp < lastTimestamp) {
          this.lastPostTimestamp = doc.data().timestamp;
        }
      }

      const post = {
        id: doc.id,
        ...doc.data(),
        timestamp: new Date(doc.data().timestamp?.toDate()),
      } as Post;

      this.postsRegistery.set(post.id, post);
    });
  };

  createPost = async (message: string) => {
    const { user } = store.userStore;

    if (!user) {
      return false;
    }

    const { displayName, email, photoURL } = user;

    await addDoc(collection(db, "posts"), {
      message,
      displayName,
      email,
      photoURL,
      timestamp: serverTimestamp(),
    });

    return true;
  };
}

export default PostStore;
