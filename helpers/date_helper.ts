export class DateHelper{
    readonly currentDate: Date;
    constructor(){
        this.currentDate = new Date();
    }
    async getCurrentDay(){
        return this.currentDate.getDate();
    }
    async getCurrentMonth(){
        const currentMonth = this.currentDate.getMonth();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[currentMonth];
    }
    async getCurrentDateTime(){
        return this.currentDate.toUTCString();
    }
}