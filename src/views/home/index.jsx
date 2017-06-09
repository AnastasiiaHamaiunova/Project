import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActionCreators from 'actions/todo';
import TodoList from 'components/todo-list';
import ProperListRender from 'components/new_component/test.jsx';
import Layout from 'components/new_component/layout.jsx';

@connect(state => ({ todos : state.todos }))
export default class HomeView extends React.Component {
  constructor () {
    super();
    this.state = {
      todo : ''
    };
  }

  componentWillMount () {
    this._todoActions = bindActionCreators(
      TodoActionCreators, this.props.dispatch
    );
  }

  _bindTo (prop) {
    return (e) => this.setState({
      [prop] : e.target.value
    });
  }

  _createTodo (e) {
    e.preventDefault();
    this.props.dispatch(TodoActionCreators.createTodo(this.state.todo));
    this.setState({
      todo : ''
    });
  }

  renderNewTodoForm () {
    return (
      <form onSubmit={::this._createTodo}>
        <div className='row'>
          <div className='col-sm-9'>
            <input className='form-control'
                   placeholder='Do something else!'
                   value={this.state.todo}
                   onChange={this._bindTo('todo')} />
          </div>
          <div className='col-sm-3'>
            <button type='submit' className='btn btn-block btn-default'>
              Create Todo
            </button>
          </div>
        </div>
      </form>
    );
  }

  render () {
    const todos = this.props.todos.toJS();

    return (
      <div className='view view--home'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
			<Layout>
				<ProperListRender list={[1,2,3,4,'five',6,7,8,9,10]}/>
			</Layout>			
          </div>
        </div>
      </div>
    );
  }
}
