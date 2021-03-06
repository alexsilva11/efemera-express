const path = require('path');
const fs = require('fs');

const homeController = {
    index: (req, res) => {
        let servicos = [{
                nome: 'Desenvolvimento Web',
                imagem: '/imagens/undraw_dev_focus.svg'
            },
            {
                nome: 'Marketing Digital',
                imagem: '/imagens/undraw_social_dashboard.svg'
            },
            {
                nome: 'Marketing Digital',
                imagem: '/imagens/undraw_mobile_apps.svg'
            }
        ]

        let banners = [
            '/imagens/banner.jpg',
            '/imagens/banner1.jpg',
            '/imagens/banner2.jpg'
        ]

        res.render('index', {
            title: 'Home',
            listarServicos: servicos,
            listaBanners: banners
        });
    },
    contato: (req, res) => {
        let {
            nome,
            email,
            mensagem
        } = req.body;

        const fileContato = path.join('db', 'contatos.json');

        let listaContato = {}

        if(fs.existsSync(fileContato)){
            listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
            listaContato = JSON.parse(listaContato);
            listaContato.inscritos.push(nome, email, mensagem);
        } else {
            listaContato = {
                inscritos: [nome, email, mensagem]
            };
        }

        listaContato = JSON.stringify(listaContato);

        fs.writeFileSync(fileContato, listaContato);

        res.render('contato', {
            nome,
            email,
            mensagem,
            title: 'Contato'
        });
    },
    newsletter: (req, res) => {
        let {
            email
        } = req.query;


        const fileNewsletter = path.join('db', `newsletter.json`);

        let listaNewsletter = {};

        if(fs.existsSync(fileNewsletter)){
            listaNewsletter = fs.readFileSync(fileNewsletter, {encoding: 'utf-8'});
            listaNewsletter = JSON.parse(listaNewsletter);
            listaNewsletter.inscritos.push(email);
        } else {
            listaNewsletter = {
                inscritos: [email]
            };
        }

        listaNewsletter = JSON.stringify(listaNewsletter);

        fs.writeFileSync(fileNewsletter, listaNewsletter);
        
        
        
        // POST - req.body
        // GET - req.query
        // GET /:email - req.params

        res.render('newsletter', {
            email,
            title: 'Newsletter'
        });
    },
};

module.exports = homeController;