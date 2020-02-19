import React, {Component} from 'react'

//componentes
import Input from '../components/Input';
import PreviewDate from '../components/PreviewData';
import Button from '../components/Button'

const INITIAL_STATE = [
    {
        name: "ceci",
        age: '25'
    }
]


class FormContainer extends Component {
// state refactorizar     
    state ={
            newUser: {
                name: '',
                age: '',
                userName: '',
            },
            usersSaved: INITIAL_STATE    
    } 

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    usersSaved: data
                });
            });
    }



    handleFormSubmmit = (e) =>{
        e.preventDefault();
        let userData = this.state.newUser;
        this.setState(prevState=>(
                {
                    usersSaved: [
                      ...prevState.usersSaved,
                      userData],
                    newUser: {
                        name: '',
                        age:''
                        }
                }
            )
        )
    }

    handleClear =(e) => {
        e.preventDefault();
        this.setState(()=>(
                {
                    newUser: {
                        name:'',
                        age: ''
                    },
                }
            )
        )
    }

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser:{...prevState.newUser,
                [name]: value,}
            })
        )
    }

    render(){
        return(
            <div className="row">
                <div className="col s7">
                <p>Formulario React JS</p>
                    <form>
                    <Input
                    name='name'
                    type='text'
                    title='Nombre'
                    value={this.state.newUser.name}
                    placeholder='ingresa tu nombre'
                    handleChange={this.handleInput}
                    />
                    <Input
                    name='ages'
                    type='number'
                    title='Edad'
                    value={this.state.newUser.age}
                    placeholder='Ingresa tu edad'
                    handleChange={this.handleInput}
                    />
                    <Input
                    name='userName'
                    type='text'
                    title='Nombre de usuario'
                    value={this.state.newUser.userName}
                    placeholder='Ingresa tu edad'
                    handleChange={this.handleInput}
                    />
                    <Button
                        action={this.handleFormSubmmit}
                        title='Enviar'
                    />
                    <Button
                        action={this.handleClear}
                        title='Borrar'
                    />
                    </form>
                </div>
                <div className='col s5'>
                    <PreviewDate
                    data={this.state.usersSaved}
                    />
                </div>
            </div>
        );
    }
}

export default FormContainer;