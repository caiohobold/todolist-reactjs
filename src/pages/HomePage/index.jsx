import React, { useState } from "react";
import '../HomePage/index.css'
import { useTodoList } from "../../hooks/useTodoList";
import { InputTextMask } from "../../components/InputTask";
import { Button } from "../../components/InputTask/Button";

const HomePage = () => {

    const { tarefa, listaTarefas, handleAddTarefa, handleLimparLista, handleRemoveOneItem, handleChange, handleConcluirTarefa, handleReativarTarefa } = useTodoList();

    return (
        <>
            <h2>To-do list</h2>
            <InputTextMask handleChange={handleChange} name="titulo" value={tarefa.titulo} placeholder="Título"/>
            <br />
            <br />
            <InputTextMask handleChange={handleChange} name="descricao" value={tarefa.descricao} placeholder="Descrição"/>
            <br />
            <br />
            <Button onClick={handleAddTarefa} value="Adicionar"/>
            <Button onClick={handleLimparLista} value="Remover lista"/>
            <br />
            <h4>Lista de tarefas</h4>
            <ul className="ul-tasks">
                {listaTarefas.map((tarefa, index) => (
                    <li key={index} className="li-tasks" style={{textDecoration: tarefa.status === 1 ? 'line-through' : 'none'}}>
                        {tarefa.titulo} - {tarefa.descricao} 
                        <Button value="Remover" onClick={() => handleRemoveOneItem(index)}/>
                        <Button value={tarefa.status === 0 ? "Concluir" : "Ativar"} onClick={() => tarefa.status === 0 ? handleConcluirTarefa(index) : handleReativarTarefa(index)}/> 
                    </li>
                ))}
            </ul>
        </>
    );
}

export default HomePage;