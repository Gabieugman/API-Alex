const pool = require('../config/db');

formatarCep = (cep) =>{
    if(cep.length === 8){
        return cep.slice(0, 5) + "-" + cep.slice(5);
    }
    return cep;
}

exports.create = async (req, res) =>{
    const {nome_pessoa, rua, bairro, cep} = req.body;

    try{
        const result = await pool.query('INSERT INTO endereco (nome_pessoa, rua, bairo, cep) VALUES ($1, $2, $3, $4) RETURNING *',
       [nome_pessoa, rua, bairro, formatarCep(cep)]);
       res.status(201).json(result.rows);

    } catch (error){
        console.log(error);
        res.status(500).json({Message: 'Erro ao cadastrar endereco'});
       }
    }

exports.getAll = async (req, res) =>{
    try{
        const result = await pool.query('SELECT * FROM endereco');
       res.status(201).json(result.rows);

    } catch (error){
        console.log(error);
        res.status(500).json({Message: 'Erro ao mostrar todos os endereços'});
       }
    }

    
exports.getOne = async (req, res) =>{
    const {id_pessoa} = req.params
    try{
        const result = await pool.query('SELECT * FROM endereco WHERE id_pessoa = $1', [id_pessoa]);
        if(result.rows.length === 0)
       res.status(400).json({Message: 'Sem dados do endereço'});

    } catch (error){
        console.log(error);
        res.status(500).json({Message: 'Erro! Tente novamente'});
       }
    }

    
exports.update = async (req, res) =>{
    const {id_pessoa} = req.params
    const {nome_pessoa, rua, bairro, cep} = req.body;
    try{
        const result = await pool.query('UPDATE endereco nome_pessoa = $1, rua = $2, bairro = $3, cep = $4', [id_pessoa, nome_pessoa, rua, bairro, cep]);
        if(result.rows.length === 0)
       res.status(400).json({Message: 'Sem dados do endereço'});

    } catch (error){
        console.log(error);
        res.status(500).json({Message: 'Erro! Tente novamente'});
       }
    }

    
exports.delete = async (req, res) =>{
    const {id_pessoa} = req.params
    try{
        const result = await pool.query('DELETE FROM endereco WHERE id_pessoa = $1', [id_pessoa]);
        if(result.rows.length === 0)
       res.status(400).json({Message: 'Sem dados do endereço'});

    } catch (error){
        console.log(error);
        res.status(500).json({Message: 'Erro! Tente novamente'});
       }
    }

    
    
    

