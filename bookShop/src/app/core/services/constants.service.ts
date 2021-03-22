import { Injectable } from '@angular/core';

export class ConstantsService {
  app: string;
  ver: string;

  constructor(app: string, ver: string) {
    this.app = app;
    this.ver = ver;
  }

  getData(): any {
    return {
      app: this.app,
      ver: this.ver
    };
  }
}
