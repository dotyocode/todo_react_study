import { Header } from './components/Header/Header'
import { Tarefas } from './components/Tarefas/Tarefas'
import './globalStyles.css'
import styled from './app.module.css';

function App() {

  return (
    <>
      <Header />
      <div>
        <main>
          <div className={styled.mainContainer}>
            <Tarefas />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
