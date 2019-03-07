class Gota {
  constructor(){
    this.x1 = random(0,width);
    this.y1 = random(0,height);
   this.l = 30;
    this.vel = 10;
    }
mostrar(){
 
  line(this.x1,this.y1,this.x1,this.y1+this.l);
}
  
  caer(){
   this.y1 = this.y1 + this.vel;
    
  }
  salir(){
    var res;
   if(this.y1 > height){
     res = true;
   }
    else{
      res = false; 
    
  }
    return res;

}
retornar(){
    this.y1 = -this.l;
}
}
