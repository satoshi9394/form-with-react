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
                age: ''
            },
            usersSaved: INITIAL_STATE    
    } 


    handleName = (e)=>{
        let value = e.target.value
        this.setState(
          prevState => ({
              newUser: {
                ...prevState.newUser,
                name: value
            }
          })          
        );
    }

    handleAge = (e) =>{
        let value = e.target.value
        this.setState(
          prevState => ({
              newUser: {
                ...prevState.newUser,
                age: value
            }
          })          
        );
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

    render(){
        return(
            <div className="row">
                <div className="col s8">
                <p>Formulario React JS</p>
                    <form>
                    <Input
                    name='name'
                    type='text'
                    title='Nombre'
                    value={this.state.newUser.name}
                    placeholder='ingresa tu nombre'
                    handleChange={this.handleName}
                    />
                    <Input
                    name='ages'
                    type='number'
                    title='Edad'
                    value={this.state.newUser.age}
                    placeholder='Ingresa tu edad'
                    handleChange={this.handleAge}
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
                <div className='col s4'>
                    <PreviewDate
                    data={this.state.usersSaved}
                    />
                </div>
            </div>
        );
    }
}

export default FormContainer;