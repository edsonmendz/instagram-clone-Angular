import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'instagram-clone-Angular';

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyBage6ZGXYOrQtHj4VAfiA5q0NX1rhN97A",
      authDomain: "jta-instagram-clone-483ee.firebaseapp.com",
      projectId: "jta-instagram-clone-483ee",
      storageBucket: "jta-instagram-clone-483ee.appspot.com",
      messagingSenderId: "786654825951",
      appId: "1:786654825951:web:d606b8e8ff49183d6d486a"
    };

    initializeApp(firebaseConfig)
  }
}
