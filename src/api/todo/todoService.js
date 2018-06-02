const Todo = require('./todo')
//Pesquisar, Inserir, Alterar, Excluir
Todo.methods(['get', 'post', 'put', 'delete'])
//Colocado pois no update o node-restful retorna o id do registro antigo
// e por padrão ele não respeita as validações definidas no schema do mongodb
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo