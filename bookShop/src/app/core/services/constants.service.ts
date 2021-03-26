import { Injectable } from '@angular/core';

export class ConstantsService {
  app: string;
  ver: string;

  constructor(app: string, ver: string) {
    this.app = app;
    this.ver = ver;
  }

  getData(): {app: string; ver: string} {
    return {
      app: this.app,
      ver: this.ver
    };
  }
}
