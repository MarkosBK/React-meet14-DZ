import React from 'react';

export default class FormValid extends React.Component {
    state = { name: '', age: 0, gender: 'man', email: '' };
    render() {
        const nameChange = (e) => {
            if (!(/[|\\,)(*&^%$#@!?'"]/g).test(e.target.value))
                this.setState({ name: e.target.value })
        }

        const ageChange = (e) => {
            var age = parseInt(e.target.value);
            if (age >= 0)
                this.setState({ age: age })
        }

        const genderChange = (e) => {
            this.setState({ gender: e })
        }

        const emailChange = (e) => {
            //if (/[\da-zA-Z]*@gmail.com/g.test(e.target.value))
            if (!(/[|\\,)(*&^%$#!?'"]/g.test(e.target.value)))
                this.setState({ email: e.target.value })
        }

        return (
            <div className="container mx-auto">
                <form className="card" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <input type='text' placeholder="name" value={this.state.name} onChange={nameChange}></input>
                        </li>

                        <li className="list-group-item">
                            <input type='number' placeholder="age" value={this.state.age} onChange={ageChange}></input>

                        </li>

                        <li className="list-group-item">
                            <div className='form-check'>
                                <input type='radio' name='radios' className='form-check-input' value={this.state.gender} onSelect={genderChange}></input>
                                <label for='radios' className='form-check-label'>man</label>
                            </div>

                            <div className='form-check'>
                                <input type='radio' name='radios' className='form-check-input' value={this.state.gender} onSelect={genderChange}></input>
                                <label for='radios' className='form-check-label'>woman</label>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <input type='text' placeholder="email" value={this.state.email} onChange={emailChange}></input>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}