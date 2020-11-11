export class Quote {
    Like: number;
    Dislike: number;
   public showDescription: boolean;
     constructor(public id: number, public name: string, public description: string, public completeDate: Date){
      this.showDescription = false;
      this.Like = 0;
      this.Dislike = 0;
     }
    }