let names = [{ name: 'William',
    _id: 817161207,
    created: '2017-05-25T18:38:36.120Z',
    modified: '2017-05-25T18:38:36.120Z' },
  { name: 'Jen',
    _id: 74790589,
    created: '2017-05-25T18:38:41.997Z',
    modified: '2017-05-25T18:38:41.997Z' },
  { name: 'Mark',
    _id: 380252378,
    created: '2017-05-25T18:38:46.756Z',
    modified: '2017-05-25T18:38:46.756Z' },
  { name: 'Barb',
    _id: 521867964,
    created: '2017-05-25T18:38:53.371Z',
    modified: '2017-05-25T18:38:53.371Z' }];

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

Name.prototype.delete = function(request, response) {
    console.log('in delete of name', request.params);

    for (var i = 0; i < names.length; i++) {
        if (names[i]._id === Number(request.params.id)) {
            console.log('removed element');
            names.splice(i, 1);
            break;
        }
    }

    response.status(202).end();
}


module.exports = new Name();
