import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActionCreators from 'actions/todo';
import TodoList from 'components/todo-list';
import ProperListRender from 'components/new_component/test.jsx';
import Layout from 'components/new_component/layout.jsx';
import Devices  from 'components/new_component/devices.jsx';
import List  from 'components/new_component/list.jsx';
import Chart  from 'components/new_component/chart.jsx';
import Map  from 'components/new_component/map.jsx';
import SideBar  from 'components/new_component/sideBar.jsx';
import Header  from 'components/new_component/header.jsx';


export default class HomeView extends React.Component {
    constructor (props) {
      super(props);
      this.state={
        list: [1,2,5,4,3]
      };
      this.addObjToList = this.addObjToList.bind(this);
    }
    addObjToList () {
      this.setState((prevState)=>{
        prevState.list.push(prevState.list[prevState.list.length-1] 
                            + prevState.list[prevState.list.length-2]);
        return {
          list: prevState.list
        }
      })
    }
  render () {
    return (       
        <Layout>
            <div>
              <Header/>
            </div>
           <div className="nav">
            <SideBar addToList = {this.addObjToList}/>
           </div>
           <div className="content">       
			<Layout>
				<div className = "row"><Devices/> <List list={this.state.list}/>
				</div>
				<div className = "row"><Chart sumLastIndexes = 
				{this.state.list[this.state.list.length - 1]}/> <Map/>
				</div>				
			</Layout>
			</div>   
		</Layout>  
         
    );
  }
}
