let dataJason = '{"results": [{"title": "Estudiar Js","priority": "alta","isDone": false},{"title": "Estudiar CSS","priority": "alta","isDone": true},{"title": "Estudiar OOP","priority": "media","isDone": false},{"title": "Estudiar IA","priority": "baja","isDone": false}]}'

let results = JSON.parse(dataJason);
//let results = {
//    title: String,
//    priority: String,
//    isDone: Boolean,
//};

//function results(title, priority, isDone) {
//    this.title = title;
//    this.priority = priority;
//    this.isDone = isDone;
//}

console.log(results)