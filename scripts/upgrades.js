function Upgrade(name, cost, max, cps, mult, des, id) {
    this.name = name;
    this.cost = cost;
    this.max = max;
    this.mult = mult;
    this.cps = cps;
    this.des = des;
    this.id = id;
    this.count = 0;

    this.buy = (bucks, amount) => {
        let totalCost = (this.cost) * amount;
        if (bucks >= totalCost) {
            if (this.max === 'unlimited' || this.count + amount < this.max) {
                bucks -= totalCost;
                return [bucks, this.mult, this.cps];
            } else {
                alert("You cannot own more than " + this.max + " of this upgrade");
            }
        } else {
            alert("You cannot afford this upgrade!");
        }
    };

    this.check = (bucks, amount) => {
        return bucks >= (this.cost) * amount ? this.id : false;
    };

    this.create = () => {
        let div = document.createElement('div');
        div.classList.add('upgrade');
        div.setAttribute('onclick', "upgrade('" + this.id + "')");
        div.id = this.id;

        let title = document.createElement('h3');
        title.classList.add('title');
        title.innerHTML = this.name;

        let cost = document.createElement('p');
        cost.classList.add('cost');
        cost.innerHTML = "Cost: <span class='cost-value'>" + formatNumber(this.cost) + "</span>";

        let statsTable = document.createElement('table');
        statsTable.innerHTML = "<tr><th>Mult</th><th>CPS</th></tr>";

        let statsRow = document.createElement('tr');
        statsRow.innerHTML = "<td><span class='" + getType(this.mult) + "'>" + getSymbol(this.mult) + formatNumber(this.mult) + "</span></td>";
        statsRow.innerHTML += "<td><span class='" + getType(this.cps) + "'>" + getSymbol(this.cps) + formatNumber(this.cps) + "</span></td>";

        statsTable.appendChild(statsRow);

        let description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = this.des;

        div.appendChild(title);
        div.appendChild(cost);
        div.appendChild(statsTable);
        div.appendChild(description);

        return div;
    };
}

function formatNumber(num) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "Qa" },
        { value: 1e18, symbol: "Qi" },
        { value: 1e21, symbol: "Sx" },
        { value: 1e24, symbol: "Sp" },
        { value: 1e27, symbol: "Oc" },
        { value: 1e30, symbol: "No" },
        { value: 1e33, symbol: "Dc" },
        { value: 1e36, symbol: "Ud" },
        { value: 1e39, symbol: "Dd" },
        { value: 1e42, symbol: "Td" },
        { value: 1e45, symbol: "Qad" },
        { value: 1e48, symbol: "Qid" },
        { value: 1e51, symbol: "Sxd" },
        { value: 1e54, symbol: "Spd" },
        { value: 1e57, symbol: "Ocd" },
        { value: 1e60, symbol: "Nod" }
    ];
    
    
    if (num === 0) return "0";

    const isNegative = num < 0;
    const absNum = Math.abs(num);

    const item = lookup.slice().reverse().find(item => absNum >= item.value);

    const formatted = item ? (absNum / item.value).toFixed(2).replace(/\.0+$|\.(\d*[1-9])0+$/, "$1") + item.symbol : absNum.toString();
    
    return isNegative ? "-" + formatted : formatted;
}



function getType(val) {
    return val === 0 ? 'neutral' : val > 0 ? 'positive' : 'negative';
}

function getSymbol(val) {
    return val === 0 ? "±" : val > 0 ? "+" : "";
}
