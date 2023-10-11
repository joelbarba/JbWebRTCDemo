import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Firestore, collection, doc, getDoc, getDocs, query, where, onSnapshot } from '@angular/fire/firestore';

interface IUser { name: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usersRef;
  usersDocs;
  usersSnapshot;

  // users$ = this.af.collection<IUser>('users');
  // todoList$ = this.todoListReference.valueChanges({
  //   idField: 'id'
  // });

  constructor(
    private firestore: Firestore,
    // private af: AngularFirestore
  ) {}
  
  async ngOnInit() {
    this.usersRef = collection(this.firestore, 'users');
    // const q = query(this.usersRef, where('name', '!=', 'Joel'));
    this.usersDocs = await getDocs(query(this.usersRef));
    this.usersSnapshot = this.usersDocs.docs.map((user) => user.data());

    // Get a document snapshot
    // const docRef = doc(this.firestore, 'users', 'y5YzN30wrF5ZVKCoDK1x');
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   console.log("No such document!");
    // }

    // // To get updates every time the document changes
    // const unsub = onSnapshot(docRef, { includeMetadataChanges: true }, (doc) => {
    //     console.log("Current data: ", doc.data());
    // });
  }
}
