import { Injectable, NgZone } from '@angular/core';
import { fromCollectionRef } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
  getDoc,
  query,
  docSnapshots,
} from '@angular/fire/firestore';

import { getDocs, onSnapshot, QuerySnapshot } from 'firebase/firestore';

import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  public pd;
  constructor(private db: Firestore, public alert: AlertController) {}
  ngOnInit() {}
  add() {
    const docRef = addDoc(collection(this.db, 'Shops'), {
      Product_id: 'A4567',
      product_name: 'Shirt',
      product_type: 'Clothings',
      Product_price: '24',
      product_rating: '4',
    });
  }

  async showAlert(status, headerdata) {
    const Alert = await this.alert.create({
      subHeader: headerdata,
      message: status,
    });

    await Alert.present();
  }

  async get_data() {
    const docRef = doc(this.db, 'Shops', 'dfdf');
    const docdata = await getDoc(docRef);
    if (docdata.exists()) {
      // console.log('Document data:', docdata.data());
      return docdata.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  // async get_alldata() {
  //   const q = query(collection(this.db, 'Shops'));
  //   const querySnapshop = await getDocs(q);
  //   querySnapshop.forEach((doc) => {
  //     // console.log(doc.data());
  //     doc.data();
  //   });
  // }

  async add_alldata(data) {
    const q = query(collection(this.db, 'Shops'));
    const querySnapshop = await getDocs(q);
    querySnapshop.forEach((doc) => {
      // console.log(doc.data());
      addDoc(collection(this.db, `Shops/${doc.id}/Products`), data);
    });
  }

  get_alldata() {
    const shop = collection(this.db, 'Shops');
    return collectionData(shop);
  }

  get_alldataidbase(collectionname, docid, collectionname2) {
    const shop = collection(
      this.db,
      `${collectionname}/${docid}/${collectionname2}`
    );
    return collectionData(shop);
  }
  get_allProductdata() {
    const product = collection(this.db, 'Products');

    return collectionData(product);
  }
  get_productdata() {
    const dat = new Observable((subscriber) => {
      const q = query(collection(this.db, 'Shops'));
      onSnapshot(q, (querysnapshot) => {
        querysnapshot.forEach((doc) => {
          const docRef = collection(this.db, `Shops/${doc.id}/Products`);
          const q2 = query(docRef);
          onSnapshot(q2, (query) => {
            query.forEach((docs) => {
              subscriber.next(docs.data());
            });
          });
        });
      });
    });
    return dat;
  }

  get_idbaseddata(docid) {
    const dat = new Observable((subscriber) => {
      const q = query(collection(this.db, `Shops/${docid}/Products`));
      onSnapshot(q, (querysnapshot) => {
        querysnapshot.forEach((doc) => {
          subscriber.next([doc.data()]);
        });
      });
    });
    return dat;
  }

  async add_all_userdata() {
    const q = query(collection(this.db, 'Users'));
    const querySnapshop = await getDocs(q);
    querySnapshop.forEach(async (doc) => {});
  }

  setSingledata(fielddata, collectionName, docid) {
    const shop = doc(this.db, collectionName, docid);
    setDoc(shop, { isShop: fielddata }, { merge: true });
  }

  setSingledatasubshop(fielddata, collectionName, docid) {
    const shop = doc(this.db, collectionName, docid);
    setDoc(shop, { isShop: fielddata }, { merge: true });
  }
  setmultipledata(data, collectionName, docid, ismerge: boolean) {
    const shop = doc(this.db, collectionName, docid);
    setDoc(shop, data, { merge: ismerge });
  }

  async addproductcrud(
    data,
    collectionName,
    collectionname2,
    docid,
    ismerge: boolean
  ) {
    // const shop = doc(
    //   this.db,
    //   `${collectionName}/${docid}/${collectionname2}/`,
    //   ''
    // );
    // setDoc(shop, data, { merge: ismerge });
    // this.functions.showAlert('Product Added', 'Upload');
    await addDoc(
      collection(this.db, `${collectionName}/${docid}/${collectionname2}`),
      data
    ).then((res) => {
      const shop = doc(
        this.db,
        `${collectionName}/${docid}/${collectionname2}`,
        res.id
      );
      setDoc(shop, { Product_id: res.id }, { merge: true });
    });

    this.showAlert('Data uploaded', 'Upload');
  }
  async getSingleData(docid) {
    const docRef = doc(this.db, 'Users', `${docid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  async getSingleShopData(docid) {
    const docRef = doc(this.db, 'Shops', `${docid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  async deleteproductcrud(collectionname, collectionname2, docid, productid) {
    await deleteDoc(
      doc(this.db, `${collectionname}/${docid}/${collectionname2}`, productid)
    );
  }

  async Updatecrud(
    collectionName,
    collectionname2,
    docid,
    productid,
    productName,
    productPrice,
    productType,
    productQuantity,
    productDescription
  ) {
    const shop = doc(
      this.db,
      `${collectionName}/${docid}/${collectionname2}`,
      productid
    );
    setDoc(
      shop,
      {
        Product_name: productName,
        Product_price: productPrice,
        Product_type: productType,
        Product_quantity: productQuantity,
        Product_description: productDescription,
      },
      { merge: true }
    ).then((res) => {
      this.showAlert('Data Updated', 'Update');
    });
  }
}
