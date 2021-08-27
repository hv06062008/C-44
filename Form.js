class Form{

    constructor(){
     this.name = createInput('Name');
     this.title = createElement('h2');
     this.button = createButton('Play');
     this.greeting = createElement('h2');
     this.reset = createButton('Reset')
    }
    hide(){
        this.name.hide();
        this.title.hide();
        this.button.hide();
        this.greeting.hide();

    }

    display(){
        this.title.html("The Two Epics");
        this.title.position(displayWidth/2-220,0,400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'brown');

        this.name.position(displayWidth/2-50,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.name.hide();
            this.button.hide();
            var name = this.name.value();

           
            this.greeting.html("Hello & Enjoy Your Game " + name);
            this.greeting.position(400,250);
            this.greeting.style('color', 'yellow');
            this.greeting.style('font-size', '100px');
            

        });

        

        
        
    }
}
