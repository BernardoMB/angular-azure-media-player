import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "azure-media-services-in-angular";
  currentMovie =
    "https://courses-euwe.streaming.media.azure.net/0075ce84-4e42-4821-a65a-73056bfb7e5b/dbcef98449737251999287b0bea8e101.ism/manifest";
}
