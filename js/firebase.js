import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc,
  serverTimestamp, onSnapshot, query, orderBy, where
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';
import {
  getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js';

const ALLOWED_EMAILS = ['gabritupini@gmail.com', 'gabritupini3@gmail.com'];

// Stoa has its own dedicated Firebase project (stoa-journal-db) so the
// collection name no longer needs the stoa_ prefix.
const COL_LOGS = 'moodLogs';
const COL_TRIGGERS = 'triggers';

let db, auth;
let syncStatusCallback = null;

export function initFirebase() {
  const app = initializeApp({
    apiKey: "AIzaSyDJ8D1bau4aPw96CINS6H6KukBI1xXmpk4",
    authDomain: "stoa-journal-db.firebaseapp.com",
    projectId: "stoa-journal-db",
    storageBucket: "stoa-journal-db.firebasestorage.app",
    messagingSenderId: "245233129863",
    appId: "1:245233129863:web:f797c8d74b72a983369b22",
  });
  db = getFirestore(app);
  auth = getAuth(app);
}

export function onAuthReady(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user && ALLOWED_EMAILS.includes(user.email)) {
      callback(user);
    } else if (user) {
      signOut(auth);
      callback(null);
    } else {
      callback(null);
    }
  });
}

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    if (!ALLOWED_EMAILS.includes(result.user.email)) {
      await signOut(auth);
      return { error: 'unauthorized' };
    }
    return { user: result.user };
  } catch (err) {
    return { error: err.message };
  }
}

export async function logout() {
  await signOut(auth);
}

export function onSyncStatus(callback) {
  syncStatusCallback = callback;
}

function emit(status) { if (syncStatusCallback) syncStatusCallback(status); }

// ===== Mood logs =====
export function subscribeToLogs(callback) {
  emit('connecting');
  return onSnapshot(
    query(collection(db, COL_LOGS), orderBy('date', 'desc')),
    (snap) => {
      emit('synced');
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    },
    (err) => {
      console.error('subscribeToLogs', err);
      emit('error');
    }
  );
}

export async function createLog(data) {
  emit('syncing');
  const ref = await addDoc(collection(db, COL_LOGS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  emit('synced');
  return ref.id;
}

export async function updateLog(id, data) {
  emit('syncing');
  await updateDoc(doc(db, COL_LOGS, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
  emit('synced');
}

export async function deleteLog(id) {
  emit('syncing');
  await deleteDoc(doc(db, COL_LOGS, id));
  emit('synced');
}

// ===== Triggers =====
export function subscribeToTriggers(callback) {
  emit('connecting');
  return onSnapshot(
    query(collection(db, COL_TRIGGERS), orderBy('date', 'desc')),
    (snap) => {
      emit('synced');
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    },
    (err) => {
      console.error('subscribeToTriggers', err);
      emit('error');
    }
  );
}

export async function createTrigger(data) {
  emit('syncing');
  const ref = await addDoc(collection(db, COL_TRIGGERS), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  emit('synced');
  return ref.id;
}

export async function updateTrigger(id, data) {
  emit('syncing');
  await updateDoc(doc(db, COL_TRIGGERS, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
  emit('synced');
}

export async function deleteTrigger(id) {
  emit('syncing');
  await deleteDoc(doc(db, COL_TRIGGERS, id));
  emit('synced');
}
