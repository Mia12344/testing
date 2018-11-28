import { Component, OnInit } from "@angular/core";
import { Message } from "nativescript-plugin-firebase/firebase";
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {

    constructor() {}
    
    ngOnInit() {
        firebase.init({
            // showNotificationsWhenInForeground: true,
            onMessageReceivedCallback: (message: Message) => {
                console.log(`Title: ${message.title}`);
                console.log(`Body: ${message.body}`);
            }
        }).then(
            () => {
                console.log("firebase.init done");
                firebase.getCurrentPushToken().then((token: string) => {
                    // may be null if not known yet
                    console.log(`Current push token: ${token}`);
                  });
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    }
}
