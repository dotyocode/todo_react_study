import { useState } from 'react';
import { TarefasAdicionada } from '../TarefasAdicionadas/TarefasAdicionadas';
import styled from './tarefas.module.css';
import {PlusCircle} from 'phosphor-react';

interface tarefaInter {
  description: string,
  concluida: boolean
}

export function Tarefas() {

  const [tarefas, setTarefas] = useState<any>([]);
  const [newTarefa, setNewTarefa] = useState('');

  const tarefasConcluidas = tarefas.filter(function(concluidas: tarefaInter) {
      if(concluidas.concluida === true) {
        return true
      }
        return false
  }).length

  const totalDeTarefas = tarefas.filter(function(concluidas: tarefaInter) {
    if(concluidas) {
      return true
    }
      return false
  }).length

  function handleRemoveTarefa(tarefaDeletada: any) {
    console.log(tarefaDeletada)
    const listaTarefaDeletada = tarefas.filter((tarefa: any) => {
      return tarefaDeletada.description !== tarefa.description
    })
    setTarefas(listaTarefaDeletada);
  }

  function handleCreateNewTarefa() {
    event.preventDefault();
    const tarefinha = {
      description: newTarefa,
      concluida: false
    }
    setTarefas([...tarefas, tarefinha])
    setNewTarefa('');
  }

  function handleConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida 
    let tarefaConcluida = [...tarefas]
    setTarefas(tarefaConcluida)
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewTarefa(event.target.value)
  }

  return (
      <div className={styled.container}>
        <div>
      <form onSubmit={handleCreateNewTarefa}>
        <div className={styled.containers}>
          <input className={styled.inputs}  value={newTarefa} onChange={handleNewCommentChange} placeholder="Adicionar uma nova tarefa"></input>
          <button className={styled.buttons}>Criar <PlusCircle className={styled.plus}/></button>
        </div>
      </form>
        </div>
        <div className={styled.containerTarefas}>
          <div className={styled.boxTarefas}>
            <p className={styled.tarefas}>Tarefas Criadas </p>
            <p className={styled.tarefasNumero}>{totalDeTarefas}</p>
          </div>
          <div className={styled.boxConcluidas}>
            <p className={styled.concluidas}>Concluidas </p>
            <p className={styled.concluidasNumero}>{tarefasConcluidas} de {totalDeTarefas}</p>
          </div>
        </div>
        <div className={styled.containerTarefa}>
          {tarefas.map((tarefa: tarefaInter) => {
            return <TarefasAdicionada handleRemoveTarefa={handleRemoveTarefa} handleSetTarefaConcluida={() => handleConcluida(tarefa)}  key={tarefa.description} description={tarefa.description}/>
          })}
        </div>
      </div>

  )
}