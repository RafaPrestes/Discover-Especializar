import './home.css'
import { Card, CardProps} from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import React, {useState, useEffect} from 'react'

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = { 
  name: string;
  avatar: string;
}

export default function Home() {
  //studentName é o valor armazenado, e o setStudentName a função que atualiza o estado
  const [studentName, setStudentName] = useState('');
  //criamos um novo estado que vai armazenar os estudantes dentro de um array
  const [students, setStudents] = useState<CardProps[]>([])
  //criando um novo useState para consumir a API do github, passando nome e a foto
  const [user, setUser] = useState<User>({} as User)

  function handleAddStudent() {  
    if(studentName === '') {
      alert("Campo de nome vazio, favor preencher")
    }
    else {
      const newStudent = {
        name: studentName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })    
      }
      //setando os estudantes (usado o parametro prevState nessa estrutura para pegar os antigos e armazenar junto dos novos)
      setStudents(prevState => [...prevState, newStudent])     
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/RafaPrestes');
      const data = await response.json() as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []); //dentro dos [] é a dependencia, se a dependencia mudar, oq está dentro das {} vai ser ativado novamente

  return (
    <div className='container'>
      <header>
        <h1 className=''>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      {/* o conteudo que digitamos é passado pelo onchange e pegado o valor a partir do setStudentName */}
      <input onChange={e => setStudentName(e.target.value)} type="text" placeholder="Digite o nome.." />
      <button onClick={handleAddStudent} type="button">Adicionar</button>

      {  //mapeando e retornando no card o nome e o tempo                         
        students.map(student => <Card key={student.time} name={student.name} time={student.time}/>) 
      } 

      <Footer/>    
    </div>
  )
}
