import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { CadastroService } from '../service/cadastro.service';
import { __spreadArrays } from 'tslib';




@Component({
  selector: 'app-b',
  templateUrl: './b.page.html',
  styleUrls: ['./b.page.scss'],
})
export class BPage implements OnInit {
  [x: string]: any;
  currentImage: any = [];
  nome:any;
  array: any = [];
  res:any;
  nome:any;
  image: any = [];
  valor:any;
  img:any;
  cpf: any;
  sobra:any;
  finalizado:any;
  t:any;
  s:boolean;
  z:any;
  tuca:any;
  constructor(
  public router: Router,
  public cadastroservice: CadastroService,

  
  private camera: Camera) { }

  ngOnInit() {
    this.tuca = 1;
  }

  a(){
    this.router.navigate(['a']);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.image.push({image: imageData});
       
       console.log(this.image);
      this.currentImage.push({image: 'data:image/jpeg;base64,' + imageData});     
      console.log(this.currentImage)
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

  delete(item){
    for (let i = 0; i < this.currentImage.length; i++) {
      if(this.currentImage[i]['image'] == item.image){
        this.currentImage.splice(this.currentImage.indexOf(item.image), 1);
      }
    }
  }


 
delay(ms: number): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
      this.router.navigate(['home']);
    }, ms);
  });
}

   readFile() {
 this.tuca = 0;
    this.valor = this.cadastroservice.davalor();
     this.cpf = this.valor.cpf;
     console.log(this.cpf);
    this.cadastroservice.enviara(this.valor).subscribe(response=>{
      console.log(response);
      console.log(this.valor);
      

     // this.readFile2(this.currentImage[i]);
       this.s = true;
       this.z = 11;
     

      
    })
    this.cadastroservice.enviarb(this.cpf,this.image).subscribe(lele=>{
      console.log(lele);
      console.log(this.image);
      this.finalizado = true;
      this.delay(5000);
      
    });
  } 

 

  
}
