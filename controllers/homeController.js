const homeController = {
    index: (req, res) => {
        let servicos = [
            {nome: 'Desenvolvimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome: 'Marketing Digital', imagem: '/imagens/undraw_mobile_apps.svg'}
    ]

        let banners =[ 
            '/imagens/banner.jpg',
            '/imagens/banner1.jpg',
            '/imagens/banner2.jpg']

        res.render('index', { title: 'Home', listarServicos: servicos, listaBanners:banners});
    },
    contato: (req,res) => {
        let {nome, email, mensagem} = req.body;
        res.render('contato', {nome, email, mensagem, title:'Contato'});
    },
    newsletter: (req,res) => {
        let {nome, email} = req.body;
        res.render('newsletter', {nome, email, title:'Newsletter'});
    },
};

module.exports = homeController;