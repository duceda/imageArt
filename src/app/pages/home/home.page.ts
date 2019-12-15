import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { GoogleCloudVisionServiceService } from 'src/app/services/google-cloud-vision-service/google-cloud-vision-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedfeature: "LABEL_DETECTION";

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private vision: GoogleCloudVisionServiceService,
    public loadingController: LoadingController,
    private route: Router,
    public alertController: AlertController
  ) { }

  async selectPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }
  }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(async (imageData) => {
      const loading = await this.loadingController.create({
        message: 'Getting Results...',
        translucent: true
      });

      await loading.present();
      this.vision.getLabels(imageData, this.selectedfeature).subscribe(async (result) => {
        alert(result.json());
        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(imageData),
            result: JSON.stringify(result.json()),
            feature: JSON.stringify(this.selectedfeature)
          }
        };

        this.route.navigate(['showclass'], navigationExtras)
        await loading.dismiss()
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err);
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Select one option ',
      message: 'Take Photo or Select from Galary!!!',
      buttons: [
        {
          text: 'Camera',
          role: 'camera',
          handler: () => {
            this.takePhoto();
          }
        }, {
          text: 'Gallery',
          role: 'gallery',
          handler: () => {
            this.selectPhoto();
          }
        }
      ]
    });
    await alert.present();
  }

  radioGroupChange(event) {
    this.selectedfeature = event.detail;
  }
}
