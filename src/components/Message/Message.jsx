import React, {Component} from 'react';
import './Message.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
class Message extends Component{
    constructor(){
        super();
        this.state  = {
            message: {
                "title": "example glossary",
                "GlossDiv": {
                    "title": "S",
                    "GlossList": {
                        "GlossEntry": {
                            "ID": "SGML",
                            "SortAs": "SGML",
                            "GlossTerm": "Standard Generalized Markup Language",
                            "Acronym": "SGML",
                            "Abbrev": "ISO 8879:1986",
                            "GlossDef": {
                                "para": "A meta-markup language, used to create markup languages such as DocBook.",
                                "GlossSeeAlso": ["GML", "XML"]
                            },
                            "GlossSee": "markup"
                        }
                    }
                }
            },
            time: "10/11/2020 14:48:55"
        }

    }

    render(){
        return (
            <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <Accordion.Toggle  variant="link" eventKey="0">
                  <div className = "messageContentBase">org.com.tr.havelsan.RADNET.IE114_01HibernateControlPanel <span className="now"> {this.state.time} </span></div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={this.state.message}></JSONPretty>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
            );
    }
    selam(){
       
           
    }
    
}
export default Message;