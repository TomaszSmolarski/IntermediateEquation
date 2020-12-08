import Cell from "./Cell"

export default class MyData {
    constructor(supply, demand, cost, supplyCost, demandCost) {
        this.row = demand.length + 1;
        this.col = supply.length + 1;
        this.supply = supply;
        this.demand = demand;
        this.cost = cost;
        this.supplyCost = supplyCost;
        this.demandCost = demandCost;
        this.balanced = true;
        this.myGrid = new Array(this.col)
        this.indexOfUnitProfit = new Array(this.col*this.row)
        this.indexOfTransportation =  new Array(this.col*this.row)
        this.alfa = new Array(this.col)
        this.beta = new Array(this.row)
        this.delta = new Array(this.col-1)
        this.indexOfRoute = new Array(4)
        this.costOfTransportation = 0

        this.setMygrid()

        this.setSupply_Demand()
        this.getIndexOfUnitProfit()
        this.setTransportation()
        // this.showGrid()
        this.updateIndexOfTransportion()
        this.setAfla_Beta()
        this.setDelta()
        this.iteration()

    }




    setMygrid() {

        for (let i = 0; i < 4; i++) {
            this.indexOfRoute[i] = new Array(2)
        }

        // for (let i = 0; i < 4; i++) {
        //     for (let j = 0; j < 2; j++) {
        //         this.indexOfRoute = 0
        //     }
        // }

        for (let i = 0; i < this.col; i++) {
            this.alfa[i] = new Array(2)
        }
        for (let i = 0; i < this.row; i++) {
            this.beta[i] = new Array(2)
        }

        for (let i = 0; i < this.col*this.row; i++) {
            this.indexOfUnitProfit[i] = new Array(2)
        }

        for (let i = 0; i < this.col; i++) {
            this.myGrid[i] = new Array(this.row)
        }
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                if (i <= this.col - 2 && j <= this.row - 2) {
                    let unitProfit = this.demandCost[j] - this.supplyCost[i] - this.cost[i][j]
                    this.myGrid[i][j] = new Cell(unitProfit, 0)

                } else {
                    this.myGrid[i][j] = new Cell(0, 0)
                }

            }
        }

    }


    showGrid() {
        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                console.log("unitProfit: " + this.myGrid[i][j].unitProfit + " transportation: " + this.myGrid[i][j].transportation)
            }
        }
    }

    setSupply_Demand() {
        if (this.supply.reduce((a, b) => a + b, 0) !== this.demand.reduce((a, b) => a + b, 0)) {
            this.balanced = false
        }
        let supplySum = this.supply.reduce((a, b) => a + b, 0)
        let demandSum = this.demand.reduce((a, b) => a + b, 0)
        this.supply.push(demandSum)
        this.demand.push(supplySum)

    }

    getIndexOfUnitProfit() {
        let listOfUnitProfit = [];
        for (let i = 0; i < this.col - 1; i++) {
            for (let j = 0; j < this.row - 1; j++) {
                listOfUnitProfit.push(this.myGrid[i][j].unitProfit)
            }
        }
        let step = 0;
        while (listOfUnitProfit.length > 0) {
            let maxProfit = Math.max.apply(null, listOfUnitProfit);
            let listOIndex = this.getIndexUnitProfit(maxProfit)
            let index = listOfUnitProfit.indexOf(maxProfit);
            this.indexOfUnitProfit[step][0] = listOIndex[0]
            this.indexOfUnitProfit[step][1] = listOIndex[1]
            listOfUnitProfit.splice(index, 1);
            step++;
        }

        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                if(!this.arrayAlreadyHasArray(this.indexOfUnitProfit,[i,j])){
                    this.indexOfUnitProfit[step][0] = i
                    this.indexOfUnitProfit[step][1] = j
                    step++
                }
            }
        }

    }

    arrayAlreadyHasArray(arr, subarr){
        for(var i = 0; i<arr.length; i++){
            let checker = false
            for(var j = 0; j<arr[i].length; j++){
                if(arr[i][j] === subarr[j]){
                    checker = true
                } else {
                    checker = false
                    break;
                }
            }
            if (checker){
                return true
            }
        }
        return false
    }

    getIndexUnitProfit(unitProfit) {
        let listOfIndex = []
        for (let i = 0; i < this.col - 1; i++) {
            for (let j = 0; j < this.row - 1; j++) {
                if (this.myGrid[i][j].unitProfit === unitProfit && listOfIndex.length === 0 && !this.myGrid[i][j].was) {
                    this.myGrid[i][j].was = true
                    listOfIndex.push(i)
                    listOfIndex.push(j)
                }
            }
        }
        return listOfIndex
    }

    setTransportation(){
        let tmpSupply =[]
        let tmpDemand = []
        for (let s of this.supply) {
            tmpSupply.push(s)
        }
        for (let d of this.demand){
            tmpDemand.push(d)
        }


        for (let index of this.indexOfUnitProfit){
            let indexX = index[0]
            let indexY = index[1]
            if(tmpSupply[indexX] < tmpDemand[indexY]){
                this.myGrid[indexX][indexY].transportation = tmpSupply[indexX]
                tmpDemand[indexY] -= tmpSupply[indexX]
                tmpSupply[indexX] = 0
            }
            else {
                this.myGrid[indexX][indexY].transportation = tmpDemand[indexY]
                tmpSupply[indexX] -= tmpDemand[indexY]
                tmpDemand[indexY] = 0
            }
        }
    }

    updateIndexOfTransportion(){
        for (let i = 0; i < this.col*this.row; i++) {
            this.indexOfTransportation[i] = new Array(2)
        }
        let step = 0
        if(this.balanced){
            for (let i = 0; i < this.col; i++) {
                for (let j = 0; j < this.row; j++) {
                    if(this.myGrid[i][j].transportation > 0){}
                    this.indexOfTransportation[step][0] = i
                    this.indexOfTransportation[step][1] = j
                    step += 1
                }
            }
        }
        else {
            for (let i = this.col-1; i >= 0; i--) {
                for (let j = this.row-1; j>=0; j--) {
                    if(this.myGrid[i][j].transportation > 0){}
                    this.indexOfTransportation[step][0] = i
                    this.indexOfTransportation[step][1] = j
                    step += 1
                }
            }
        }

        let length = this.col * this.row
        while (length > step){
            this.indexOfTransportation.pop()
            length -= 1

        }
        for (let a of this.alfa){
            a[1] = 0
            a[0] = 0
        }
        for (let b of this.beta){
            b[1] = 0
            b[0] = 0
        }
    }

    setAfla_Beta(){
        this.updateIndexOfTransportion()
        if(this.balanced){
            this.alfa[0][1] = 1
            this.alfa[0][0] = 0
        }
        else {
            this.alfa[this.col-1][1] = 1
            this.alfa[this.col-1][0] = 0
        }
        for(let index of this.indexOfTransportation){
            let indexX = index[0]
            let indexY = index[1]
            if(this.alfa[indexX][1] !== 1 && this.beta[indexY][1] === 1){
                this.alfa[indexX][0] = this.myGrid[indexX][indexY].unitProfit - this.beta[indexY][0]
                this.alfa[indexX][1] = 1
            }
            else if (this.alfa[indexX][1] === 1 && this.beta[indexY][1] !== 1){
                this.beta[indexY][0] = this.myGrid[indexX][indexY].unitProfit - this.alfa[indexX][0]
                this.beta[indexY][1] = 1
            }
        }

    }

    setDelta(){
        for (let i = 0; i < this.col-1; i++) {
            this.delta[i] = new Array(this.row-1)
        }

        for (let i = 0; i < this.col-1; i++) {
            for (let j = 0; j < this.row-1; j++) {
               if(this.myGrid[i][j].transportation === 0){
                   this.delta[i][j] =  this.myGrid[i][j].unitProfit - this.alfa[i][0] - this.beta[j][0]
               }
               else {
                   this.delta[i][j] =  0
               }

            }
        }
    }

    setIndexOfRoute(){
        let maxRow = this.delta.map(function(row){ return Math.max.apply(Math, row); });
        let maxPositiveValue  = Math.max.apply(null, maxRow);
        if(maxPositiveValue>0){
            let arrayOfIndex = this.getIndexDelta(maxPositiveValue);
            let indexY = arrayOfIndex[0]
            let indexX = arrayOfIndex[1]
            this.indexOfRoute[0][0] = indexX
            this.indexOfRoute[0][1] = indexY

            for (let col= 0; col < this.col-1; col++) {
                if(col !== indexY){
                    for (let row = 0; row <this.row-1 ; row++) {
                        if(this.myGrid[indexY][row].transportation > 0){
                            if(this.myGrid[col][row].transportation > 0 && this.myGrid[col][indexX].transportation > 0){
                                this.indexOfRoute[1][0] = indexX
                                this.indexOfRoute[1][1] = col
                                this.indexOfRoute[2][0] = row
                                this.indexOfRoute[2][1] = col
                                this.indexOfRoute[3][0] = row
                                this.indexOfRoute[3][1] = indexY
                            }
                        }
                    }
                }
            }
            this.setRoute()
        }
    }
    getAllCost(){
        this.costOfTransportation = 0
        for (let i = 0; i < this.col-1; i++) {
            for (let j = 0; j < this.row-1; j++) {
                if(this.myGrid[i][j].transportation > 0){
                    this.costOfTransportation += this.myGrid[i][j].transportation * this.cost[i][j]
                }
            }
        }
    }

    getIndexDelta(value){
        let arrayOfIndex = []
        for (let i = 0; i < this.col-1; i++) {
            for (let j = 0; j < this.row-1; j++) {
                if(this.delta[i][j] === value && arrayOfIndex.length===0){
                    arrayOfIndex.push(i)
                    arrayOfIndex.push(j)

                }
            }
        }
        return arrayOfIndex
    }

    setRoute(){
        let transportion_value = []
        for (let i = 0; i < 4; i++) {
            if(i>0){
                let index = this.indexOfRoute[i]
                transportion_value.push(this.myGrid[index[1]][index[0]].transportation)
            }
        }
        let minValue = Math.min.apply(null,transportion_value)

    }

    iteration(){
        let  step = 1
        this.showGrid()
        this.setIndexOfRoute()
        this.getAllCost()
        console.log(this.costOfTransportation)
        let maxRow = this.delta.map(function(row){ return Math.max.apply(Math, row); });
        let maxPositiveValue  = Math.max.apply(null, maxRow);
        if(maxPositiveValue>0){
            step++
            this.setAfla_Beta()
            this.setDelta()
            this.getAllCost()
            this.setIndexOfRoute()
            console.log(this.costOfTransportation)

        }


    }




}





