let John = {
    name: 'John',
    year: 1980,
    calclulateAge: function(){
        console.log(this);
        console.log(2016 - this.year);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        let proba = ()=>{
            console.log(this);
        }
        proba();

    }

}
John.calclulateAge();