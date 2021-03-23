function loop(value, test, update, body){
    let actual = value;
    while(test(actual)){
        body(actual);
        actual = update(actual)
    }
}

loop(3, n => n > 0, n => n - 1, console.log)