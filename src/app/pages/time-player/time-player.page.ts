import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-player',
  templateUrl: './time-player.page.html',
  styleUrls: ['./time-player.page.scss'],
})
export class TimePlayerPage implements OnInit {
  minutos: string = "25";
  segundos: string = "00";
  interval: any;
  paused: boolean = true;
  started: boolean = false;
  initialMin: number = 25;
  initialSeg: number = 0;
  audio: any;
  work: boolean = true;
  mensajeSesiones : string = "4 sesiones antes de un descanso largo.";
  sesionInfo: string = "Sesión de trabajo";
  constructor() {
    this.audio = new Audio('path/to/audio/file.mp3');
  }

  ngOnInit() {
    this.paused = true;
    this.started = false;
  }

  startTimer() {
    this.paused = false;
    this.started = true;
    console.log("start");
    let min = parseInt(this.minutos);
    let seg = parseInt(this.segundos);
    this.interval = setInterval(() => {
      if (!this.paused) {
        seg--;
        if (seg < 0) {
          seg = 59;
          min--;
          if (min < 10) {
            this.minutos = "0" + min;
          } else {
            this.minutos = "" + min;
          }
        }
        if (seg < 10) {
          this.segundos = "0" + seg;
        } else {
          this.segundos = "" + seg;
        }
        if (min === 0 && seg === 0) {
          clearInterval(this.interval);
          this.audio.play();
        }
      }
    }, 1000);
  }

  pauseTimer() {
    this.paused = true;
    clearInterval(this.interval);
  }

  resumeTimer() {
    this.paused = false;
    this.started = true;
    this.startTimer();
  }

  resetTimer() {
    if(this.work){
      this.minutos = "25";
      this.segundos = "00";
    }else{
      this.minutos = "05";
      this.segundos = "00";
    }
    this.paused = true;
    this.started = false;
    clearInterval(this.interval);
  }

  changeCycle(){
    this.work = !this.work;
    if(!this.work){
      this.minutos = "05";
      this.segundos = "00";
      this.work = false;
      this.mensajeSesiones = "3 sesiones antes de un descanso largo.";
      this.sesionInfo = "Descanso corto";
    }
    else{
      this.minutos = "25";
      this.segundos = "00";
      this.work = true;
      this.mensajeSesiones = "4 sesiones antes de un descanso largo.";
      this.sesionInfo = "Sesión de trabajo";
    }
  }
}