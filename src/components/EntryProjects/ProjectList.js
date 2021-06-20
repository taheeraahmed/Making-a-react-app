import React from 'react';
import Projects from './Entries.js';
import EntryProject from './EntryProject.js';
import ChatBot from '../../images/chatbot.png'

const project_list = [];

for (const project in Projects) {
    let item = Projects[project];
    console.log(item.chips)
    project_list.push(
      <EntryProject
        key={item.title}
        title={item.title}
        description={item.description}
        linkName={item.linkName}
        linkPath={item.linkPath}
        imagePath={item.imagePath}
        /* 
        Liste med forskjellige chips blir sendt som props 
        Hvordan aksessere disse i den tilhørende child komponenten prosje
        */
        chips={item.chips}
      />
      )
  };

export class ProjectList extends React.Component{
  render(){
    return (
      <div>
        {project_list}
      </div>
    );
  }
}