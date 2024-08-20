import React, { useState } from "react";

export const useTodoList = () => {
    const [tarefa, setTarefa] = useState({
        titulo: '',
        descricao: '',
        status: 0,
        dataConclusao: null
    });

    const [listaTarefas, setListaTarefas] = useState([]);

    const handleAddTarefa = () => {
        if((tarefa.descricao !== "") && (tarefa.titulo !== "")){
            setListaTarefas([...listaTarefas, tarefa]);
            setTarefa({
                titulo: '',
                descricao: '',
                status: 0,
                dataConclusao: null
            })
        }
        else{
            alert("Preencha todos os campos para adicionar uma tarefa");
        }
    }

    const handleLimparLista = () => {
        setListaTarefas([]);
    }

    const handleRemoveOneItem = (id) => {
        setListaTarefas(listaTarefas.filter((item, index) => index !== id));
    }

    const handleConcluirTarefa = (id) => {
        const novaLista = listaTarefas.map((item, index) => {
            if(index === id){
                return {...item, status: 1, dataConclusao: Date.now()}
            }
            return item;
        });
        setListaTarefas(novaLista);
    }

    const handleReativarTarefa = (id) => {
        const novaLista = listaTarefas.map((item, index) => {
            if(index === id){
                return {...item, status: 0}
            }
            return item;
        });
        setListaTarefas(novaLista);
    }

    const handleChange = (e) => {
        setTarefa({
            ...tarefa,
            [e.target.name]: e.target.value
        });
    }

    return{
        tarefa, 
        setTarefa, 
        listaTarefas, 
        handleAddTarefa,
        handleLimparLista,
        handleRemoveOneItem,
        handleConcluirTarefa,
        handleReativarTarefa,
        handleChange
    }
}