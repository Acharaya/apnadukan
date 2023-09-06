import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthCredential,
  checkActionCode,
} from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { LoginPageModule } from '../Pages/login/login.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: any;

  UserData = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  constructor(
    private firestore: Firestore,
    public router: Router,
    public alert: AlertController
  ) {}

  // Alert

  async showAlert(status, headerdata) {
    const Alert = await this.alert.create({
      subHeader: headerdata,
      message: status,
    });

    await Alert.present();
  }

  getUserDetails() {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const uid = user.uid;
        const docRef = doc(this.firestore, 'Users', uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('User_id', uid);
        let temp = docSnap.data().first_name;
        let first_name = temp.charAt(0).toUpperCase() + temp.slice(1);
        localStorage.setItem('First_name', first_name);

        localStorage.setItem('Last_name', docSnap.data().last_name);

        localStorage.setItem('Email', docSnap.data().email);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  register(UserData) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, UserData.email, UserData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.uid;
        UserData.User_id = user;
        setDoc(doc(this.firestore, 'Users', `${user}`), UserData);
        this.showAlert('You are registered', 'Registeration status');
        console.log(user);
        // console.log(user.uid);
        this.router.navigate(['/home']);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  login(UserData) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, UserData.email, UserData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        this.router.navigate(['/home']);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.showAlert('Invalid User data', 'Login status');
      });
  }

  Signout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.setItem('isLogged', '');
        localStorage.setItem('User_id', 'NULL');

        localStorage.setItem('First_name', 'NULL');

        localStorage.setItem('Last_name', 'NULL');

        localStorage.setItem('Email', 'NULL');

        this.showAlert('Logged out', 'Login status');
        this.router.navigate(['/login']);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  IsLogged() {
    const auth = getAuth();
    const ob = new Observable<boolean>((observer) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      });
    });

    return ob;
  }

  async StoreData(UserData) {
    const userdetails = collection(this.firestore, 'Users');
    await setDoc(doc(userdetails), UserData);
  }
}
