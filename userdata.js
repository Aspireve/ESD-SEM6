
const userData = {
    firstname: "John",
    lastName: "Doe",
    getFileName: function(){
        return `${this.firstname} ${this.lastName}`
    }
}

module.exports = userData