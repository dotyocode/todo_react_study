import styled from './tarefasAdicionadas.module.css';
import {Trash} from 'phosphor-react';

interface tarefa {
  description: string,
  handleRemoveTarefa: any,
  handleSetTarefaConcluida: any
}

export function TarefasAdicionada(props: any) {

  function handleSetTarefaConcluidsa(){
    props.handleSetTarefaConcluida();
  }

  function handleRemoveItem() {
    props.handleRemoveTarefa(props)
  }

  return (
    <div className={styled.tarefas}>
      <div className={styled.checkBoxContainer}>
        <input type="checkbox" defaultChecked={false} onChange={handleSetTarefaConcluidsa} className={styled.checkboxRound} />
      </div>
      <div className={styled.textContainer}>
        <p>{props.description}</p>
      </div>
      <p onClick={handleRemoveItem} title="Deletar Tarefa">
        <Trash className={styled.trash} />
      </p>
    </div>
  )
}