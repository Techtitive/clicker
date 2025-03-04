function Achievement(name, img, color, reason, id) {

    this.name = name;
    this.img = img;
    this.id = id;
    this.color = color;
    this.reason = reason;


    this.create = ()=> {
        let div = document.createElement("div");
        div.id = this.id;
        div.classList.add('achievement');

        let image = document.createElement('img');
        image.setAttribute('src', 'images/'+this.img);

        let about = document.createElement('div');
        about.classList.add('about');

        let header = document.createElement('h2');
        header.setAttribute('style', 'color:'+this.color);
        header.innerHTML = this.name;

        let des = document.createElement('p');
        des.classList.add('why');
        des.innerHTML = this.reason;


        // build

        about.appendChild(header);
        about.appendChild(des);

        div.appendChild(image);
        div.appendChild(about);

        return div;
    }
}
