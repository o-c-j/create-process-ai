import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Osvaldo" 
            content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repudiandae, aspernatur sint deserunt ea quo, eligendi ipsam repellendus tempora suscipit blanditiis at velit cum consectetur iure eos voluptatibus, doloremque fugiat?" 
          />
          
          <Post 
            author="Osvaldo" 
            content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repudiandae, aspernatur sint deserunt ea quo, eligendi ipsam repellendus tempora suscipit blanditiis at velit cum consectetur iure eos voluptatibus, doloremque fugiat?" 
          />
        </main>
      </div>
    </div>
    
  )
}
