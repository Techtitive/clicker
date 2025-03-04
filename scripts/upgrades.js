
function Upgrade(name, cost, max, cps, mult, des, id) {
    this.name = name;
    this.cost = cost;
    this.max = max;
    this.mult = mult;
    this.cps = cps;
    this.des = des;
    this.id = id;

    // Defaults

    this.count = 0;


    
    this.buy = (bucks, amount)=> {
        if (bucks >= this.cost*amount) {
            if (this.max == 'unlimited') {
                bucks -= this.cost*amount;
                return [bucks, this.mult, this.cps];
            } else {
                if (this.count+1 >= this.max) {
                    // replace this later
                    alert("You cannot own more than " + this.max + " of this upgrade");
                } else {
                    bucks -= this.cost*amount;
                    return [bucks, this.mult, this.cps];
                } 
            }
        } else {
            // replace this later
            alert("You cannot afford this upgrade!");
        }
    }
    
    
    this.check = (bucks, amount)=> {
        if (bucks>=this.cost*amount) {
            return this.id;
        } else {
            return false;
        }
    }
    

    this.create = ()=> {
        let div = document.createElement('div');
        div.classList.add('upgrade');
        div.setAttribute('onclick', "upgrade('"+this.id+"')");
        div.id = this.id;

        let title = document.createElement('h3');
        title.classList.add('title');
        title.innerHTML = this.name;

        let cost = document.createElement('p');
        cost.classList.add('cost');
        cost.innerHTML = "Cost: <span class='cost-value'>"+this.cost+"</span>";

        //let max = document.createElement('p');
        //max.classList.add('max');
        //max.innerHTML = "Max Ownable: " + this.max;

        let statsTable = document.createElement('table');
        statsTable.innerHTML = "<tr><th>Mult</th><th>CPS</th></tr>";

        var type = getType(this.mult)
        var type2 = getType(this.cps)
        var symbol = getSymbol(this.mult)
        var symbol2 = getSymbol(this.cps)

        let statsRow = document.createElement('tr');
        statsRow.innerHTML = "<td><span class='"+type+"'>"+symbol+this.mult+"</span></td>";
        statsRow.innerHTML += "<td><span class='"+type2+"'>"+symbol2+this.cps+"</span></td>";

        statsTable.appendChild(statsRow);

        let description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = this.des;

        // build

        div.appendChild(title);
        div.appendChild(cost);
        //div.appendChild(max);
        div.appendChild(statsTable);
        div.appendChild(description);

        return div;
    }
};


function getType(val) {
    if (val == 0) {
        return 'neutral';
    } else if (val > 0) {
        return 'positive';
    } else {
        return 'negative';
    }
}

function getSymbol(val) {
    if (val == 0) {
        return "±";
    } else if (val > 0) {
        return "+";
    } else {
        return ""; // the negative sign is already there
    }
}