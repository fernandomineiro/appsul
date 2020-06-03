import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform, ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera,
              private platform: Platform,
              ) { }


private _pictureConfiguration(source: number, callback): void {
  if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: source
        };

        this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        callback(base64Image);
        console.log('Imagem já convertida base64', base64Image);
         }, (err) => {
           console.error('Problema ao capturar a foto', err);
          });

            });
  }else {
    alert('Disponibilidade disponível somento no devide');
  }
}

public getPictureFromGalery(callback): void {
  this._pictureConfiguration(this.camera.PictureSourceType.PHOTOLIBRARY, photo => {
    callback(photo);
  })
}

public takePicture(callback): void{
  this._pictureConfiguration(this.camera.PictureSourceType.CAMERA, photo =>{
    callback(photo);
  })
}



}