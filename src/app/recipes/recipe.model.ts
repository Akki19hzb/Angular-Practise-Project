export class Recipe {
public name: string;
public description: string;
public imagepath: string;

constructor(name:string, desc: string, path: string ) {
  this.name = name;
  this.description = desc;
  this.imagepath = path;
}
}

