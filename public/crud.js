const tFilmes = {
    filmes:[
        {

        }
    ],
    posts: [
        {
        ID: 1,
        nome: '',
        descrição: '',
        data: '',
        avaliação: '',
        }
    ]
};

function criaFilmes({
    ID,
    nome,
    descrição,
    data,
    avaliação}){
    tFilmes.posts.push({
        ID,
        nome,
        descrição,
        data,
        avaliação
    });
}

criaFilmes({ tFilmes});

function pegaPost(){
    return tFilmes.posts;
}

function updatePost (filmes){
    pegaPost().find((post) => {
        return post.ID === parseInt(filmes.ID);

    })

}

function  deletePost (filmes){
    pegaPost().find((post) => {
        return post.ID !== parseInt(filmes.ID);
    })
}


document.getElementById('Editar')
    .addEventListener('click', updatePost)

    document.getElementById('Remover')
    .addEventListener('click', deletePost)