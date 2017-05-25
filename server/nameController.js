const names = [];

function Name() {
    this.ping = function(request, response) {
        response.json({message: 'hello from name controller'})
    }
}

Name.prototype.add = function(request, response) {
    console.log('in add of name', request.body)
    const name = request.body;
    const date = new Date();
    name._id = Math.floor(Math.random()*1000000000);
    name.created = date;
    name.modified = date;
    names.push(name);
    response.json(name);
}

Name.prototype.all = function(request, response) {
    console.log('in all of name')
    response.json(names);
    console.log(names);
}



module.exports = new Name();
