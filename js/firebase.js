import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc,
  serverTimestamp, onSnapshot, query, orderBy, where
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';
import {
  getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js';

const ALLOWED_EMAILS = ['gabritupini@gmail.com', 'gabritupini3@gmail.com'];

// Collections live in routiner-db with the stoa_ prefix to avoid any chance
// of colliding with Routiner or Life Lessons.
const COL_LOGS = 'stoa_moodLogs';

let db, auth;
let syncStatusCallback = null;

export function initFirebase() {
  const app = initializeApp({
    apiKey: "AIzaSyCaOEjgmmCbtl00fYif89iVCO5CewiSoVQ",
    authDomain: "routiner-db.firebaseapp.com",
    projectId: "routiner-db",
    storageBucket: "routiner-db.firebasestorage.app",
    messagingSenderId: "815158931879",
    appId: "1:815158931879:web:8c5cc7ccfed90210068682",
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
