import { initializeApp } from "firebase/app";
import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase/auth";
import { getDatabase, connectDatabaseEmulator, ref } from "firebase/database";

export class Autenticacao {
    public cadastrarUsuario(usuario:Usuario): void {

        const auth = firebase.getAuth()
        const database = getDatabase()
        
        firebase.createUserWithEmailAndPassword( auth, usuario.email, usuario.senha)
            .then((resposta:any) => {
                // TODO: Replace the following with your app's Firebase project configuration
                // See: https://firebase.google.com/docs/web/learn-more#config-object
                const firebaseConfig = {
                    // ...
                    // The value of `databaseURL` depends on the location of the database
                    databaseURL: "https://DATABASE_NAME.firebaseio.com",
                };
                
                // Initialize Firebase
                const app = initializeApp(firebaseConfig);
                
                
                // Initialize Realtime Database and get a reference to the service
                const database = getDatabase(app);
                            })
    }
}