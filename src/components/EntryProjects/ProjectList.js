import React from 'react';
import Projects from './Entries.js';
import EntryProject from './EntryProject.js';
import ChatBot from '../../images/chatbot.png'

const project_list = [];

for (const project in Projects) {
    let item = Projects[project];
    project_list.push(
      <EntryProject
        key={item.title}
        title={item.title}
        description={item.description}
        linkName={item.linkName}
        linkPath={item.linkPath}
        imagePath={ChatBot}
        chips={item.chips}
      />
      
      )
  };

export class ProjectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        chips: []
    };
}
  render(){
    return (
      <div>
        {project_list}
      </div>
    );
  }
}